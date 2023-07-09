import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ShopPage from '../pages/ShopPage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import PrivateRoute from './PrivateRoute';
import AddProduct from '../pages/Dashboard/AdminDashboard/AddProduct/AddProduct';
import Dashboard from '../Layouts/Dashboard';
import ListProduct from '../pages/Dashboard/AdminDashboard/ListProduct';
import UpdateProduct from '../pages/Dashboard/AdminDashboard/UpdateProduct';
import ListUsers from '../pages/Dashboard/AdminDashboard/ListUsers';

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
        loader: () => fetch(`${import.meta.env.VITE_API}/products`),
      },
      {
        path: '/shop/:id',
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/products${params.id}`),
      },

      {
        path: '/Login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage></SignupPage>,
      },
      {
        path: 'dashboard',

        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: 'admin-home',
            element: (
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            ),
          },
          {
            path: 'add-product',
            element: <AddProduct />,
          },
          {
            path: 'manage-product',
            element: <ListProduct />,
          },
          {
            path: 'allusers',
            element: <ListUsers />,
          },
          {
            path: 'update-product/:id',
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);
