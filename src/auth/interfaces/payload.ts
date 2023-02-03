import { Rol } from '@prisma/client'

export interface IPayload {
  id: string,
  rol: Rol
}