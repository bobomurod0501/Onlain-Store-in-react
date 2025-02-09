import React from "react";
import logo from "../images/logo.svg"

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="footer-block">
              <div className="footer-adress">
                <div className="footer-icon-block">
                  <img src={logo} alt="Logo" />
                  <p className="footer-logo-text">E-comm</p>
                </div>
                <a
                  href="mailto:Company@gmail.com"
                  className="footer-adress-link"
                >
                  Company@gmail.com.com
                </a>{" "}
                <br />
                <a href="tel:0643321233" className="footer-adress-link">
                  Phone: (064) 332-1233
                </a>
                <a href="#" className="footer-adress-link">
                  450 Wall Street, USA, New York
                </a>
              </div>

              <ul className="footer-list">
                <li className="footer-item">
                  <h2 className="footer-title">INFORMATION</h2>
                  <ul className="footer-box">
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        New Collection
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        About Store
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer-item">
                  <h2 className="footer-title">FOOTER MENU</h2>
                  <ul className="footer-box">
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Latest News
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Purchase Theme
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer-item">
                  <h2 className="footer-title">USEFUL LINKS</h2>
                  <ul className="footer-box">
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Latest News
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="footer-box-item">
                      <a href="#" className="footer-box-link">
                        Purchase Theme
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="footer-about">
                <h2 className="footer-title">ABOUT THE STORE</h2>
                <p className="footer-about-text">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and layouts and visual mockups.
                </p>
                <a href="#" className="footer-src">
                  www.company.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
