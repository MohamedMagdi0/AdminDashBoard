import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="ProductList" element={<ProductList />} />
            <Route path="/Product/:ProductId" element={<Product />} />
            <Route path="newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
