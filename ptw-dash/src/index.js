import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import App from './App';
import PtwContext from './components/context/PtwContext';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

let protectedUser = 1; //temp varuable to test the user security

let ProtectedRoute = ({children}) => {
  if (!protectedUser) {
    return (
      <Navigate to="/login"/>
    )
  }
  return (
    children
  )
}

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: (<ProtectedRoute><App/></ProtectedRoute>)
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PtwContext>
      <RouterProvider router={appRouter} />
    </PtwContext>
  </>
);