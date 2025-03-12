import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
//import Home from "./pages/Home"; // 메인 페이지 (index.html 변환)
//import Navbar from "./components/Navbar"; // 네비게이션 바 (추가할 경우)
//import Footer from "./components/Footer"; // 푸터 (추가할 경우)

const App = () => {
  return (
    <Router>
      {/* <Navbar /> 모든 페이지에서 공통으로 네비게이션 표시 */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Footer /> 모든 페이지에서 공통으로 푸터 표시 */}
    </Router>
  );
};

export default App;