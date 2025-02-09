import ReactDOM from 'react-dom/client'
// import App from './App'
// import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopCardPage from "./pages/ShopCardPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ShopCard",
    element: <ShopCardPage />
  },
  {
    path: "/shop",
    element: <ShopCardPage />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
