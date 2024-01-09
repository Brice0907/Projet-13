import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Root from './root/root.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/profile.jsx';
import Transaction from './pages/transaction/transaction.jsx';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // À remplacer par la logique d'authentification

// A mettre dans un autre fichier
const ProtectedProfil = () => {
  return isAuthenticated ? (
    <Profile />
  ) : (
    <Navigate to="/login" replace />
  );
};
const ProtectedTransact = () => {
  return isAuthenticated ? (
    <Transaction />
  ) : (
    <Navigate to="/login" replace />
  );
};

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profil',
        element: <ProtectedProfil />,
      },
      {
        path: '/transaction',
        element: <ProtectedTransact />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);