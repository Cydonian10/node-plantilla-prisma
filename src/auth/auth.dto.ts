import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator'
import { Rol } from '@prisma/client'

export class AuthBaseDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @MinLength( 5 )
  password!: string
}

export class AuthCreateDto extends AuthBaseDto {

  @IsOptional()
  rol?: Rol

  @IsOptional()
  image?: string

  @IsOptional()
  @MinLength( 3 )
  name?: string

  @IsOptional()
  google?: boolean
}

export class AuthLoginDto extends AuthBaseDto { }