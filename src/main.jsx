import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import App from "./App.jsx";
import "./index.css";
import  Contact  from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // add an optional error page
    children: [
      {
        index: true,
        // element: <about />
      },
      {
        path: '/Portfolio',
        // element: < portfolio/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Resume',
        // element: < resume/>
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
  
);
