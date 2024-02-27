import { controller, httpGet as GetMapping, httpPost as PostMapping } from 'inversify-express-utils'
import { inject } from 'inversify'
import { PostService } from './service'
import type { Request, Response } from 'express'

@controller('/post')
export class PostController {
  constructor(
    @inject(PostService) private readonly postService: PostService
  ) { }

  @GetMapping('/all')
  public async getAll(req: Request, res: Response) {
    const data = await this.postService.getPosts()
    res.json(data)
  }

  @PostMapping('/create')
  public async createPost(req: Request, res: Response) {
    const post = await this.postService.createPost(req.body)

    res.json(post)
  }
}
