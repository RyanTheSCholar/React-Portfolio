import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import App from "./App.jsx";
import "./index.css";
import  Contact  from "./pages/contact.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Resume from "./pages/resume.jsx";
import About from "./pages/about.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // add an optional error page
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/Portfolio',
        element: < Portfolio/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Resume',
        element: < Resume/>
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
