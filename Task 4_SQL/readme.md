# Task 4 SQL (30 marks)

任务分析


1. <strong style="color:#c00000;">记住，在完成任务 4 时，您只允许使用本单元中涵盖的 SQL 结构、语法和函数。未涵盖的 SQL 语法和命令将不被接受或评分。不得使用视图和/或 PLSQL。</strong>
2. **对于以下每个问题，您只能编写一个 SELECT 语句。**
3. **使用附录 A 中列出的案例研究和数据模型编写 SQL 来回答以下查询。**

每个问题都提供了示例输出，显示了您需要生成的输出形式。请注意，这仅是输出的形式，返回的数据可能会有所不同。

注意，所需的表格在 Oracle 数据库中的帐户 es 下可用。例如：

```sql
select * from es.animal;
```

具体问题：

## 问题 i:[4 mks]

编写 SQL SELECT 语句，列出以下内容：

- 动物 ID
- 动物性别（显示为 Male 或 Female）
- 添加到系统的日期
- 属和种
- 动物的通俗名称

这些动物必须满足以下条件：
- 在中心出生的（作为繁殖事件的结果）
- 通俗名称包含“RHINOCEROS”或“HIPPOPOTAMUS”
- 在 2020 年之前添加到系统

属和种名应在单列中显示，列名为 scientific_name。输出按通俗名称排序，然后按动物性别排序，对于相同通俗名称和性别的动物按动物 ID 降序排序。

```sql
SELECT 
    ANIMAL_ID, 
    CASE 
        WHEN ANIMAL_SEX = 'M' THEN 'Male' 
        WHEN ANIMAL_SEX = 'F' THEN 'Female' 
        ELSE 'Unknown' 
    END AS ANIMAL_SEX, 
    ANIMAL_ADDED, 
    CONCAT(SPEC_GENUS, ' ', SPEC_NAME) AS scientific_name
FROM 
    ANIMAL
WHERE 
    BREEVENT_ID IS NOT NULL 
    AND (SPEC_NAME LIKE '%RHINOCEROS%' OR SPEC_NAME LIKE '%HIPPOPOTAMUS%')
    AND ANIMAL_ADDED < DATE '2020-01-01'
ORDER BY 
    SPEC_NAME, 
    ANIMAL_SEX, 
    ANIMAL_ID DESC;
```

## 问题 ii:[5 mks]

列出属名和在野外出生的动物数量与数据库中该属的总动物数量的比率。比率显示为百分比，保留两位小数。按属名排序。

## 问题 iii:[5 mks]

编写 SQL SELECT 语句，列出所有动物，显示动物是否已交换。列表应显示动物 ID、中心名称、通俗名称和交换状态消息。按通俗名称排序，通俗名称内按动物 ID 排序。

## 问题 iv:[6 mks]

编写 SQL SELECT 语句，列出最受欢迎的交换中心。输出应包括中心名称和中心作为交换源或交换目标的次数。按中心名称排序。

## 问题 v:[10 mks]

编写 SQL SELECT 语句，列出所有中心的中心 ID、中心名称、当前持有的动物数量、授予中心的总金额以及授予中心的总金额的百分比。按动物数量降序排列，动物数量相同的按中心 ID 排序。




