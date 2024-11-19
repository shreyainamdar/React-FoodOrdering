import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body.js';
import About from './components/About.js'
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import Resmenu from './components/Resmenu.js';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Cart from './components/Cart.js';
// import Store from './components/Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Store=lazy(()=> import("./components/Store.js"))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: < Body/>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/store',
        element: <Suspense fallback={<h2>Not loaded..</h2>}><Store /></Suspense>,
      },
      {
        path: '/city/bangalore/:resid',
        element: <Resmenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },

    ],
    errorElement: <Error/>
  },
  
]);

root.render(
  
   <RouterProvider router={appRouter}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
