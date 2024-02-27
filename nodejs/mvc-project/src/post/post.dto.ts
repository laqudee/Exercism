import { IsNotEmpty } from 'class-validator'
import { Transform } from 'class-transformer'

export class PostDto {
  @IsNotEmpty({ message: 'title is not empty' })
  title: string
  @IsNotEmpty({ message: 'publish is not empty' })
  publish: boolean
  @IsNotEmpty({ message: 'authorId is not empty' })
  authorId: number

  constructor(t: string, p: boolean, a: number) {
    this.authorId = a
    this.title = t
    this.publish = p
  }
}
