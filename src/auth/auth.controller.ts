import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "../shared/response/http.response";
import { AuthService } from './auth.service';
import { AuthCreateDto, AuthLoginDto } from './auth.dto';
import { IPayload } from './interfaces/payload';

const http = new HttpResponse();
const authSrv = new AuthService()


export async function registerAuth( req: Request, res: Response, next: NextFunction ) {
  try {
    const { email, password } = req.body as AuthCreateDto;

    const token = await authSrv.signOut( { email, password } )

    http.ok( res, token, "registro exitoso" );
  } catch ( error ) {
    next( error );
  }
}


export async function signIn( req: Request, res: Response, next: NextFunction ) {
  try {
    const { email, password } = req.body as AuthLoginDto

    const userMaybe = await authSrv.signIn( { email, password } )

    http.ok( res, userMaybe, "login exitoso" )
  } catch ( error ) {
    next( error )
  }
}

export async function viewProfile( req: Request, res: Response, next: NextFunction ) {
  try {
    const { id } = req.user as IPayload

    const userMaybe = await authSrv.viewProfile( id )

    http.ok( res, userMaybe, "view profile" )
  } catch ( error ) {
    next( error )
  }
}

