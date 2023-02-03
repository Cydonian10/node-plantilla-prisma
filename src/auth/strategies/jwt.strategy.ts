
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'
import { IPayload } from '../interfaces/payload';
import { unauthorized } from '@hapi/boom';


const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

export const jwtStrategy = new Strategy( options, ( payload: IPayload, done ) => {
  if ( !payload ) {
    done( unauthorized(), false )
  }

  return done( null, payload )
} ) 