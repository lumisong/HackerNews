#  Relational Algebra

NAME:
ID：

## i. Show the animal’s id, sex, species’ popular name for all animals kept in the centre named ‘Alice Springs Desert Park’. Note that only one centre is named ‘Alice Springs Desert Park’.[4 marks]

```
显示在名为‘阿丽斯泉沙漠公园’的中心内所有动物的id、性别和物种的通用名称。注意，只有一个中心被命名为‘阿丽斯泉沙漠公园’。
```
### 版本一：基础可视化格式，简单格式

1. 选择中心名为“Alice Springs Desert Park”的记录
   C1 = σ_{centre_name = 'Alice Springs Desert Park'} (CENTRE)

2. 获取该中心的ID
   C2 = π_{centre_id} (C1)

3. 选择在该中心饲养的所有动物
   A1 = ANIMAL ⨝ C2

4. 获取所需的列
   A2 = π_{animal_id, animal_sex, spec_genus, spec_name} (A1)

5. 将结果与SPECIES表连接以获取物种的常见名称
   S1 = SPECIES ⨝ A2

6. 投影所需的列
   R1 = π_{animal_id, animal_sex, spec_popular_name} (S1)

### 版本二：latex 格式

1. 选择中心名为“Alice Springs Desert Park”的记录：
   $$
   C1 = \sigma_{\text{centre\textunderscore name = 'Alice Springs Desert Park'}} (\text{CENTRE})
   $$

2. 获取该中心的ID：
   $$
   C2 = \pi_{\text{centre\textunderscore id}} (C1)
   $$

3. 选择在该中心饲养的所有动物：
   $$
   A1 = \sigma_{\text{centre\textunderscore id = 106}} (\text{ANIMAL})
   $$

4. 获取所需的列：
   $$
   A2 = \pi_{\text{animal\textunderscore id, animal\textunderscore sex, spec\textunderscore genus, spec\textunderscore name}} (A1)
   $$

5. 将结果与SPECIES表连接以获取物种的常见名称：
   $$
   S1 = \text{SPECIES} \bowtie A2
   $$

6. 投影所需的列：
   $$
   R1 = \pi_{\text{animal\textunderscore id, animal\textunderscore sex, spec\textunderscore popular\textunderscore name}} (S1)
   $$

### 测试上面的关系代数表达式

TODO:...;已经在博思白板上测试过了。有整体的流程图。

## ii.For each breeding exchange that happened between 1 Jul 2018 and 31 Aug 2018(inclusive), show the exchange number,exchange date, centre name in which the animal was transferred from, centre name in which the animal was transferred to, animal id,species genus and species name. [6 marks]

```
对于2018年7月1日至2018年8月31日期间发生的每一次繁殖交换，显示交换编号、交换日期、动物从哪个中心转移到哪个中心、动物ID、物种属和物种名称
```

### 版本一：基础可视化格式，简单格式

1. 选择指定日期范围内的交换记录
   E1 = σ_{exchange_date >= '2018-07-01' AND exchange_date <= '2018-08-31'} (EXCHANGE)

2. 获取繁殖交换类型的代码
   ET1 = σ_{et_description = 'breeding'} (EXCHANGE_TYPE)
   ET2 = π_{et_code} (ET1)

3. 将交换记录与繁殖交换类型连接
   E2 = E1 ⨝ ET2

4. 获取相关的交换和动物信息
   EA1 = E2 ⨝ ANIMAL

5. 获取转移的中心名称
   CF1 = CENTRE ⨝ π_{exchange_from_centre_id} (EA1)
   CF2 = π_{centre_id, centre_name} (CF1)
   CT1 = CENTRE ⨝ π_{exchange_to_centre_id} (EA1)
   CT2 = π_{centre_id, centre_name} (CT1)

6. 投影所需的列
   R2 = π_{exchange_no, exchange_date, CF2.centre_name, CT2.centre_name, animal_id, spec_genus, spec_name} (EA1)

### 版本二：latex 格式

1. **选择指定日期范围内的交换记录**：
   $$
   E1 = \sigma_{\text{exchange\textunderscore date} \geq '2018-07-01' \wedge \text{exchange\textunderscore date} \leq '2018-08-31'} (\text{EXCHANGE})
   $$

2. **获取繁殖交换类型的代码**：
   $$
   ET1 = \sigma_{\text{et\textunderscore description} = 'Breeding Program'} (\text{EXCHANGE\textunderscore TYPE})
   $$
   $$
   ET2 = \pi_{\text{et\textunderscore code}} (ET1)
   $$

3. **将交换记录与繁殖交换类型连接**：
   $$
   E2 = E1 \bowtie ET2
   $$

4. **获取相关的交换和动物信息**：
   $$
   EA1 = E2 \bowtie_{\text{EXCHANGE.animal\textunderscore id} = \text{ANIMAL.animal\textunderscore id}} \text{ANIMAL}
   $$

5. **获取转移的中心名称**：

   获取转出中心名称：
   $$
   CF1 = \rho_{\text{centre\textunderscore id \rightarrow from\textunderscore centre\textunderscore id, centre\textunderscore name \rightarrow from\textunderscore centre\textunderscore name}} (\text{CENTRE})
   $$
   $$
   EA2 = EA1 \bowtie_{\text{exchange\textunderscore from\textunderscore centre\textunderscore id} = \text{from\textunderscore centre\textunderscore id}} CF1
   $$

   获取转入中心名称：
   $$
   CT1 = \rho_{\text{centre\textunderscore id \rightarrow to\textunderscore centre\textunderscore id, centre\textunderscore name \rightarrow to\textunderscore centre\textunderscore name}} (\text{CENTRE})
   $$
   $$
   EA3 = EA2 \bowtie_{\text{exchange\textunderscore to\textunderscore centre\textunderscore id} = \text{to\textunderscore centre\textunderscore id}} CT1
   $$

