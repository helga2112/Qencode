export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponce {
  error: number;
  detail: [];
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}

export interface SetPasswordRequest {
  email: string;
  token: string;
  secret: string;
  password: string;
  password_confirm?: string;
}

export interface SetPasswordResponce {
  detail: any[] | string | number;
}

export interface ResetPasswordRequest {
  email: string;
}
export interface ResetPasswordResponce extends SetPasswordResponce {}
