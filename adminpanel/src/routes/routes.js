import AddBlog from "../Pages/AddBlog";
import AddProduct from "../Pages/AddProduct";
import GetBlog from "../Pages/GetBlog";

const routes = [
  {
    path: "/AddProduct",
    element: <AddProduct />,
  },
  {
    path: "/AddBlog",
    element: <AddBlog />,
  },
  {
    path: "/GetBlog",
    element: <GetBlog />,
  },
];
export default routes;
