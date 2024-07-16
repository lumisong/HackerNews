# Task 5: NoSQL

This file contains SQL and MongoDB queries designed to fulfill the requirements of Task 5. Each query is written based on the SQL and MongoDB structures, syntax, and functions covered within the unit. Below is a detailed description of each query, the techniques used, and explanations for each part.

## (i)

### Task:

Write an SQL statement that generates the required JSON-formatted data from the tables owned by the user ES in the Oracle database.

### Implementation:

- Use `WITH` clause to create common table expressions (CTEs) for animal counts and animal exchanges.
- Use `JSON_OBJECT` to construct JSON objects for the centre and animals.
- Use `JSON_ARRAYAGG` to aggregate the animals into a JSON array.
- Use `CASE` statement to determine if the animal is from the wild or centre bred.
- Use `COALESCE` to handle NULL values in the exchange count.

### SQL Techniques Used:

- WITH clause (CTEs)
- JSON_OBJECT function
- JSON_ARRAYAGG function
- CASE statement
- COALESCE function
- LEFT JOIN
- TO_CHAR function

## (ii)

### Task:

Create a new collection and insert all documents generated in (i) above into MongoDB. Provide a drop collection statement right above the create collection statement. You may pick any collection name. After the documents have been inserted, use an appropriate `db.find` command to list all the documents you added.

### Implementation:

- Use `db.drop` to remove the existing collection if it exists.
- Use `db.insertMany` to insert multiple JSON documents into the new collection.
- Use `db.find` to list all documents in the collection.

### MongoDB Techniques Used:

- `db.drop`
- `db.insertMany`
- `db.find`

## (iii)

### Task:

Display the full centre details (name, address, and type) and the number of animals held for all centres with at least six animals.

### Implementation:

- Use `db.find` with a query to filter centres having at least six animals.
- Use projection to display specific fields: centre name, address, type, and the number of animals.

### MongoDB Techniques Used:

- `db.find` with query and projection

## (iv)

### Task:

Display the centre name and address for all centres that have at least one animal with the popular name Cheetah.

### Implementation:

- Use `db.find` with a query to filter centres having at least one animal with the popular name Cheetah.
- Use projection to display specific fields: centre name and address.

### MongoDB Techniques Used:

- `db.find` with query and projection

## (v)

### Task:

Move the Quokka with an animal_id of 3 from the Australia Zoo (id = AUS10) to the Werribee Open Range Zoo (id = AUS20).

### (a) Show the full details for the Australia Zoo (id = AUS10) and the Werribee Open Range Zoo (id = AUS20) before this move.

### (b) Move the Quokka with an animal_id of 3 as listed above (this move should be treated as a permanent transfer for this animal).

### (c) Show the full details for the Australia Zoo (id = AUS10) and the Werribee Open Range Zoo (id = AUS20) after the move has been recorded.
