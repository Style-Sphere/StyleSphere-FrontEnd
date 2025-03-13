import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home"; // 메인 페이지 (index.html 변환)
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> 모든 페이지에서 공통으로 네비게이션 표시 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      {/* <Footer /> 모든 페이지에서 공통으로 푸터 표시 */}
    </Router>
  );
};

export default App;