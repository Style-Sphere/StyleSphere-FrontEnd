import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/cart.css";
import "../assets/styles/cart_responsive.css";

import magnifyingGlass from "../assets/images/magnifying-glass.svg";
import shoppingBag from "../assets/images/shopping-bag.svg";
import starIcon from "../assets/images/star.svg";
import avatarIcon from "../assets/images/avatar.svg";
import cartProduct1 from "../assets/images/cart_product_1.jpg";
import trashIcon from "../assets/images/trash.png";

const Cart = () => {
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
                  <img src={magnifyingGlass} alt="Search" />
                </button>
              </form>
            </div>
            <div className="shopping">
              <Link to="#">
                <div className="cart">
                  <img src={shoppingBag} alt="Cart" />
                  <div className="cart_num_container">
                    <div className="cart_num_inner">
                      <div className="cart_num">1</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="star">
                  <img src={starIcon} alt="Favorites" />
                  <div className="star_num_container">
                    <div className="star_num_inner">
                      <div className="star_num">0</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="avatar">
                  <img src={avatarIcon} alt="User" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Section */}
      <div className="cart_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart_title">Your Shopping Cart</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart_bar d-flex flex-row align-items-center justify-content-start">
                <div className="cart_bar_title_name">Product</div>
                <div className="cart_bar_title_content ml-auto">
                  <div className="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_bar_title_price">Price</div>
                    <div className="cart_bar_title_quantity">Quantity</div>
                    <div className="cart_bar_title_total">Total</div>
                    <div className="cart_bar_title_button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Item */}
          <div className="row">
            <div className="col">
              <div className="cart_products">
                <ul>
                  <li className="cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                    <div className="cart_product_image">
                      <img src={cartProduct1} alt="Product" />
                    </div>
                    <div className="cart_product_name">
                      <Link to="/product">2 Piece Swimsuit</Link>
                    </div>
                    <div className="cart_product_info ml-auto">
                      <div className="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
                        <div className="cart_product_price">$35.00</div>
                        <div className="product_quantity_container">
                          <input type="text" value="1" className="quantity_input" />
                        </div>
                        <div className="cart_product_total">$35.00</div>
                        <div className="cart_product_button">
                          <button className="cart_product_remove">
                            <img src={trashIcon} alt="Remove" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Cart Controls */}
          <div className="row">
            <div className="col">
              <div className="cart_control_bar d-flex flex-md-row flex-column align-items-start justify-content-start">
                <button className="button_clear cart_button">Clear Cart</button>
                <button className="button_update cart_button">Update Cart</button>
                <button className="button_update cart_button_2 ml-md-auto">Continue Shopping</button>
              </div>
            </div>
          </div>
          {/* Cart Total */}
          <div className="row cart_extra">
            <div className="col-lg-6">
              <div className="cart_coupon">
                <div className="cart_title">Coupon Code</div>
                <form action="#" className="cart_coupon_form">
                  <input type="text" className="cart_coupon_input" placeholder="Coupon code" required />
                  <button className="button_clear cart_button_2">Apply Coupon</button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cart_total">
                <div className="cart_title">Cart Total</div>
                <ul>
                  <li><div className="cart_total_title">Subtotal</div><div className="cart_total_price ml-auto">$35.00</div></li>
                  <li><div className="cart_total_title">Shipping</div><div className="cart_total_price ml-auto">$5.00</div></li>
                  <li><div className="cart_total_title">Total</div><div className="cart_total_price ml-auto">$40.00</div></li>
                </ul>
                <button className="cart_total_button">Proceed to Checkout</button>
              </div>
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

export default Cart;
