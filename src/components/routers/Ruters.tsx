import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from '@app/hooks';
import { loginRouter } from './LoginRouter';
import { publicRouter } from './PublicRouter';
import { appRouter } from './AppRouter';

const Routers = () => {
  const token = useAppSelector((state) => state.login.token);

  const router = createBrowserRouter([
    ...publicRouter,
    ...(!token ? loginRouter : []),
    ...(token ? appRouter : []),
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
