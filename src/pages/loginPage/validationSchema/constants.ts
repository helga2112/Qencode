export const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const MAX_LENGTH_EMAIL = 512;
// Error in tech requirements:
// in https://auth-qa.qencode.com/v1/auth-api-references#tag/login
// length 15 - 512 characters
// in tech task  - 8
export const MIN_LENGTH_EMAIL = 8;

export const MAX_LENGTH_PASS = 512;
export const MIN_LENGTH_PASS = 5;

export const ERROR_STRING_IS_LONG = `Login should be less then ${MAX_LENGTH_EMAIL} symbols`;
export const ERROR_STRING_IS_SHORT = `Login should be more then ${MIN_LENGTH_EMAIL} symbols`;
export const ERROR_INVALID_EMAIL = `Please enter valid email`;

export const ERROR_PASSWORD_IS_LONG = `Password should be less then ${MAX_LENGTH_PASS} symbols`;
export const ERROR_PASSWORD_IS_SHORT = `Login should be more then ${MIN_LENGTH_PASS} symbols`;

export const ERROR_PASSWORD_NOT_MATCH = `Password does not match`;
