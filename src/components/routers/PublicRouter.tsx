import { RouteObject } from 'react-router-dom';
import LoginPage from '@pages/loginPage/loginPage/LoginPage';
import ErrorPage from '@pages/errorPage/ErrorPage';

export const publicRouter: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <ErrorPage errorMessage={'No such page'} />,
  },
];
