import { z } from 'zod';
import {
  EMAIL_REGEX,
  ERROR_INVALID_EMAIL,
  ERROR_PASSWORD_IS_LONG,
  ERROR_PASSWORD_IS_SHORT,
  ERROR_PASSWORD_NOT_MATCH,
  ERROR_STRING_IS_LONG,
  ERROR_STRING_IS_SHORT,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASS,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASS,
} from './constants';

export const password = z
  .string()
  .max(MAX_LENGTH_PASS, { message: ERROR_PASSWORD_IS_LONG })
  .min(MIN_LENGTH_PASS, { message: ERROR_PASSWORD_IS_SHORT });

export const login = z
  .string()
  .max(MAX_LENGTH_EMAIL, { message: ERROR_STRING_IS_LONG })
  .min(MIN_LENGTH_EMAIL, { message: ERROR_STRING_IS_SHORT })
  .regex(EMAIL_REGEX, { message: ERROR_INVALID_EMAIL });

export const schemaLogin = z.object({
  login,
});

export const schemaLoginPassword = z.object({
  login,
  password: password,
});

export const schemaForgotPassword = z.object({
  login,
});

export const schemaSetPassword = z
  .object({
    password,
    passwordRepeat: password,
  })
  .superRefine((data, customError) => {
    if (data.password !== data.passwordRepeat) {
      customError.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['passwordRepeat'],
        message: ERROR_PASSWORD_NOT_MATCH,
      });
    }
  });
