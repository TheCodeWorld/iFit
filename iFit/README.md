###本项目基于SSM框架开发
common包下写一些通用的常量类:常量类Const、枚举类等
util包下写一些通用的处理方法类

pojo包：与数据库表对应的实体类（使用mybatis-generator自动生成)

dao包：写与数据库操作相关的mapper类，使用mybatis-generator自动生成一些常用的增删改查方法

service包：具体的业务逻辑写在这里

controller包：与前端交互的接口设计，使用MVC架构，使用RESTful接口设计风格。（这层尽量不要写业务逻辑)

vo包：展示层对象，用于对pojo进一步封装拆分，是前后台传递的真是对象（尽量不用pojo直接交互)

test包：单元测试时候使用。