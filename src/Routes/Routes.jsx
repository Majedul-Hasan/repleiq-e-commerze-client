import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ShopPage from '../pages/ShopPage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/shop',
        element: <ShopPage></ShopPage>,
      },
      {
        path: '/shop/:id',
        element: <ProductDetail></ProductDetail>,
      },

      {
        path: '/Login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage></SignupPage>,
      },
    ],
  },
]);
