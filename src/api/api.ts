// export const BASE_API = 'https://auth-qa.qencode.com/v1/auth-api-references#tag/'
export const BASE_API = 'https://auth-qa.qencode.com/v1/'

export const api = {
 login: `login/operation/login_v1_auth_login_post`,
 accessTocken: `auth/operation/access_token_v1_auth_access_token_post`,
 refreshTocken: `auth/operation/refresh_token_v1_auth_refresh_token_post`,
 setNewPassword:`password/operation/password_set_v1_auth_password_set_post`,
 resetPassword: `password/operation/password_reset_v1_auth_password_reset_post`
}
/* export const api = {
 login: `${baseApi}login/operation/login_v1_auth_login_post`,
 accessTocken: `${baseApi}auth/operation/access_token_v1_auth_access_token_post`,
 refreshTocken: `${baseApi}auth/operation/refresh_token_v1_auth_refresh_token_post`,
 setNewPassword:`${baseApi}password/operation/password_set_v1_auth_password_set_post`,
 resetPassword: `${baseApi}password/operation/password_reset_v1_auth_password_reset_post`
} */