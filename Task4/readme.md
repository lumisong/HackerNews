# Comments for marker:

This file contains SQL queries designed to fulfill the requirements of Task 4. Each query is written based on the SQL structures, syntax, and functions covered within the unit. Below is a detailed description of each query, the techniques used, and explanations for each part.

## (i)

Task:
List the animal id, animal sex (displayed as Male or Female), date added to the system, the genus and species (as scientific_name), and the popular name for all animals born in the centre as a result of a breeding event. The popular name should include the word RHINOCEROS or HIPPOPOTAMUS, and the animal must have been added to the system before the year 2020. Order the results by their popular name, then by animal sex, and for animals of the same popular name and sex by animal id descending.

Implementation:

- Use a CASE statement to transform the animal sex code into 'Male' or 'Female'.
- Concatenate genus and species names to form the scientific name.
- Use LEFT JOIN to include species information.
- Filter results using the WHERE clause to select animals born from a breeding event and added before 2020.
- Use TO_CHAR to format the date.
- Sort the results by popular name, animal sex, and animal id in descending order.

SQL Techniques Used:

- CASE statement
- String concatenation using ||
- LEFT JOIN
- WHERE clause
- TO_CHAR function
- ORDER BY clause

## (ii)

Task:
List the genus name and the ratio of animals born in the wild to the total animals for that genus in the database. Show the ratio as a percentage, displayed to two decimal points. Order the results by genus name.

Implementation:

- Use a CASE statement within the SUM function to count animals born in the wild.
- Calculate the total number of animals using the COUNT function.
- Calculate the percentage using arithmetic operations and format it using ROUND and TO_CHAR functions.
- Group the results by genus name.
- Sort the results by genus name.

SQL Techniques Used:

- CASE statement
- Aggregate functions: SUM and COUNT
- Arithmetic operations
- ROUND function
- TO_CHAR function
- GROUP BY clause
- ORDER BY clause

## (iii)

Task:
List all animals indicating if the animal has been exchanged or not. The list should show animal id, centre name, popular name, and an exchange status message indicating if the animal has been exchanged or not. The list should be in animal id order within popular name order.

Implementation:

- Use a CASE statement to check if an animal has been exchanged by counting the number of times its id appears in the EXCHANGE table.
- Use LEFT JOIN to include exchange information and species information.
- Group the results by animal id, centre name, and popular name.
- Sort the results by popular name and animal id.

SQL Techniques Used:

- CASE statement
- COUNT function
- LEFT JOIN
- GROUP BY clause
- ORDER BY clause

## (iv)

Task:
List which is the most popular centre/s for exchange to or from. Your output should list the centre name and the number of times the centre has been used for an exchange_from or an exchange_to. The list should be displayed in the order of the centre name.

Implementation:

- Use JOIN to include information from the CENTRE table based on exchange_from and exchange_to centre ids.
- Use the COUNT function to count the number of exchanges for each centre.
- Group the results by centre name.
- Sort the results by centre name.

SQL Techniques Used:

- JOIN
- COUNT function
- GROUP BY clause
- ORDER BY clause

## (v)

Task:
List, for all centres, the centre id, centre name, number of animals currently held at the centre, total value of grants made to the centre, and the percentage of the total grant amount made to the centre. Order the output with the centre with the highest number of animals first. Where two centres have the same number of animals, order the output by centre id.

Implementation:

- Use WITH clause to create common table expressions (CTEs) for animal counts, grant totals, and total grants sum.
- Use COALESCE to handle NULL values in animal counts and grant totals.
- Format the total grants as currency using TO_CHAR.
- Calculate the percentage of total grants using arithmetic operations and format it using TO_CHAR.
- Join the CTEs with the CENTRE table.
- Sort the results by the number of animals in descending order and by centre id.

SQL Techniques Used:

- WITH clause (CTEs)
- COUNT function
- SUM function
- COALESCE function
- TO_CHAR function
- Arithmetic operations
- LEFT JOIN
- CROSS JOIN
- ORDER BY clause
