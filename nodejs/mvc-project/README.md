# MVC project

| lib                     | version  |
| ----------------------- | -------- |
| nodejs                  | v20.11.0 |
| npm                     | v10.2.4  |
| tsx                     | v4.7.1   |
| typescript              | v5.3.3   |
| prisma                  | v5.10.2  |
| express                 | v4.18.2  |
| inversify               | v6.0.2   |
| inversify-express-utils | v6.4.6   |
| reflect-metadata        | v0.2.1   |
| class-transformer       | v0.5.1   |
| class-validator         | v0.14.1  |
| passport                | v0.7.0   |
| passport-jwt            | v4.0.1   |
| jsonwebtoken            | v9.0.2   |

## Development

```json
  "scripts": {
    "dev": "nodemon --watch src/ -e ts --exec tsx ./src/main.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## VS Code tools（扩展）

- `database client`
  - 在vscode中操作数据库

- `Rest Client`
  - `request.http` 模拟客户端发送请求

## link about

[prisma link--how prisma init and using](https://www.prisma.io/docs/getting-started/quickstart)

[tsx link -- how to init and using](https://www.npmjs.com/package/tsx)

- 用来替代 `ts-node`
  - `ts-node` 在node19以上版本中似乎坏掉了，用tsx替代

[mvc + prisma + typescript + express + lession](https://juejin.cn/post/7337964441613353010)

- 学习express框架，编写接口，mysql数据库读写，knex，prisma ORM框架

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

## JWT

- JSON Web Token，用于在网络应用间传递信息的方式，基于JOSN的安全令牌，用于客户端与服务端

- 组成：（用`.`分开）
  1. Header，包含令牌的类型和使用的加密算法等信息，Base64编码表示
  2. Payload，包含身份验证和授权等信息，如用户ID，角色、权限等；Base64
  3. Signature，使用指定的密钥对头部和负载进行签名，确保令牌的完整性和真实性

- JWT工作流程：
  1. 用户通过提供有效的凭证进行身份验证
  2. 服务器验证凭证，并生成一个JWT作为响应。JWT包含了用户的身份信息和其它必要的数据
  3. 服务器将JWT发送给客户端
  4. 客户端在后续的请求中，将JWT放入请求头中。
  5. 服务器接到请求，验证JWT的签名以保证其完整性和真实性
