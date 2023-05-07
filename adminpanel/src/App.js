import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Pages/AddProduct";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
