import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from './routes/Homepage.jsx';
import About from './routes/About.jsx';
import Blog from './routes/Blog.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import SinglePost from './routes/SinglePost.jsx';

const router = createBrowserRouter([
  {
    path: "/react-frontend/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/about/",
    element: <About />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/blog/",
    element: <Blog />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/blog/:postId",
    element: <SinglePost />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/contact/",
    element: <Contact />,
    // errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
