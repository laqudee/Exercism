# MVC project

- 学习了express框架，编写接口，mysql数据库读写，knex，prisma ORM框架

## MVC

- Model-View-Controller是一种软件架构模式，用于设计和组织应用程序的代码
  - Model，模型
  - View，视图
  - Controller，控制器

- Model：表示应用程序的数据和业务逻辑，负责处理数据的存储、检索、验证和更新操作。通常包含与数据库、文件系统、外部服务交互的代码

- View：负责将模型的数据以可视化的形式呈现给用户，负责用户界面的展示，包括各种图形元素、页面布局和用户交互组件等

- Controller：充当模型和视图之间的中间人，负责协调二者的交互

- MVC主要目标是将应用程序的逻辑、数据和界面分离。、

## ioC控制反转和DI依赖注入

- 控制反转（Inversion of Control，IoC）和依赖注入（Dependency Injection，DI）是软件开发中常用的设计模式和技术，用于解耦和管理组件之间的依赖关系。虽然它们经常一起使用，但它们是不同的概念。

- IoC，将组件的控制权从组件自身转移到外部容器

- DI，是实现控制反转的一种具体技术。它通过将组件的依赖关系从组件内部移动到外部容器来实现松耦合。组件不再负责创建或管理它所依赖的其他组件，而是通过构造函数、属性或方法参数等方式将依赖关系注入到组件中。依赖注入可以通过构造函数注入（Constructor Injection）、属性注入（Property Injection）或方法注入（Method Injection）等方式实现。

