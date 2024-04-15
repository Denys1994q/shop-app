import {createBrowserRouter} from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import {routes} from './routes';
import MainLayout from '@layouts/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: `${routes.home}`,
        element: <HomePage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
