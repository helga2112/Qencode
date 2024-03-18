const Host = 'https://auth-qa.qencode.com/v1/auth-api-references#tag/'

export const api = {
 login: `${Host}login/operation/login_v1_auth_login_post`,
 accessTocken: `${Host}auth/operation/access_token_v1_auth_access_token_post`,
 refreshTocken: `${Host}auth/operation/refresh_token_v1_auth_refresh_token_post`,
 setNewPassword:`${Host}password/operation/password_set_v1_auth_password_set_post`,
 resetPassword: `${Host}password/operation/password_reset_v1_auth_password_reset_post`
}