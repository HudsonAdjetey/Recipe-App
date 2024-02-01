import { useEffect } from "react";
import ToastContainers from "./components/toast/ToastContainers";
import { useUserContext } from "./container/cutomApi/ContextApi";
import Home from "./container/pages/Home";
import Login from "./container/pages/Login";
import Profile from "./container/pages/Profile";
import Register from "./container/pages/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Collection from "./container/pages/Collection";

import { useCookies } from "react-cookie";
import SaveCard from "./container/pages/SaveCard";
import Create from "./container/pages/Create";
import Dishes from "./components/dishes/Dishes";

/* CHECK FOR USER */

function App() {
  const { userInfo } = useSelector((store) => store.auth);

  const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const userInfo = useUserContext(); // Get user information from context

    useEffect(() => {
      // Check if user is authenticated
      if (userInfo) {
        // User is authenticated, redirect to a different page (e.g., home page)
        <Navigate to={"/"} replace />;
      }
    }, [userInfo, navigate]);

    return children; // Render the children components (login/register) if user is not authenticated
  };

  const Layout = () => {
    return userInfo ? <Outlet /> : <Navigate to={"/register"} replace />;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <AuthGuard>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthGuard>
          <Register />
        </AuthGuard>
      ),
    },
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "collection",
          element: <Collection />,
        },
        {
          path: "dish/:id",
          element: <SaveCard />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "dishes",
          element: <Dishes />,
        },
      ],
    },
  ]);
  return (
    <div>
      <ToastContainers />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
