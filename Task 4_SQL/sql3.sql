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
