import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

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
        // element: < contact/>
      },
      {
        path: '/Resume',
        // element: < resume/>
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
