const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const argument1 = process.argv[2];
const argument2 = process.argv[3];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
WHERE cohorts.name LIKE  `%${argument1}%`
JOIN cohorts ON cohort_id = cohorts.id
LIMIT ${argument2 || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`)
  })
  console.log(res.rows)
})
.catch(err => console.error('query error', err.stack));