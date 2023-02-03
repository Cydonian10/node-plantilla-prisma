import { PrismaClient } from "@prisma/client";
import { AuthCreateDto, AuthLoginDto } from './auth.dto';
import { jwtGenerate } from '../shared/utils/jwt';
import { notFound } from "@hapi/boom";
import { passwordHash } from '../shared/utils/passwordHash';

export class AuthService {

  constructor(
    private orm = new PrismaClient()
  ) { }

  async signOut( data: AuthCreateDto ) {

    const newPassword = passwordHash( data.password )

    const authUser = await this.orm.user.create( {
      data: {
        email: data.email,
        password: newPassword
      }
    } )

    const token = await jwtGenerate( authUser.id, authUser.rol )

    return token
  }

  async signIn( data: AuthLoginDto ) {

    const userMaybe = await this.orm.user.findUnique( {
      where: { email: data.email }
    } )

    if ( !userMaybe ) throw notFound( `usuario no encontrado ${ data.email }` )

    return userMaybe
  }

  async viewProfile( id: string ) {

    const userMaybe = await this.orm.user.findUnique( {
      where: { id }
    } )

    if ( !userMaybe ) throw notFound( `usuario no encontrado ${ id }` )

    return userMaybe

  }
}

