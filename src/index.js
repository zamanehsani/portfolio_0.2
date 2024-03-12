import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Header from './components/header';
import NotFoundPage from './components/NotFoundPage';
import Blog from './components/blog/blog';
import BlogDetails from './components/blog/blogDetail';
import Experience from './components/experience';
import Contact from './components/contact';

// Define Layout component
const Layout = ({ children }) => {
  return (
    <div className='bg-yellow-100'>
      <Header/>
      <main className=''>{children}</main>
      {/* footer here */}
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
    errorElement:<Layout><NotFoundPage /></Layout>
  },
  {
    path: "/experiences",
    element: <Layout><Experience /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/blog",
    element: <Layout><Blog /></Layout>,
  },
  {
    path: "/blog/:id",
    element: <Layout><BlogDetails /></Layout>,
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
