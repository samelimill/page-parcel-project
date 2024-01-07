// import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// css imports
import './index.css'

//bringind in the pages the router will use to conditionally show the appropriate views/pages
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);