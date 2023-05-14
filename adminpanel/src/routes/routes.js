import AddBlog from "../Pages/AddBlog";
import AddProduct from "../Pages/AddProduct";

const routes = [
  {
    path: "/",
    element: <AddProduct />,
  },
  {
    path: "/AddBlog",
    element: <AddBlog />,
  },
];
export default routes;
