import { Router } from "express";
import { registerAuth, signIn, viewProfile } from "./auth.controller";
import { registerValidationDto, loginValidationDto } from "./auth.middleware";
import passport from "passport";

export const routerAuth = Router();

routerAuth.post( "/", registerValidationDto, registerAuth );

routerAuth.post( "/sign-in", loginValidationDto, signIn );

routerAuth.get(
  "/profile",
  passport.authenticate( "jwt", { session: false } ),
  viewProfile
);
