import NewPostPage from './routes/newPostPage/newPostPage';
import HomePage from './routes/home/HomePage';
import { Layout, RequireAuth } from './routes/layout/LayoutPage';
import List from './routes/list/ListPage';
import Login from './routes/login/LogIn';
import ProfilePage from './routes/profile/ProfilePage';
import ProfileUpdatePage from './routes/profileUpdate/profileUpdate';
import Register from './routes/register/register';
import SinglePage from './routes/single/SinglePage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { singlePageLoader } from './lib/loaders';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/list",
          element: <List/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
      
      ]
    },
    {
      path: "/",
      element:< RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>,
        },
        {
          path: "/add",
          element: <NewPostPage/>,
        },
      ],
    }
  ]);
  
  return <RouterProvider router={router}/>
}

export default App