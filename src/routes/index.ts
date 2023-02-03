import { Application } from "express";
import { routerAuth } from '../auth/auth.router';

export function RouterApi( app: Application ) {

  app.use( "/api/v1/auth", routerAuth )

}