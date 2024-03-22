export interface ErrorResponce {
  data: { detail: string };
}

interface ErrorResetPasswordItem {
  error: string;
  field_name: string;
}
export interface ErrorResetPasswordResponce {
  data: {
    detail: ErrorResetPasswordItem[];
  };
}
