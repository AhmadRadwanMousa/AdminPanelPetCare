import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Pages/AddProduct";
import routes from "./routes/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* {routes.map((route) => {
    
    })} */}
      <Route path="/" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
