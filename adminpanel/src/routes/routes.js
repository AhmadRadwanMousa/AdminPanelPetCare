import AddBlog from "../Pages/AddBlog";
import AddProduct from "../Pages/AddProduct";
import GetBlog from "../Pages/GetBlog";
import GetProduct from "../Pages/GetProduct";
import AddType from "../Pages/AddType";
const routes = [
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
];
export default routes;
