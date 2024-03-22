
import { z } from "zod";

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const MAX_LENGTH_EMAIL = 32
const MIN_LENGTH_EMAIL = 13

const MAX_LENGTH_PASS = 32
const MIN_LENGTH_PASS = 8

const ERROR_STRING_IS_LONG = `Login should be less then ${MAX_LENGTH_EMAIL} symbols`
const ERROR_STRING_IS_SHORT = `Login should be more then ${MIN_LENGTH_EMAIL} symbols`
const ERROR_INVALID_EMAIL = `Please enter valid email`

const ERROR_PASSWORD_IS_LONG = `Password should be less then ${MAX_LENGTH_PASS} symbols`
const ERROR_PASSWORD_IS_SHORT = `Login should be more then ${MIN_LENGTH_PASS} symbols`

export const loginWithPasswordSchema = z.object({
    login:  z.string()
    .max(MAX_LENGTH_EMAIL, { message: ERROR_STRING_IS_LONG })
    .min(MIN_LENGTH_EMAIL, { message: ERROR_STRING_IS_SHORT})
    .regex(EMAIL_REGEX, { message: ERROR_INVALID_EMAIL }),
    password:  z.string()
    .max(MAX_LENGTH_PASS, { message: ERROR_PASSWORD_IS_LONG })
    .min(MIN_LENGTH_PASS, { message: ERROR_PASSWORD_IS_SHORT})
})