6. **投影所需的列**：
   $$
   R2 = \pi_{\text{exchange\textunderscore no, exchange\textunderscore date, from\textunderscore centre\textunderscore name, to\textunderscore centre\textunderscore name, animal\textunderscore id, spec\textunderscore genus, spec\textunderscore name}} (EA3)
   $$

### 测试上面的关系代数表达式

1. **选择指定日期范围内的交换记录**：
   $$
   E1 = \sigma_{\text{exchange\textunderscore date} \geq \text{'2018-07-01'} \wedge \text{exchange\textunderscore date} \leq \text{'2018-08-31'}} (\text{EXCHANGE})
   $$

2. **获取繁殖交换类型的代码**：
   $$
   ET1 = \sigma_{\text{et\textunderscore description} = 'breeding'} (\text{EXCHANGE\textunderscore TYPE})
   $$
   $$
   ET2 = \pi_{\text{et\textunderscore code}} (ET1)
   $$

3. **将交换记录与繁殖交换类型连接**：
   $$
   E2 = E1 \bowtie_{\text{et\textunderscore code}} ET2
   $$

4. **获取相关的交换和动物信息**：
   $$
   EA1 = E2 \bowtie_{\text{animal\textunderscore id}} (\text{ANIMAL})
   $$

5. **获取转移的中心名称**：
   $$
   CF1 = \text{CENTRE} \bowtie_{\text{centre\textunderscore id} = \text{exchange\textunderscore from\textunderscore centre\textunderscore id}} (\pi_{\text{exchange\textunderscore from\textunderscore centre\textunderscore id}} (EA1))
   $$
   $$
   CF2 = \pi_{\text{centre\textunderscore id, centre\textunderscore name}} (CF1)
   $$
   $$
   CT1 = \text{CENTRE} \bowtie_{\text{centre\textunderscore id} = \text{exchange\textunderscore to\textunderscore centre\textunderscore id}} (\pi_{\text{exchange\textunderscore to\textunderscore centre\textunderscore id}} (EA1))
   $$
   $$
   CT2 = \pi_{\text{centre\textunderscore id, centre\textunderscore name}} (CT1)
   $$

6. **投影所需的列**：
   $$
   R1 = \pi_{\text{exchange\textunderscore no, exchange\textunderscore date, CF2.centre\textunderscore name, CT2.centre\textunderscore name, animal\textunderscore id, spec\textunderscore genus, spec\textunderscore name}} (EA1)
   $$

这样修改后的步骤与你提供的格式一致，并且符合关系代数的操作顺序和逻辑。如果有进一步的要求或需要调整，请告诉我。

### 下一个版本

# 育种交换查询任务

## 任务描述

对于 2018 年 7 月 1 日至 2018 年 8 月 31 日（包含）期间发生的每次育种交换，显示以下信息：
- 交换编号
- 交换日期
- 动物转出的中心名称
- 动物转入的中心名称
- 动物 ID
- 物种属
- 物种名

## 关系代数表达式

1. **选择指定日期范围内的交换记录**：

   $$E1 = \sigma_{\text{exchange\_date} \geq '2018-07-01' \wedge \text{exchange\_date} \leq '2018-08-31'} (\text{EXCHANGE})$$

2. **获取育种交换类型的代码**：

   $$ET1 = \sigma_{\text{et\_description} = 'Breeding Program'} (\text{EXCHANGE\_TYPE})$$
   $$ET2 = \pi_{\text{et\_code}} (ET1)$$

3. **将交换记录与育种交换类型连接**：

   $$E2 = E1 \bowtie ET2$$

4. **获取相关的交换和动物信息**：

   $$EA1 = E2 \bowtie_{\text{EXCHANGE.animal\_id} = \text{ANIMAL.animal\_id}} \text{ANIMAL}$$

5. **获取转移的中心名称**：

   获取转出中心名称：
   $$CF1 = \rho_{\text{centre\_id} \rightarrow \text{from\_centre\_id}, \text{centre\_name} \rightarrow \text{from\_centre\_name}} (\text{CENTRE})$$
   $$EA2 = EA1 \bowtie_{\text{exchange\_from\_centre\_id} = \text{from\_centre\_id}} CF1$$

   获取转入中心名称：
   $$CT1 = \rho_{\text{centre\_id} \rightarrow \text{to\_centre\_id}, \text{centre\_name} \rightarrow \text{to\_centre\_name}} (\text{CENTRE})$$
   $$EA3 = EA2 \bowtie_{\text{exchange\_to\_centre\_id} = \text{to\_centre\_id}} CT1$$

6. **投影所需的列**：

   $$R2 = \pi_{\text{exchange\_no, exchange\_date, from\_centre\_name, to\_centre\_name, animal\_id, spec\_genus, spec\_name}} (EA3)$$

## 解释

1. 首先，我们从 EXCHANGE 表中选择指定日期范围内的记录。
2. 然后，我们确定哪些交换类型属于育种计划。
3. 我们将筛选后的交换记录与育种交换类型连接。
4. 接着，我们获取相关的动物信息。
5. 我们通过两次连接 CENTRE 表来获取转出和转入中心的名称。
6. 最后，我们投影出所有需要的列，得到最终结果。

这个查询确保了我们只获取指定日期范围内的育种交换记录，并包含了所有要求的信息。