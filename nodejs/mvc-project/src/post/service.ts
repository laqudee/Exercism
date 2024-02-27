import { inject, injectable } from 'inversify'
import { PostDto } from './post.dto'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { PrismaDB } from '../db/index'

@injectable()
export class PostService {
  constructor(
    @inject(PrismaDB) private readonly PrismaDB: PrismaDB
  ) { }

  public async getPosts() {
    const list = await this.PrismaDB.prisma.post.findMany()
    const total = await this.PrismaDB.prisma.post.count()
    return {
      list,
      total
    }
  }

  public async createPost(params: PostDto) {
    const post = plainToClass(PostDto, params)
    const errors = await validate(post)
    const dto: any = []
    if (errors.length) {
      errors.forEach(error => {
        const constraints = error.constraints!
        Object.keys(constraints).forEach(key => {
          dto.push({
            [error.property]: constraints[key]
          })
        })
      })
      return dto
    } else {
      const info = await this.PrismaDB.prisma.post.create({
        data: post
      })

      return info
    }
  }
}

