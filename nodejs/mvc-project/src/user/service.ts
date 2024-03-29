import { inject, injectable } from 'inversify'
import { UserDto } from './user.dto'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { PrismaDB } from '../db/index'
import { JWT } from '../jwt'

@injectable()
export class UserService {
  constructor(
    @inject(PrismaDB) private readonly PrismaDB: PrismaDB,
    @inject(JWT) private readonly jwt: JWT
  ) { }

  public async getUserInfo() {
    const list = await this.PrismaDB.prisma.user.findMany(
      {
        include: {
          posts: true
        }
      }
    )
    const total = await this.PrismaDB.prisma.user.count()
    return {
      list,
      total
    }
  }

  public async createUser(data: UserDto) {
    const user = plainToClass(UserDto, data)
    const errors = await validate(user)
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
      const userInfo = await this.PrismaDB.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          posts: {
            create: {
              title: '标题',
              publish: true
            }
          }
        }
      })
      return {
        ...userInfo,
        token: this.jwt.createToken(userInfo)
      }
    }
  }
}
