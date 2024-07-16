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
