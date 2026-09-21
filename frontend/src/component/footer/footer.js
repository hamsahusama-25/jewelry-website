import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import { BsChatDots } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="containerr">

        {/* Top Section */}

        <div className="footer-top">

          <div className="footer-about">
            <h2 className="logoo">Glamora</h2>

            <p>
              Natural skincare inspired by nature. Discover beauty products
              made with premium ingredients and modern formulas.
            </p>

            <h3>Subscribe Our Newsletter</h3>

            <p className="newsletter-text">
              Receive offers, updates & beauty tips every week.
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>
                <IoSend />
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4>Categories</h4>

            <a href="/">Premium Skincare</a>
            <a href="/">Perfume</a>
            <a href="/">Bundles</a>
            <a href="/">Accessories</a>
            <a href="/">Shop All</a>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>

            <a href="/">FAQ</a>
            <a href="/">Testimonials</a>
            <a href="/">Community</a>
            <a href="/">Refer a Friend</a>
            <a href="/">Sustainability</a>
          </div>

          <div className="footer-links">
            <h4>Useful Links</h4>

            <a href="/">Reviews</a>
            <a href="/">Products</a>
            <a href="/">Accessories</a>
            <a href="/">Shop</a>
            <a href="/">Contact</a>
          </div>

        </div>

        {/* Contact Cards */}

        <div className="footer-contact">

          <div className="contact-card">
            <BsChatDots />
            <div>
              <h5>Having Queries?</h5>
              <p>Support available 24/7</p>
            </div>
          </div>

          <div className="contact-card">
            <FaLocationDot />
            <div>
              <h5>Locate Us</h5>
              <p>New York, USA</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhone />
            <div>
              <h5>Call Us Today</h5>
              <p>+1 123 456 7890</p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope />
            <div>
              <h5>Get In Touch</h5>
              <p>support@glamora.com</p>
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <ul className="footer-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Sale</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          <div className="socials">
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaXTwitter /></a>
            <a href="/"><FaYoutube /></a>
            <a href="/"><FaPinterestP /></a>
          </div>

          <p className="copyright">
            ©2026 Glamora. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;