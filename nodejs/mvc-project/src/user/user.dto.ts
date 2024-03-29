import { IsNotEmpty, IsEmail } from 'class-validator'
import { Transform } from 'class-transformer'

export class UserDto {
  @IsNotEmpty({ message: '用户名闭填' })
  @Transform(user => user.value.trim())
  name: string

  @IsNotEmpty({ message: '邮箱必填' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  @Transform(user => user.value.trim())
  email: string

  constructor(n: string, e: string) {
    this.name = n
    this.email = e
  }
}
