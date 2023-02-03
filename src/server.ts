import express, { Application } from "express";
import http from 'http'
import { RouterApi } from './routes/index';
import { boomErrorHandler, errorHandler, logHandler, clasValidatorError } from './shared/middlewares/error.handler';

class ServerBootstrap {

  private app: Application = express()
  private httpServer: http.Server = http.createServer( this.app )
  private port: number = 8000

  constructor() {
    this.listen()
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

    this.middlewares()

    this.httpServer.listen( this.port, () => {
      console.log( `[server] listening ${ this.port }` );
    } )
  }

}

new ServerBootstrap()