import ForgotPasswordPage from '@pages/loginPage/forgotPassword/ForgotPasswordPage';
import LoginWithPasswordPage from '@pages/loginPage/loginWithPassword/LoginWithPasswordPage';
import SetPasswordPage from '@pages/loginPage/setPassword/SetPasswordPage';
import { RouteObject } from 'react-router-dom';

export const loginRouter: RouteObject[] = [
  {
    path: '/login',
    element: <LoginWithPasswordPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
];
