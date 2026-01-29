import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Ecommerce from "../components/Ecommerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <Signup />,
      },
      { path: "/Ecommerce", element: <Ecommerce /> },
    ],
  },
]);

export default router;
