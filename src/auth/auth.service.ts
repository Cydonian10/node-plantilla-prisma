import { PrismaClient } from "@prisma/client";
import { AuthCreateDto, AuthLoginDto } from './auth.dto';
import { jwtGenerate } from '../shared/utils/jwt';
import { notFound } from "@hapi/boom";

export class AuthService {

  constructor(
    private orm = new PrismaClient()
  ) { }

  async signOut( data: AuthCreateDto ) {

    const authUser = await this.orm.user.create( {
      data: {
        email: data.email,
        password: data.password
      }
    } )

    const token = await jwtGenerate( authUser.id, authUser.rol )

    return token
  }

  async signIn( data: AuthLoginDto ) {

    const userMaybe = await this.orm.user.findUnique( {
      where: { email: data.email }
    } )

    if ( !userMaybe ) throw notFound( `usuario no encontrado ${ data.email }`, data.email )

    return userMaybe
  }
}