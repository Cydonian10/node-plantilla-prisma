import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 404
}

export class HttpResponse {

  ok( res: Response, data?: any, message?: string ): Response {
    return res.status( HttpStatus.OK ).json( {
      status: HttpStatus.OK,
      message: message || "Success request",
      data: data
    } )
  }
}