import Layout from './routes/layout/layout';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/listPage';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage'
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
        // {
        //   path: '/profile',
        //   element: <ProfilePage />
        // },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App