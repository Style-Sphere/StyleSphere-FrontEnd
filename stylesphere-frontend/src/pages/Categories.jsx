import React from "react";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/categories.css";
import "../assets/styles/categories_responsive.css";

const Categories = () => {
  return (
    <div className="super_container">
      {/* Header */}
      <header className="header">
        <div className="header_inner d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <Link to="/">Wish</Link>
          </div>
          <nav className="main_nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Clothes</Link></li>
              <li><Link to="/categories">Accessories</Link></li>
              <li><Link to="/categories">Lingerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="header_content ml-auto">
            <div className="search header_search">
              <form action="#">
                <input type="search" className="search_input" required />
                <button type="submit" className="search_button">
                  <img src="/images/magnifying-glass.svg" alt="Search" />
                </button>
              </form>
            </div>
            <div className="shopping">
              <Link to="#">
                <div className="cart">
                  <img src="/images/shopping-bag.svg" alt="Cart" />
                  <div className="cart_num_container">
                    <div className="cart_num_inner">
                      <div className="cart_num">1</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="star">
                  <img src="/images/star.svg" alt="Favorites" />
                  <div className="star_num_container">
                    <div className="star_num_inner">
                      <div className="star_num">0</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="avatar">
                  <img src="/images/avatar.svg" alt="User" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <div className="home">
        <div className="home_background" style={{ backgroundImage: "url(/images/categories.jpg)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_container">
                <div className="home_content">
                  <div className="home_title">Woman</div>
                  <div className="breadcrumbs">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>Woman</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Sidebar */}
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sidebar_left">
                {/* Category Section */}
                <div className="sidebar_section">
                  <div className="sidebar_title">Categories</div>
                  <div className="sidebar_section_content">
                    <ul>
                      <li><Link to="#">Wedding Dresses (23)</Link></li>
                      <li><Link to="#">Swimsuits (11)</Link></li>
                      <li><Link to="#">Jeans (61)</Link></li>
                      <li><Link to="#">Tops (34)</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Color Filter */}
                <div className="sidebar_section">
                  <div className="sidebar_title">Color</div>
                  <div className="sidebar_section_content">
                    <ul>
                      <li><Link to="#"><span style={{ background: "#a3ccff" }}></span>Blue (23)</Link></li>
                      <li><Link to="#"><span style={{ background: "#937c6f" }}></span>Brown (11)</Link></li>
                      <li><Link to="#"><span style={{ background: "#000000" }}></span>Black (61)</Link></li>
                      <li><Link to="#"><span style={{ background: "#ff5c00" }}></span>Orange (34)</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Size Filter */}
                <div className="sidebar_section">
                  <div className="sidebar_title">Size</div>
                  <div className="sidebar_section_content">
                    <ul>
                      <li><Link to="#">Small S (23)</Link></li>
                      <li><Link to="#">Medium M (11)</Link></li>
                      <li><Link to="#">Large L (61)</Link></li>
                      <li><Link to="#">Extra Large XL (34)</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer_logo"><Link to="/">Wish</Link></div>
          <nav className="footer_nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Clothes</Link></li>
              <li><Link to="/categories">Accessories</Link></li>
              <li><Link to="/categories">Lingerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
