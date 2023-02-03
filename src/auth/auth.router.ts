import { Router } from "express";
import { registerAuth, signIn } from './auth.controller';
import { registerValidationDto, loginValidationDto } from "./auth.middleware";

export const routerAuth = Router()

routerAuth.post( "/", registerValidationDto, registerAuth )
routerAuth.post( "/sign-in", loginValidationDto, signIn )
routerAuth.get( "/profile" )