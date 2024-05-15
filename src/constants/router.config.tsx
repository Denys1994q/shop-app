import {createBrowserRouter} from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import {routes} from './routes';
import App from '@/App';
import ProductDetailsPage from '@pages/ProductDetailsPage/ProductDetailsPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: `${routes.home}`,
        element: <HomePage />
      },
      {
        path: `${routes.home}/${routes.products}/:id`,
        element: <ProductDetailsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
