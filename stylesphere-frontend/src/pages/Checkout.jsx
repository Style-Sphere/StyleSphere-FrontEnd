import React from "react";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/cart.css";
import "../assets/styles/checkout_responsive.css";

const Checkout = () => {
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
                  <div className="home_title">Checkout</div>
                  <div className="breadcrumbs">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/cart">Shopping Cart</Link></li>
                      <li>Checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="checkout">
        <div className="container">
          <div className="row">
            {/* Billing Details */}
            <div className="col-lg-6">
              <div className="billing">
                <div className="checkout_title">Billing Details</div>
                <div className="checkout_form_container">
                  <form>
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
                      <input type="text" className="checkout_input checkout_input_50" placeholder="First Name" required />
                      <input type="text" className="checkout_input checkout_input_50" placeholder="Last Name" required />
                    </div>
                    <input type="text" className="checkout_input" placeholder="Company Name" />
                    <input type="email" className="checkout_input" placeholder="E-mail" required />
                    <select className="checkout_input">
                      <option>Country</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
                    </select>
                    <input type="text" className="checkout_input" placeholder="Address" required />
                    <input type="text" className="checkout_input" placeholder="Town" required />
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
                      <input type="text" className="checkout_input checkout_input_50" placeholder="Zipcode" required />
                      <input type="text" className="checkout_input checkout_input_50" placeholder="Phone No" required />
                    </div>
                    <textarea className="checkout_comment" placeholder="Leave a comment about your order"></textarea>
                    <div className="billing_options">
                      <div className="billing_account">
                        <input type="checkbox" id="checkbox_account" className="regular_checkbox" />
                        <label htmlFor="checkbox_account"><img src="/images/checked.png" alt="Checked" /></label>
                        <span>Create an account</span>
                      </div>
                      <div className="billing_shipping">
                        <input type="checkbox" id="checkbox_shipping" className="regular_checkbox" />
                        <label htmlFor="checkbox_shipping"><img src="/images/checked.png" alt="Checked" /></label>
                        <span>Ship to a different address</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Cart Details */}
            <div className="col-lg-6">
              <div className="cart_details">
                <div className="checkout_title">Cart Total</div>
                <div className="cart_total">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-between">
                      <div className="cart_total_title">Product</div>
                      <div className="cart_total_price">Total</div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-between">
                      <div className="cart_total_title">2 Piece Swimsuit x1</div>
                      <div className="cart_total_price">$35.00</div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-between">
                      <div className="cart_total_title">Subtotal</div>
                      <div className="cart_total_price">$35.00</div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-between">
                      <div className="cart_total_title">Shipping</div>
                      <div className="cart_total_price">$5.00</div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-between total_row">
                      <div className="cart_total_title">Total</div>
                      <div className="cart_total_price">$40.00</div>
                    </li>
                  </ul>
                </div>
                <div className="payment_options">
                  <div>
                    <input type="radio" id="radio_payment_1" name="payment" className="regular_radio" />
                    <label htmlFor="radio_payment_1">Cash on Delivery</label>
                  </div>
                  <div>
                    <input type="radio" id="radio_payment_2" name="payment" className="regular_radio" defaultChecked />
                    <label htmlFor="radio_payment_2">PayPal</label>
                    <div className="payment_option"><img src="/images/visa.jpg" alt="Visa" /></div>
                    <div className="payment_option"><img src="/images/master.jpg" alt="Mastercard" /></div>
                  </div>
                  <button className="cart_total_button">Place Order</button>
                </div>
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

export default Checkout;
