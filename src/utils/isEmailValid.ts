const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


// TODO: add validation < 32 char
export const isEmailValid = (email : string): boolean => {
    return (email.length > 0) && EMAIL_REGEX.test(email)
}