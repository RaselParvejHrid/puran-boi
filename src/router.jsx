import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import ErrorPage from './components/ErrorPage';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Blog from './routes/Blog';
import Dashboard from './routes/Dashboard';
import AuthenticationDarowan from './components/AuthenticationDarowan';
import RoleDarowan from './components/RoleDarowan';
import AddProduct from './routes/AddProduct';
import MyProducts from './routes/MyProducts';
import PurchaseRequests from './routes/PurchaseRequests';
import MyBuyers from './routes/MyBuyers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/dashboard',
        element: (
          <AuthenticationDarowan>
            <Dashboard />
          </AuthenticationDarowan>
        ),
        children: [
          {
            index: true,
            element: (
              <p className="text-center text-2xl">
                Select from Menu on Above or Left.
              </p>
            ),
          },
          {
            path: 'add-product',
            element: (
              <AuthenticationDarowan>
                {getCurrentUserFirebaseUID => (
                  <RoleDarowan
                    neededRole="seller"
                    getCurrentUserFirebaseUID={getCurrentUserFirebaseUID}
                  >
                    <AddProduct />
                  </RoleDarowan>
                )}
              </AuthenticationDarowan>
            ),
          },
          {
            path: 'my-products',
            element: (
              <AuthenticationDarowan>
                {getCurrentUserFirebaseUID => (
                  <RoleDarowan
                    neededRole="seller"
                    getCurrentUserFirebaseUID={getCurrentUserFirebaseUID}
                  >
                    <MyProducts />
                  </RoleDarowan>
                )}
              </AuthenticationDarowan>
            ),
          },
          {
            path: 'purchase-requests',
            element: (
              <AuthenticationDarowan>
                {getCurrentUserFirebaseUID => (
                  <RoleDarowan
                    neededRole="seller"
                    getCurrentUserFirebaseUID={getCurrentUserFirebaseUID}
                  >
                    <PurchaseRequests />
                  </RoleDarowan>
                )}
              </AuthenticationDarowan>
            ),
          },
          {
            path: 'my-buyers',
            element: (
              <AuthenticationDarowan>
                {getCurrentUserFirebaseUID => (
                  <RoleDarowan
                    neededRole="seller"
                    getCurrentUserFirebaseUID={getCurrentUserFirebaseUID}
                  >
                    <MyBuyers />
                  </RoleDarowan>
                )}
              </AuthenticationDarowan>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
