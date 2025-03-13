import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/contact.css";
import "../assets/styles/contact_responsive.css";

// ✅ 이미지 import (Webpack에서 번들링 가능하도록 설정)
import contactBg from "../assets/images/contact.jpg";
import contactInfo1 from "../assets/images/contact_info_1.png";
import contactInfo2 from "../assets/images/contact_info_2.png";
import contactInfo3 from "../assets/images/contact_info_3.png";

// Google Maps API Key (환경변수 활용)
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Contact = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 37.7749, lng: -122.4194 }, // 샌프란시스코 좌표 (변경 가능)
          zoom: 12,
        });
      };
    };

    if (GOOGLE_MAPS_API_KEY) {
      loadGoogleMaps();
    }
  }, []);

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
        <div className="home_background" style={{ backgroundImage: `url(${contactBg})` }}></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_container">
                <div className="home_content">
                  <div className="home_title">Contact</div>
                  <div className="breadcrumbs">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map">
        <div className="google_map">
          <div className="map_container">
            <div id="map" style={{ width: "100%", height: "400px" }}></div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="review_form_container">
                <div className="review_form_title">Get in Touch</div>
                <div className="review_form_content">
                  <form className="review_form">
                    <div className="d-flex flex-md-row flex-column align-items-start justify-content-between">
                      <input type="text" className="review_form_input" placeholder="Name" required />
                      <input type="email" className="review_form_input" placeholder="E-mail" required />
                      <input type="text" className="review_form_input" placeholder="Subject" />
                    </div>
                    <textarea className="review_form_text" placeholder="Message"></textarea>
                    <button type="submit" className="review_form_button">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact_text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact_info">
                <div className="contact_title">Contact Info</div>
                <ul>
                  <li>
                    <img src={contactInfo1} alt="Location" />
                    <span>Rosia Road, no67, Gibraltar UK</span>
                  </li>
                  <li>
                    <img src={contactInfo2} alt="Email" />
                    <span>office@yourbusiness.com</span>
                  </li>
                  <li>
                    <img src={contactInfo3} alt="Phone" />
                    <span>+45 7703 29293 34</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="col-lg-7">
              <div className="faq">
                <div className="contact_title">FAQ</div>
                <div className="faq_content">
                  <div className="accordion">
                    <div className="accordion_container">
                      <div className="accordion_title">What is your return policy?</div>
                      <div className="accordion_panel">You can return items within 30 days.</div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion_title">Do you ship internationally?</div>
                      <div className="accordion_panel">Yes, we ship worldwide.</div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion_title">How can I contact customer service?</div>
                      <div className="accordion_panel">You can email us at support@yourbusiness.com.</div>
                    </div>
                  </div>
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

export default Contact;
