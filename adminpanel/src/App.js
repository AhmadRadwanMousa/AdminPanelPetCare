import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Pages/AddProduct";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddBlog from "./Pages/AddBlog";
import Login from "./Pages/Login";
import RouteGuard from "./Auth/RouteGuard";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<RouteGuard>{route.element}</RouteGuard>}
          />
        ))}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
