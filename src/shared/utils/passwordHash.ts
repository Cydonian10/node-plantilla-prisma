import { genSaltSync, hashSync } from 'bcrypt';

export function passwordHash( password: string ) {
  const salt = genSaltSync()
  const newPassword = hashSync( password, salt )

  return newPassword
}