import { NextFunction, Request, Response } from "express";
import { AuthCreateDto, AuthLoginDto } from './auth.dto';
import { validate } from "class-validator";
import { errorValidatorMsg } from '../shared/utils/errorValidator';


export async function registerValidationDto( req: Request, res: Response, next: NextFunction ) {

  const { email, image, name, password, rol, google } = req.body as AuthCreateDto

  const authDto = new AuthCreateDto()

  authDto.email = email
  authDto.image = image
  authDto.name = name
  authDto.password = password
  authDto.rol = rol
  authDto.google = google

  const errors = await validate( authDto )

  if ( errors.length > 0 ) {
    const errorValidator = errorValidatorMsg( errors )
    next( errorValidator )
  }

  else {
    next()
  }

}

export async function loginValidationDto( req: Request, res: Response, next: NextFunction ) {


  const { email, password } = req.body as AuthLoginDto

  const authDto = new AuthCreateDto()

  authDto.email = email
  authDto.password = password


  const errors = await validate( authDto )

  if ( errors.length > 0 ) {
    const errorValidator = errorValidatorMsg( errors )
    next( errorValidator )
  }

  else {
    next()
  }

}

