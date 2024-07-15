# 任务一：关系代数

姓名：
ID：

## Alice Springs Desert Park 动物查询任务

i. 显示在名为 ‘Alice Springs Desert Park’ 的中心饲养的所有动物的编号、性别、物种的通俗名称。注意：只有一个中心名为 ‘Alice Springs Desert Park’。

### 任务描述

显示在名为 'Alice Springs Desert Park' 的中心饲养的所有动物的以下信息：
- 动物编号
- 动物性别
- 物种的通俗名称

### 关系代数表达式

1. 选择名为 ‘Alice Springs Desert Park’ 的中心记录：

   $$
   C1 = \sigma_{\text{centre\_name = 'Alice Springs Desert Park'}} (\text{CENTRE})
   $$

2. 投影中心的 ID：

   $$
   C2 = \pi_{\text{centre\_id}} (C1)
   $$

3. 使用 theta join 将结果与 ANIMAL 表连接，选择在该中心饲养的所有动物：

   $$
   A1 = \text{ANIMAL} \bowtie_{\text{ANIMAL.centre\_id} = \text{C2.centre\_id}} C2
   $$

4. 投影所需的列：

   $$
   A2 = \pi_{\text{animal\_id, animal\_sex, spec\_genus, spec\_name}} (A1)
   $$

5. 使用 theta join 将结果与 SPECIES 表连接，以获取物种的通俗名称：

   $$
   S1 = \text{SPECIES} \bowtie A2
   $$

6. 投影最终所需的列：

   $$
   R1 = \pi_{\text{animal\_id, animal\_sex, spec\_popular\_name}} (S1)
   $$

### 解释

1. 首先，从 CENTRE 表中选择中心名称为 'Alice Springs Desert Park' 的记录。
2. 接下来，投影该中心的 ID。
3. 然后，使用 theta join 将 ANIMAL 表与上一步的结果连接，选择在该中心饲养的所有动物。
4. 投影动物记录中的所需列（动物编号、性别、物种属和名称）。
5. 使用另一个 theta join 将这些动物记录与 SPECIES 表连接，以获取物种的通俗名称。
6. 最后，投影最终所需的列：动物编号、动物性别和物种的通俗名称。

## 2018 年 7 月 1 日至 2018 年 8 月 31 日（包含）期间的育种交换查询任务

ii. 对于 2018 年 7 月 1 日至 2018 年 8 月 31 日（包含）期间发生的每次育种交换，显示交换编号、交换日期、动物转出的中心名称、动物转入的中心名称、动物编号、物种属和物种名。

### 任务描述

对于 2018 年 7 月 1 日至 2018 年 8 月 31 日（包含）期间发生的每次育种交换，显示以下信息：
- 交换编号
- 交换日期
- 动物转出的中心名称
- 动物转入的中心名称
- 动物编号
- 物种属
- 物种名

### 关系代数表达式

1. **选择指定日期范围内的交换记录**：

   $$
   E1 = \sigma_{\text{exchange\_date} \geq '2018-07-01' \land \text{exchange\_date} \leq '2018-08-31'} (\text{EXCHANGE})
   $$

2. **获取相关的交换和动物信息**：

   $$
   EA1 = E1 \bowtie_{\text{EXCHANGE.animal\_id} = \text{ANIMAL.animal\_id}} \text{ANIMAL}
   $$

3. **检索参与转移的中心名称**：

   重命名 `centre_id` 和 `centre_name` 为转出中心和转入中心：

   $$
   CF = \rho_{\text{centre\_id} \rightarrow \text{from\_centre\_id}, \text{centre\_name} \rightarrow \text{from\_centre\_name}} (\text{CENTRE})
   $$

   $$
   CT = \rho_{\text{centre\_id} \rightarrow \text{to\_centre\_id}, \text{centre\_name} \rightarrow \text{to\_centre\_name}} (\text{CENTRE})
   $$

4. **连接以获取完整的转出中心和转入中心信息**：

   $$
   EA2 = EA1 \bowtie_{\text{exchange\_from\_centre\_id} = \text{from\_centre\_id}} CF
   $$

   $$
   EA3 = EA2 \bowtie_{\text{exchange\_to\_centre\_id} = \text{to\_centre\_id}} CT
   $$

5. **投影所需的列**：

   $$
   R = \pi_{\text{exchange\_no, exchange\_date, from\_centre\_name, to\_centre\_name, animal\_id, spec\_genus, spec\_name}} (EA3)
   $$

### 解释

1. **选择指定日期范围内的交换记录**：
   - 选择在2018年7月1日至2018年8月31日（含）期间发生的所有交换记录。
   - 使用带有复合条件的单个选择操作，而不是两个选择的交集，更为高效。

2. **获取相关的交换和动物信息**：
   - 该连接操作将所选交换记录与相应的动物信息通过 `animal_id` 属性进行连接。
   - 能够访问动物的具体细节，例如物种属和名称。

3. **检索参与转移的中心名称**：
   - 两次重命名 `CENTRE` 表中的 `centre_id` 和 `centre_name` 属性。
   - 使能够在后续操作中区分源中心（from_centre）和目标中心（to_centre）。

4. **连接以获取完整的转出中心和转入中心信息**：
   - 两个连接操作将的交换和动物信息与中心信息连接起来。
   - 第一个连接（EA2）添加“转出”中心的详细信息，第二个连接（EA3）添加“转入”中心的详细信息。

5. **投影所需的列**：
   - 选择任务要求中指定的列。
   - 包括：交换编号、交换日期、转出中心名称、转入中心名称、动物ID、物种属和物种名。
