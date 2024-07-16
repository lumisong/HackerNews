我们再次回顾一下任务：
总任务：{
为 Last Curtain Theatre Company 设计一个逻辑层次的数据库模型。这个模型需要用 Crow’s Foot 符号表示
}

我再提供一下该文档中，我认为一些比较重要的内容和内容大纲。

里面的一些大纲和标红的重要内容：

内容大纲：
{
Topic 2 - Database Design I: Conceptual Modelling
可以参考无人机案例研究。

数据库设计生命周期：

需求定义（一颗星）识别和分析，特定需求和约束分析剧团对戏剧、艺术家、演出、剧院、预订和客户信息的需求。
明确每个实体（如 Play、Artist、Show、Theatre、Booking、Client）的具体属性和需求。
概念设计（最重点，三颗星）尽量减少冗余，但不得增加任何超出场景的内容，使用 ER (实体-关系) 模型来表示实体和实体之间的关系。创建实体，并定义它们的属性，确定实体之间的关系。
逻辑设计（两颗星）使用规范化技术（如第三范式）测试关系型逻辑模型的正确性。将概念模型映射为关系模型。
确保所有实体和关系都已正确映射，并符合规范化要求。
在设计中标明主键 (Primary Key, P) 和外键 (Foreign Key, F)。
物理设计
}。

需求定义{
不同用户的视图，设计用户视图，需要考虑不同用户（如剧院经理、售票员、艺术家等）的不同需求。以便每个用户能够方便地访问和管理他们需要的数据。识别用户角色：定义每个角色的需求。

}

ER Modeling：{ER 模型的基本概念，实体，属性，关系。ER 图的设计，（ LucidChart）视觉化设计，清晰表达。确保设计的正确性：避免冗余和错误，符合规范。}

Conceptual Design：{
    
    开发企业数据模型{开发一个全面的数据模型，涵盖所有关键业务实体和它们之间的关系。}
    最小化冗余{减少数据冗余，但不得添加任何超出提供场景之外的内容，设计简洁和精确，避免不必要的数据重复}

}

ERD - Notation：{
Crow’s Foot 符号，实体用矩形表示，属性在实体内部表示。
关系用线段表示，其中线段末端的“乌鸦脚”表示一对多关系。
Conceptual Level (ER Model){
实体 (Entity)，键属性 (Key Attribute)，非键属性 (Non Key Attribute)，关系 (Relationship)。确保关系的正确性。

案例：{ 实体和键的格式：ENTITY, key_attribute
例如：CUSTOMER, custno}讨论，确认识别的实体和关键属性的有效性。
使用投票机制或其他方式，确保所有实体和键都是准确和完整的。
}
}

Logical Design {
规范化技术，使用第三范式 (3NF) 来确保数据模型的规范化，避免冗余和不一致。
}

设计关系型逻辑模型，定义主键和外键，表示多对多关系，确保模型规范化。验证概念模型，实体和关系的定义，模型的有效性。

Important Rule for Conceptual Modelling
{
完全包含并仅包含简报中描述的内容，讨论和假设。对简报的某些特性有疑问，应与讨论。假设不违反规则。

完整性，避免添加额外内容，讨论
}

连通性 (Connectivity)，基数 (Cardinality)。确保关系的准确性。

Three Types of Relationship Degree{
理解关系类型：一元关系 (Unary Relationship)，二元关系 (Binary Relationship)，三元关系 (Ternary Relationship){概念模型中的三元关系：，逻辑模型中的三元关系：}表示二元关系，处理三元关系（可能需要处理类似的复杂关系，可以使用中间实体来简化设计。）

}

Weak vs Strong Entity{
强实体 (Strong Entity)，弱实体 (Weak Entity)，业务规则决定实体类型。

识别强实体，识别弱实体，根据业务规则确定实体类型，并在模型中正确表示这些关系。
{
强实体 (Strong Entity)
EMPLOYEE 实体用矩形表示，有独立的主键 (emp_num)。
弱实体 (Weak Entity)
DEPENDENT 实体用矩形表示，依赖于 EMPLOYEE 实体。
DEPENDENT 实体的键由 emp_num 和 dep_num 组成。

}
{
识别强实体

强实体有独立的主键，不依赖于其他实体。

识别弱实体

弱实体依赖于强实体，需要引用强实体的主键来组成自己的键。

正确表示弱实体

使用 Crow’s Foot 符号表示弱实体

}
{
识别强实体和弱实体，组合键的定义，验证业务规则。

}
}

Identifying vs Non-Identifying Relationship
{
标识关系 (Identifying Relationship)，非标识关系 (Non-Identifying Relationship)。

ER{实线表示，虚线表示}
识别标识关系，识别非标识关系，绘制 ER 图。
}

业务规则
{
业务规则 - 关系 - 表示可选性。
用实线表示标识关系，用虚线表示非标识关系。用适当的符号表示业务规则。
}

Types of Attributes
{
简单属性 (Simple Attribute)，不能再细分的属性。复合属性 (Composite Attribute)，可以细分为多个属性。单值属性 (Single-valued Attribute)，只能有一个值的属性。多值属性 (Multi-valued Attribute)，可以有多个值的属性。

派生属性 (Derived Attribute){可以从其他属性计算得出。}{
在设计过程中，如果难以判断是存储还是计算，通常应包括所有客户要求的属性。
}属性分类由客户需求驱动。

识别简单属性和复合属性，识别单值属性和多值属性，识别派生属性，确保属性的正确表示。根据客户需求分类属性，包含所有客户要求的属性。

Multivalued Attribute{
定义多值属性，使用关联实体表示多值属性。
}
识别多值属性，
Crow’s Foot 模型
使用关联实体 CAR_COLOR，将多值属性分解为单独的属性。
}

Associative (or Composite) Entity{
关联实体 (Associative Entity)，ER 图表示，使用关联实体（如 ENROLMENT）表示多对多关系，将两个实体的主键作为关联实体的组成部分。

识别多对多关系，使用关联实体表示多对多关系。


Associative, Bridging or Composite Entities
{

    识别多对多关系，使用桥接实体表示多对多关系。
}
}

案例步骤：
{
STEP 1: List ALL entities and their key attribute/s which exist in the DRONE case study{
列出所有实体及其关键属性，从案例研究中提取实体。确保每个实体都有唯一的标识符（关键属性）。
}
STEP 2: Identify the relationships which exist between these entities
{
识别实体之间的关系，阅读任务描述。

确定关系的必要性，关系的重要性。
}
{
More than one relationship between two entities

多个关系存在于两个实体之间（两个实体之间可能存在多个不同的关系。
例如，一个员工 (EMPLOYEE) 可以同时是团队 (TEAM) 的成员 (member) 和领导 (leader)。）；模型化多个关系{在数据模型中，必须将不同的关系分别建模，而不能将它们合并为一个关系。
每个关系需要独立表示，确保其关系的清晰性和准确性。}

识别和定义 Last Curtain Theatre Company 中的多个关系，确保关系的清晰性和准确性。
}
Step 3 Add Non-Key Attributes{
识别任务中的非键属性，识别和列出非键属性，添加到 ER 图中。
    
}

}

Conceptual Model {
分步骤进行建模

步骤1：识别实体与键；步骤2：识别关系；步骤3：添加非键属性。

}



作业要求：
{
确定实体及其属性
定义实体之间的关系
标明主键 (Primary Keys, P) 和外键 (Foreign Keys, F)
避免包含不必要的关系
确保符合建模要求
不需要在图中包含关系线上的动词/名称
不需要指示属性是否为必需项
不需要指明属性的数据类型
}