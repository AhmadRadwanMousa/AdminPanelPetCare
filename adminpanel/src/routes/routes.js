import AddBlog from "../Pages/AddBlog";
import AddProduct from "../Pages/AddProduct";
import GetBlog from "../Pages/GetBlog";
import GetProduct from "../Pages/GetProduct";
import AddType from "../Pages/AddType";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
const routes = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/AddProduct",
    element: <AddProduct />,
  },
  {
    path: "/GetProduct",
    element: <GetProduct />,
  },
  {
    path: "/AddBlog",
    element: <AddBlog />,
  },
  {
    path: "/GetBlog",
    element: <GetBlog />,
  },
  {
    path: "/AddType",
    element: <AddType />,
  },
  {
    path: "/Orders",
    element: <Orders />,
  },
];
export default routes;
