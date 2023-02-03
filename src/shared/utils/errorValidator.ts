import { ValidationError } from "class-validator";

export function errorValidatorMsg( data: ValidationError[] ) {

  return data.map( item => {
    const message = item.constraints
    return { property: item.property, ...message, isValidator: true }
  } )

}