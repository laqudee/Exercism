import { injectable } from 'inversify'
import jsonwebtoken from 'jsonwebtoken'
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

@injectable()
export class JWT {
  private secret = 'laqudee**(0-9)dfdfdfkl$$$k^&*()'
  private jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: this.secret
  }

  constructor() {
    this.strategy()
  }

  // init
  public strategy() {
    const strategy = new Strategy(this.jwtOptions, (payload, done) => {
      done(null, payload)
    })
    passport.use(strategy)
  }

  // @return middleware
  public middleware() {
    return passport.authenticate('jwt', { session: false })
  }

  // create token
  public createToken(data: object) {
    return jsonwebtoken.sign(data, this.secret, { expiresIn: '7d' })
  }

  // @return inject to express
  public init() {
    return passport.initialize()
  }
}
