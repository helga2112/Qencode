import { z } from "zod";

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const MAX_LENGTH = 32
const MIN_LENGTH = 13

const ERROR_STRING_IS_LONG = `Login should be less then ${MAX_LENGTH} symbols`
const ERROR_STRING_IS_SHORT = `Login should be more then ${MIN_LENGTH} symbols`
const ERROR_INVALID_EMAIL = `Please enter valid email`


export const loginSchema = z.object({
    login:  z.string()
    .max(MAX_LENGTH, { message: ERROR_STRING_IS_LONG })
    .min(MIN_LENGTH, { message: ERROR_STRING_IS_SHORT})
    .regex(EMAIL_REGEX, { message: ERROR_INVALID_EMAIL })
})

