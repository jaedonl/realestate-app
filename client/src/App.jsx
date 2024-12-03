import {Layout, RequiredAuth} from './routes/layout/layout';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/listPage';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage'
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import Login from './routes/login/login';
import Register from './routes/register/register';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
    {
      path: "/",
      element: <RequiredAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App