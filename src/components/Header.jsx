import React from "react";

class Header extends React.Component {
  state = {};

  HeaderSearchInput = (e) => {
   this.props.headerSearch(e)
  }

  render() {
    return (
      <header>
        <div>
          <div className="header-top">
            <div className="header-top__container container">
              <div className="header-top__left">
                <a href="#" className="header-top__left-link">
                  <img
                    src="https://exam-fourth-month.netlify.app/img/header-top-logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <form className="header-top__search">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search Products"
                  onChange={this.HeaderSearchInput}
                />
              </form>
              <div className="header-top__right">
                <a className="header-top__user">My Profile</a>
                <a className="header-top__shop-cart" href="/shopcart">
                  {" "}
                  <img
                    src="https://exam-fourth-month.netlify.app/img/korzinka.svg"
                    alt=""
                  />
                  <span className="header-top__shop-cart-span">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="header-bottom__container container">
            <div className="header-bottom__left">
              <a href="#" className="header-bottom__logo-block">
                <img
                  src="https://exam-fourth-month.netlify.app/img/Icon.svg"
                  alt="logo"
                />
              </a>
              <p className="header-bottom__logo-text">E-Comm</p>
            </div>
            <div className="header-bottom__right">
              <ul className="header-botttom__list">
                <li className="header-bottom__item">
                  <a href="#" className="header-bottom__link active-link">
                    Home
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a href="#" className="header-bottom__link">
                    Sneackers
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a href="#" className="header-bottom__link">
                    Bags
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a href="#" className="header-bottom__link">
                    Belt
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a className="header-bottom__link" href="/shopcart">
                    ShopCart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
