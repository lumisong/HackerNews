# Task 5: NoSQL (20 marks)

一个JSON格式的“濒危物种”列表数据样本，

{

包含中心和每个中心所属的动物（注意，该样本仅包含部分数据）。


centres & animals。

该animal是centres的子数据。每个中心都包含一个或多个动物。

notes：`_id` 是中心的 `centre_id`。

}


动物的ID、常见名称、性别、添加到系统的日期、是否在中心繁殖（中心繁殖）或从野外引入（从野外），以及动物参与的交换总次数（一次交换到中心，后来再交换回来算作两次交换）都会被记录。

当动物从一个地方交换到一个中心，然后在之后的某个时间再交换回原地，这个过程被算作两次交换。

具体来说：

第一次交换：动物从某个地方被交换到中心。
第二次交换：动物从中心被交换回原地。
这个来回的过程被视为两次独立的交换行为。

动物相关信息的英文原文及其对应的中文：

1. **ID** - ID（身份识别号）
2. **Popular Name** - 常见名称
3. **Sex** - 性别
4. **Date Added to the System** - 添加到系统的日期
5. **Centre Bred** - 中心繁殖
6. **From Wild** - 从野外
7. **Total Number of Exchanges** - 参与的交换总次数

