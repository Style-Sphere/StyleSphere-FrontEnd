import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main_styles.css";
import "../assets/styles/responsive.css";
import { Carousel } from "react-bootstrap";

import homeSlider1 from "../assets/images/home_slider_1.jpg";
import promo1 from "../assets/images/promo_1.jpg";
import promo2 from "../assets/images/promo_2.jpg";
import promo3 from "../assets/images/promo_3.jpg";

const Home = () => {
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

      {/* Home Slider */}
      <Carousel className="home_slider_container">
        <Carousel.Item>
          <div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider1})` }}></div>
          <Carousel.Caption>
            <h3>Promo Prices</h3>
            <p>New Collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider1})` }}></div>
          <Carousel.Caption>
            <h3>Promo Prices</h3>
            <p>New Collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_slider_background" style={{ backgroundImage: `url(${homeSlider1})` }}></div>
          <Carousel.Caption>
            <h3>Promo Prices</h3>
            <p>New Collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Promo Section */}
      <div className="promo">
        <div className="container">
          <div className="row promo_container">
            {/* Promo Item */}
            <div className="col-lg-4 promo_col">
              <div className="promo_item">
                <div className="promo_image">
                  <img src={promo1} alt="Promo 1" />
                  <div className="promo_content promo_content_1">
                    <div className="promo_title">-30% off</div>
                    <div className="promo_subtitle">on all bags</div>
                  </div>
                </div>
                <div className="promo_link"><Link to="/shop">Shop Now</Link></div>
              </div>
            </div>
            {/* Promo Item */}
            <div className="col-lg-4 promo_col">
              <div className="promo_item">
                <div className="promo_image">
                  <img src={promo2} alt="Promo 2" />
                  <div className="promo_content promo_content_2">
                    <div className="promo_title">-30% off</div>
                    <div className="promo_subtitle">coats & jackets</div>
                  </div>
                </div>
                <div className="promo_link"><Link to="/shop">Shop Now</Link></div>
              </div>
            </div>
            {/* Promo Item */}
            <div className="col-lg-4 promo_col">
              <div className="promo_item">
                <div className="promo_image">
                  <img src={promo3} alt="Promo 3" />
                  <div className="promo_content promo_content_3">
                    <div className="promo_title">-25% off</div>
                    <div className="promo_subtitle">on Sandals</div>
                  </div>
                </div>
                <div className="promo_link"><Link to="/shop">Shop Now</Link></div>
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

export default Home;
