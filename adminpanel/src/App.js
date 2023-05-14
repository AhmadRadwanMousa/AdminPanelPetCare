import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Pages/AddProduct";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddBlog from "./Pages/AddBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/AddBlog" element={<AddBlog />} />
    </Routes>
  );
}

export default App;
