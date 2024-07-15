# Relational Algebra

NAME:
ID：

## Alice Springs Desert Park 动物查询任务

i. Show the animal’s id, sex, species’ popular name for all animals kept in the centre named ‘Alice Springs Desert Park’. Note that only one centre is named ‘Alice Springs Desert Park’.

### Task Description


显示在名为 'Alice Springs Desert Park' 的中心饲养的所有动物的以下信息：
- 动物 ID
- 动物性别
- 物种的通俗名称

注意：只有一个中心名为 'Alice Springs Desert Park'。

### Relational Algebra Expression

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

### Explanation


1. 首先，我们从 CENTRE 表中选择名为 'Alice Springs Desert Park' 的中心记录。
2. 然后，我们提取该中心的 ID。
3. 接着，我们将 ANIMAL 表与中心 ID 连接，以获取在该中心饲养的所有动物。
4. 我们从动物记录中选择所需的列（动物 ID、性别、物种属和名称）。
5. 然后，我们将这些动物记录与 SPECIES 表连接，以获取物种的通俗名称。
6. 最后，我们投影出最终需要的列：动物 ID、动物性别和物种通俗名称。

这个查询确保我们获得了 Alice Springs Desert Park 中所有动物的相关信息，包括它们的 ID、性别和物种的通俗名称。

## During 1 Jul 2018 and 31 Aug 2018(inclusive) 育种交换查询任务

ii.For each breeding exchange that happened between 1 Jul 2018 and 31 Aug 2018(inclusive), show the exchange number,exchange date, centre name in which the animal was transferred from, centre name in which the animal was transferred to, animal id,species genus and species name. [6 marks]

### 任务描述

对于 2018 年 7 月 1 日至 2018 年 8 月 31 日（包含）期间发生的每次育种交换，显示以下信息：

- 交换编号
- 交换日期
- 动物转出的中心名称
- 动物转入的中心名称
- 动物 ID
- 物种属
- 物种名

### 关系代数表达式

1. **选择指定日期范围内的交换记录**：

   $$
   E1 = \sigma_{\text{exchange\_date} \geq '2018-07-01' \wedge \text{exchange\_date} \leq '2018-08-31'} (\text{EXCHANGE})
   $$
2. **获取育种交换类型的代码**：

   $$
   ET1 = \sigma_{\text{et\_description} = 'Breeding Program'} (\text{EXCHANGE\_TYPE})
   $$

   $$
   ET2 = \pi_{\text{et\_code}} (ET1)
   $$
3. **将交换记录与育种交换类型连接**：

   $$
   E2 = E1 \bowtie ET2
   $$
4. **获取相关的交换和动物信息**：

   $$
   EA1 = E2 \bowtie_{\text{EXCHANGE.animal\_id} = \text{ANIMAL.animal\_id}} \text{ANIMAL}
   $$
5. **获取转移的中心名称**：

   获取转出中心名称：

   $$
   CF1 = \rho_{\text{centre\_id} \rightarrow \text{from\_centre\_id}, \text{centre\_name} \rightarrow \text{from\_centre\_name}} (\text{CENTRE})
   $$

   $$
   EA2 = EA1 \bowtie_{\text{exchange\_from\_centre\_id} = \text{from\_centre\_id}} CF1
   $$

   获取转入中心名称：

   $$
   CT1 = \rho_{\text{centre\_id} \rightarrow \text{to\_centre\_id}, \text{centre\_name} \rightarrow \text{to\_centre\_name}} (\text{CENTRE})
   $$

   $$
   EA3 = EA2 \bowtie_{\text{exchange\_to\_centre\_id} = \text{to\_centre\_id}} CT1
   $$
6. **投影所需的列**：

   $$
   R2 = \pi_{\text{exchange\_no, exchange\_date, from\_centre\_name, to\_centre\_name, animal\_id, spec\_genus, spec\_name}} (EA3)
   $$

### 解释

1. 首先，我们从 EXCHANGE 表中选择指定日期范围内的记录。
2. 然后，我们确定哪些交换类型属于育种计划。
3. 我们将筛选后的交换记录与育种交换类型连接。
4. 接着，我们获取相关的动物信息。
5. 我们通过两次连接 CENTRE 表来获取转出和转入中心的名称。
6. 最后，我们投影出所有需要的列，得到最终结果。

这个查询确保了我们只获取指定日期范围内的育种交换记录，并包含了所有要求的信息。

