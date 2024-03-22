import HomePage from '@pages/homePage/HomePage';
import SetPasswordPage from '@pages/loginPage/setPassword/SetPasswordPage';
import { RouteObject } from 'react-router-dom';

export const appRouter: RouteObject[] = [
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/reset-password',
    element: <SetPasswordPage />,
  },
];
