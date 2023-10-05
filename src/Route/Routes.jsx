import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/Home/News";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Error/errorpage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            {" "}
            <News></News>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default routes;