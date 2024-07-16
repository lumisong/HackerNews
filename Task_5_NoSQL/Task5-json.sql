/*****PLEASE ENTER YOUR DETAILS BELOW*****/
--task5-json.sql

--Student ID:
--Student Name:


/* Comments for your marker:




*/

-- PLEASE PLACE REQUIRED SQL SELECT STATEMENT TO GENERATE 
-- THE COLLECTION OF JSON DOCUMENTS HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
WITH animal_counts AS (
    SELECT CENTRE_ID, COUNT(*) as animal_count
    FROM ES.ANIMAL
    GROUP BY CENTRE_ID
),
animal_exchanges AS (
    SELECT ANIMAL_ID, COUNT(*) as exchange_count
    FROM ES.EXCHANGE
    GROUP BY ANIMAL_ID
)
SELECT JSON_OBJECT(
    '_id' VALUE c.CENTRE_ID,
    'centre_details' VALUE JSON_OBJECT(
        'centre_name' VALUE c.CENTRE_NAME,
        'centre_address' VALUE c.CENTRE_ADDRESS,
        'center_type' VALUE ct.CT_DESCRIPTION
    ),
    'total_number_animals' VALUE ac.animal_count,
    'animals' VALUE JSON_ARRAYAGG(
        JSON_OBJECT(
            'animal_id' VALUE a.ANIMAL_ID,
            'popular_name' VALUE s.SPEC_POPULAR_NAME,
            'sex' VALUE a.ANIMAL_SEX,
            'date_added' VALUE TO_CHAR(a.ANIMAL_ADDED, 'DD-Mon-YYYY'),
            'wild_or_bred' VALUE CASE 
                WHEN a.BREVENT_ID IS NULL THEN 'From Wild'
                ELSE 'Centre Bred'
            END,
            'no_of_exchanges' VALUE COALESCE(ae.exchange_count, 0)
        )
    )
) AS json_output
FROM ES.CENTRE c
JOIN ES.CENTRE_TYPE ct ON c.CT_CODE = ct.CT_CODE
JOIN animal_counts ac ON c.CENTRE_ID = ac.CENTRE_ID
LEFT JOIN ES.ANIMAL a ON c.CENTRE_ID = a.CENTRE_ID
LEFT JOIN ES.SPECIES s ON a.SPEC_GENUS = s.SPEC_GENUS AND a.SPEC_NAME = s.SPEC_NAME
LEFT JOIN animal_exchanges ae ON a.ANIMAL_ID = ae.ANIMAL_ID
GROUP BY c.CENTRE_ID, c.CENTRE_NAME, c.CENTRE_ADDRESS, ct.CT_DESCRIPTION, ac.animal_count;
