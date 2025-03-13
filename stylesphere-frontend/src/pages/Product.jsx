import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/product.css";

const Product = () => {
  const { productId } = useParams(); // URL에서 상품 ID 가져오기
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

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

      {/* Product Details */}
      <div className="product">
        <div className="container">
          <div className="row product_row">
            {/* Product Image */}
            <div className="col-lg-7">
              <div className="product_image">
                <div className="product_image_large">
                  <img src="/images/product_image_1.jpg" alt="Product" />
                </div>
                <div className="product_image_thumbnails d-flex">
                  <img src="/images/product_image_1.jpg" alt="Thumb 1" />
                  <img src="/images/product_image_2.jpg" alt="Thumb 2" />
                  <img src="/images/product_image_4.jpg" alt="Thumb 3" />
                </div>
              </div>
            </div>

            {/* Product Content */}
            <div className="col-lg-5">
              <div className="product_content">
                <h2 className="product_name">2 Piece Swimsuit</h2>
                <div className="product_price">$35.00</div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>

                <div className="in_stock_container">
                  <span className="in_stock">In Stock</span>
                </div>

                <p className="product_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque consequat tellus non tortor tempus, id egestas elit iaculis.
                </p>

                {/* Quantity Selector */}
                <div className="product_quantity_container">
                  <span>Quantity:</span>
                  <div className="product_quantity">
                    <button onClick={decreaseQuantity}>-</button>
                    <input type="text" value={quantity} readOnly />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="product_size_container">
                  <span>Size:</span>
                  <div className="product_size">
                    <label><input type="radio" name="size" value="XS" /> XS</label>
                    <label><input type="radio" name="size" value="S" defaultChecked /> S</label>
                    <label><input type="radio" name="size" value="M" /> M</label>
                    <label><input type="radio" name="size" value="L" /> L</label>
                    <label><input type="radio" name="size" value="XL" /> XL</label>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="cart_button">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews">
            <h3>Reviews</h3>
            <ul>
              <li>
                <strong>Maria Smith</strong> - Nov 29, 2023
                <p>Great quality swimsuit, very comfortable!</p>
              </li>
              <li>
                <strong>John Doe</strong> - Dec 5, 2023
                <p>Love the design! Highly recommended.</p>
              </li>
            </ul>
          </div>

          {/* Leave a Review */}
          <div className="review_form">
            <h3>Leave a Review</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="E-mail" required />
              <textarea placeholder="Your review"></textarea>
              <button type="submit">Submit</button>
            </form>
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

export default Product;
