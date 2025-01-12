import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Adminlayout from "../layout/adminlayout";
import Dashboard from "../pages/admin/dashboard";
import Product from "../pages/admin/product";
import ProtectedRoute from "../Redux/protectedRoute";

const RoutesList = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Adminlayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "product", 
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);


export default RoutesList;
