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
import Products from './routes/Products.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import SinglePost from './routes/SinglePost.jsx';
import SingleProduct from './routes/SingleProduct.jsx';
import ComponentsPage from './routes/ComponentsPage.jsx';
import Template from './components/template/Template.jsx';
import Form from './components/form/form.jsx';
import Registration from './routes/Registration.jsx';

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
    path: "/react-frontend/registration/",
    element: <Registration />,
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
  {
    path: "/react-frontend/products/",
    element: <Products />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/products/:productId",
    element: <SingleProduct />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/react-frontend/components/",
    element: <ComponentsPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/react-frontend/components/form",
        element: <Form />,
      },
      {
        path: "/react-frontend/components/:id",
        element: <Template />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
