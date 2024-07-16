
## Step 1: Unnormalized Form (UNF)
原始数据包含重复和冗余信息：

| Show Date/Time         | Play Number | Play Name     | Play Writer                   | Total Number of Patrons | Theatre ID | Theatre Street  | Theatre Town | Booking Number | Number of Seats | Total Amount Due | Paid (Y/N) | Client Number | Client Name      |
|------------------------|-------------|---------------|-------------------------------|-------------------------|------------|-----------------|--------------|----------------|-----------------|------------------|------------|---------------|------------------|
| 6 July 2024, 7:00 PM   | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        | 42 Rich Street  | Lakemba      | 1001           | 4               | 200              | Y          | 1             | Michael Corsina  |
| 6 July 2024, 7:00 PM   | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        | 42 Rich Street  | Lakemba      | 1002           | 2               | 100              | N          | 1             | Michael Corsina  |
| 6 July 2024, 7:00 PM   | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        | 42 Rich Street  | Lakemba      | 1003           | 10              | 800              | Y          | 2             | Michelle Kinako  |

## Step 2: First Normal Form (1NF)
在第一范式中，我们确保每个列都包含单一值，并且每个记录都是唯一的。我们将数据分解成以下关系表：

### Booking Table (预订表)
| Booking Number | Number of Seats | Total Amount Due | Paid (Y/N) | Client Number | Show Date/Time         |
|----------------|-----------------|------------------|------------|---------------|------------------------|
| 1001           | 4               | 200              | Y          | 1             | 6 July 2024, 7:00 PM   |
| 1002           | 2               | 100              | N          | 1             | 6 July 2024, 7:00 PM   |
| 1003           | 10              | 800              | Y          | 2             | 6 July 2024, 7:00 PM   |

### Client Table (客户表)
| Client Number | Client Name       |
|---------------|-------------------|
| 1             | Michael Corsina   |
| 2             | Michelle Kinako   |

### Show Table (演出表)
| Show Date/Time         | Play Number | Play Name     | Play Writer                   | Total Number of Patrons | Theatre ID |
|------------------------|-------------|---------------|-------------------------------|-------------------------|------------|
| 6 July 2024, 7:00 PM   | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        |

### Theatre Table (剧院表)
| Theatre ID | Theatre Street    | Theatre Town |
|------------|-------------------|--------------|
| 901        | 42 Rich Street    | Lakemba      |

## Step 3: Second Normal Form (2NF)
在第二范式中，我们消除部分依赖关系。我们确定每个非主键属性都完全依赖于主键，并分解为以下关系表：

### Booking Table (预订表)
| Booking Number | Number of Seats | Total Amount Due | Paid (Y/N) | Client Number | Show Date/Time         |
|----------------|-----------------|------------------|------------|---------------|------------------------|
| 1001           | 4               | 200              | Y          | 1             | 6 July 2024, 7:00 PM   |
| 1002           | 2               | 100              | N          | 1             | 6 July 2024, 7:00 PM   |
| 1003           | 10              | 800              | Y          | 2             | 6 July 2024, 7:00 PM   |

### Client Table (客户表)
| Client Number | Client Name       |
|---------------|-------------------|
| 1             | Michael Corsina   |
| 2             | Michelle Kinako   |

### Show Table (演出表)
| Show Date/Time         | Play Number | Play Name     | Play Writer                   | Total Number of Patrons | Theatre ID |
|------------------------|-------------|---------------|-------------------------------|-------------------------|------------|
| 6 July 2024, 7:00 PM   | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        |

### Theatre Table (剧院表)
| Theatre ID | Theatre Street    | Theatre Town |
|------------|-------------------|--------------|
| 901        | 42 Rich Street    | Lakemba      |

## Step 4: Third Normal Form (3NF)
在第三范式中，我们消除传递依赖关系，即每个非主键属性直接依赖于主键。以下是最终优化的关系表：

### Booking Table (预订表)
| Booking Number | Number of Seats | Total Amount Due | Paid (Y/N) | Client Number | Show Date/Time |
|----------------|-----------------|------------------|------------|---------------|----------------|
| 1001           | 4               | 200              | Y          | 1             | 6 July 2024    |
| 1002           | 2               | 100              | N          | 1             | 6 July 2024    |
| 1003           | 10              | 800              | Y          | 2             | 6 July 2024    |

### Client Table (客户表)
| Client Number | Client Name       |
|---------------|-------------------|
| 1             | Michael Corsina   |
| 2             | Michelle Kinako   |

### Show Table (演出表)
| Show Date/Time | Play Number | Play Name     | Play Writer                   | Total Number of Patrons | Theatre ID |
|----------------|-------------|---------------|-------------------------------|-------------------------|------------|
| 6 July 2024    | MR101       | Mouline Rouge | Luhrmann and Craig Pearce     | 265                     | 901        |

### Theatre Table (剧院表)
| Theatre ID | Theatre Street    | Theatre Town |
|------------|-------------------|--------------|
| 901        | 42 Rich Street    | Lakemba      |

### 新增关系表：Play Table（剧目表）
| Play Number | Play Name     | Play Writer               |
|-------------|---------------|---------------------------|
| MR101       | Mouline Rouge | Luhrmann and Craig Pearce |

## 总结

**1NF:**
- 数据分解成多个关系表，确保每个列都包含单一值。
- 分解了Booking, Client, Show, Theatre表。

**2NF:**
- 消除了部分依赖关系。
- 确保每个非主键属性完全依赖于主键。

**3NF:**
- 消除了传递依赖关系。
- 确保每个非主键属性直接依赖于主键。
- 分解了Play表，单独存储剧目信息。

