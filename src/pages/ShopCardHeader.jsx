import React from "react";


class ShopCardHeader extends React.Component{
    state = {}

    render(){
        return (
              <header className="header">
        <div className="header-top">
            <div className="header-top__container container">
                <div className="header-top__left">
                    <a href="#" className="header-top__left-link">
                        <img src="https://exam-fourth-month.netlify.app/img/header-top-logo.png" alt="logo"/>
                    </a>
                </div>
                <div className="header-top__right">

                    <a className="header-top__user">
                My Profile
                </a>
                    <a href="#" className="header-top__shop-cart"></a>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="header-bottom__container container">
                <div className="header-bottom__left">
                    <a href="#" className="header-bottom__logo-block">
                        <img src="https://exam-fourth-month.netlify.app/img/Icon.svg" alt="logo"/>
                    </a>
                    <p className="header-bottom__logo-text">E-Comm</p>
                </div>
                <div className="header-bottom__right">
                    <ul className="header-botttom__list">
                        <li className="header-bottom__item">
                            <a className='header-bottom__link' href='/'>Home</a>
                        </li>
                        <li className="header-bottom__item">
                            <a href="#" className="header-bottom__link">Sneackers</a>
                        </li>
                        <li className="header-bottom__item">
                            <a href="#" className="header-bottom__link">Bags</a>
                        </li>
                        <li className="header-bottom__item">
                            <a href="#" className="header-bottom__link">Belt</a>
                        </li>
                        <li className="header-bottom__item">
                            <a href="#" className="header-bottom__link active-link">ShopCart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

        )
    }
}

export default ShopCardHeader;