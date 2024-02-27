# Prisma demo

| lib        | version  |
| ---------- | -------- |
| nodejs     | v20.11.0 |
| npm        | v10.2.4  |
| tsx        | v4.7.1   |
| typescript | v5.3.3   |
| prisma     | v5.10.2  |
| express    | v4.18.2  |

## link about

[prisma link--how prisma init and using](https://www.prisma.io/docs/getting-started/quickstart)


[tsx link -- how to init and using](https://www.npmjs.com/package/tsx)

- 用来替代 `ts-node`
  - `ts-node` 在node19以上版本中似乎坏掉了，用tsx替代

[prisma + typescript + express + lession](https://juejin.cn/post/7337188759056384015)

## `dev command`

```json
"scripts": {
    "dev": "nodemon --watch src/ -e ts --exec tsx ./src/app.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## 注意

- 注意构建项目的顺序
- 注意`nodejs`的版本
- 注意`ts-node`在高版本`nodejs`中是否可用
- 注意`tsconfig.json` 中的一些配置
  - `rootDir: './src'`
  - `outDir: './dist'`
  - `module: 'esnext'`
  - `target: 'es2016'`
  - others
