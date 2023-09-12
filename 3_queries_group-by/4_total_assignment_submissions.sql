SELECT cohorts.name as cohort, count(students.*) as total_submissions
FROM cohorts
JOIN students ON cohorts.id = cohort_id 
JOIN assignment_submissions ON students.id = student_id
GROUP BY cohorts.name 