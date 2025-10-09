import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PageImage from './components/PageImage.jsx'
import ErrorPage from './ErrorPage.jsx'
import './App.css'
import './Another.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/image",
    element: <PageImage/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);