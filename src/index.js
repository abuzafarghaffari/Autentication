import React,{useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthContext from './store/auth-context';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import AuthPage from  './pages/AuthPage';
import UserProfile from './components/Profile/UserProfile';
import {AuthContextProvider} from './store/auth-context';

//const authCtx = useContext(AuthContext);
const router = createBrowserRouter([
{
  path:'/',
  element:<Layout />,
  children:[
    {
      path:'/',
      element:<HomePage />
    },
    {
      path:'/auth',
      element:<AuthPage />
    },
    {
      path:'/profile',
      element: <UserProfile />
    }

  ]
}

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AuthContextProvider>
    <RouterProvider router ={router}/>
    </AuthContextProvider>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
