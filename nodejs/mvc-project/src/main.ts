import express from 'express'
import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import { UserController } from './user/controller'
import { UserService } from './user/service'

import { PostService } from './post/service'
import { PostController } from './post/controller'

import { PrismaClient } from '@prisma/client'
import { PrismaDB } from './db'

import { JWT } from './jwt/index'

const container = new Container()

// prisma di
container.bind<PrismaClient>('PrismaClient').toFactory(() => {
  return () => {
    return new PrismaClient()
  }
})
container.bind(PrismaDB).toSelf()

// JWT module
container.bind(JWT).to(JWT)

// user module
container.bind(UserService).to(UserService)
container.bind(UserController).to(UserController)

// post module
container.bind(PostService).to(PostService)
container.bind(PostController).to(PostController)

const server = new InversifyExpressServer(container)

server.setConfig(app => {
  app.use(express.json())
  app.use(container.get(JWT).init())
})

const app = server.build()

app.listen(3000, () => {
  console.log('Web Server is listening on port 3000')
})
