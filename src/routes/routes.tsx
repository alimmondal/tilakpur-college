import App from '@/App';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import HSCRoutine from '@/pages/HSCRoutine';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import TeachersList from '@/pages/TeachersList';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/teacher-list',
        element: <TeachersList />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/hsc',
        element: <HSCRoutine />,
      },
      {
        path: '/checkout',
        // element: (
        // <PrivateRoute>
        //   <Checkout />,
        // </PrivateRoute>
        // ),
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
