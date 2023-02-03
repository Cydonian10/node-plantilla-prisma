import express, { Application } from "express";
import http from 'http'
import { RouterApi } from './routes/index';
import { boomErrorHandler, errorHandler, logHandler, clasValidatorError } from './shared/middlewares/error.handler';
import passport from 'passport'
import { jwtStrategy } from './auth/strategies/jwt.strategy';

class ServerBootstrap {

  private app: Application = express()
  private httpServer: http.Server = http.createServer( this.app )
  private port: number = 8000
  private passport = passport

  constructor() {
    this.listen()
  }

  passportM() {
    this.passport.use( jwtStrategy )
  }

  middlewares() {

    this.app.use( express.json() )
    RouterApi( this.app )
    this.app.use( boomErrorHandler )
    this.app.use( clasValidatorError )
    this.app.use( logHandler )
    this.app.use( errorHandler )
  }


  private listen() {

    this.passportM()
    this.middlewares()

    this.httpServer.listen( this.port, () => {
      console.log( `[server] listening ${ this.port }` );
    } )
  }

}

new ServerBootstrap()