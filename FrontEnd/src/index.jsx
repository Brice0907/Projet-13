import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Root from './root/root.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <Login />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);