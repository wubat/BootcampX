SELECT name, id, cohort_id
FROM students
WHERE phone IS NULL 
AND  email IS NULL