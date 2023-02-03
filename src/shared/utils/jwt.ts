import { IPayload } from '../../auth/interfaces/payload';
import jwt from 'jsonwebtoken'
import { Rol } from '@prisma/client';

export function jwtGenerate( id: string, rol: Rol ) {
  const paylaod: IPayload = { id, rol }

  return new Promise( ( resole, reject ) => {
    jwt.sign( paylaod, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    }, ( err, token ) => {
      if ( err ) reject( err )
      resole( token )
    } )
  } )
}