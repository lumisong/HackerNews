/*****PLEASE ENTER YOUR DETAILS BELOW*****/
--task4-es.sql

--Student ID:
--Student Name:


/* Comments for your marker:




*/


/* (i) */
-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT 
    a.ANIMAL_ID,
    CASE 
        WHEN a.ANIMAL_SEX = 'M' THEN 'Male'
        WHEN a.ANIMAL_SEX = 'F' THEN 'Female'
    END AS ANIMAL_SEX,
    a.ANIMAL_ADDED,
    a.SPEC_GENUS || ' ' || a.SPEC_NAME AS scientific_name,
    s.SPEC_POPULAR_NAME
FROM
    ES.ANIMAL a
    LEFT JOIN ES.SPECIES s ON a.SPEC_GENUS = s.SPEC_GENUS AND a.SPEC_NAME = s.SPEC_NAME
WHERE 
    a.BREVENT_ID IS NOT NULL
    AND (s.SPEC_POPULAR_NAME LIKE '%RHINOCEROS%' OR s.SPEC_POPULAR_NAME LIKE '%HIPPOPOTAMUS%')
    AND TO_CHAR(a.ANIMAL_ADDED, 'YYYY') < '2020'
ORDER BY 
    s.SPEC_POPULAR_NAME, 
    ANIMAL_SEX, 
    a.ANIMAL_ID DESC;




/* (ii) */
-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT 
    SPEC_GENUS AS genus_name,
    TO_CHAR(
        ROUND((SUM(CASE WHEN BREVENT_ID IS NULL THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2),
        'FM999999990.00'
    ) AS wild_percentage
FROM 
    ES.ANIMAL
GROUP BY 
    SPEC_GENUS
ORDER BY 
    SPEC_GENUS;




/* (iii) */
-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT 
    a.ANIMAL_ID AS "Animal ID",
    c.CENTRE_NAME AS "Centre Name",
    s.SPEC_POPULAR_NAME AS "Popular Name",
    CASE 
        WHEN COUNT(e.ANIMAL_ID) > 0 THEN 'This animal has been Exchanged'
        ELSE 'This animal has NOT been Exchanged'
    END AS "Exchange Status"
FROM 
    ES.ANIMAL a
LEFT JOIN 
    ES.EXCHANGE e ON a.ANIMAL_ID = e.ANIMAL_ID
LEFT JOIN 
    ES.CENTRE c ON a.CENTRE_ID = c.CENTRE_ID
LEFT JOIN 
    ES.SPECIES s ON a.SPEC_GENUS = s.SPEC_GENUS AND a.SPEC_NAME = s.SPEC_NAME
GROUP BY 
    a.ANIMAL_ID, c.CENTRE_NAME, s.SPEC_POPULAR_NAME
ORDER BY 
    "Popular Name",
    a.ANIMAL_ID;




/* (iv) */
-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT 
    c.CENTRE_NAME AS "Centre Name",
    COUNT(e.EXCHANGE_NO) AS "Number of Exchanges(To/From)"
FROM 
    ES.EXCHANGE e
JOIN 
    ES.CENTRE c ON e.EXCHANGE_FROM_CENTRE_ID = c.CENTRE_ID OR e.EXCHANGE_TO_CENTRE_ID = c.CENTRE_ID
GROUP BY 
    c.CENTRE_NAME
ORDER BY 
    c.CENTRE_NAME;




/* (v) */
-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
WITH animal_counts AS (
    SELECT 
        CENTRE_ID,
        COUNT(ANIMAL_ID) AS "NUMBER OF ANIMALS"
    FROM 
        ES.ANIMAL
    GROUP BY 
        CENTRE_ID
),
grant_totals AS (
    SELECT 
        CENTRE_ID,
        SUM(GRANT_AMOUNT) AS "TOTAL GRANTS"
    FROM 
        ES.GRANTS
    GROUP BY 
        CENTRE_ID
),
total_grants_sum AS (
    SELECT 
        SUM(GRANT_AMOUNT) AS total_grants_sum
    FROM 
        ES.GRANTS
)
SELECT 
    c.CENTRE_ID AS "CENTRE ID",
    c.CENTRE_NAME AS "CENTRE NAME",
    COALESCE(ac."NUMBER OF ANIMALS", 0) AS "NUMBER OF ANIMALS",
    TO_CHAR(COALESCE(gt."TOTAL GRANTS", 0), '$999,999,999.00') AS "TOTAL GRANTS",
    CASE 
        WHEN tgs.total_grants_sum > 0 THEN
            TO_CHAR((COALESCE(gt."TOTAL GRANTS", 0) / tgs.total_grants_sum) * 100, '990.00')
        ELSE 
            0
    END AS "GRANTS%"
FROM 
    ES.CENTRE c
LEFT JOIN 
    animal_counts ac ON c.CENTRE_ID = ac.CENTRE_ID
LEFT JOIN 
    grant_totals gt ON c.CENTRE_ID = gt.CENTRE_ID
CROSS JOIN 
    total_grants_sum tgs
ORDER BY 
    "NUMBER OF ANIMALS" DESC,
    c.CENTRE_ID;

