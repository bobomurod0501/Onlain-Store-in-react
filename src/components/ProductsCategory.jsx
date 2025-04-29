/* eslint-disable react/prop-types */
import React from "react";

class ProductsCategory extends React.Component {
  handleValue = (e) => {
    this.props.productCategory(e);
  };

  render() {
    const { category } = this.props;
    console.log("a", category);
    return (
      <div className="categoriesBox">
        <h1>Best Seller</h1>
        <div className="div">
          <ul className="ProductsCategoriesBox">
            <li>
              <a
                href="#"
                data-type="all"
                onClick={this.handleValue}
                className={`${category == "all" ? "activeLink" : ""}`}
              >
                Hammasi
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="electronics"
                onClick={this.handleValue}
                className={`${category == "electronics" ? "activeLink" : ""}`}
              >
                Elektronikalar
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="jewelery"
                onClick={this.handleValue}
                className={`${category == "jewelery" ? "activeLink" : ""}`}
              >
                Zargarlik buyumlari
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="men's clothing"
                onClick={this.handleValue}
                className={`${
                  category == "men's clothing" ? "activeLink" : ""
                }`}
              >
                Erkaklar kiyimlari
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="women's clothing"
                onClick={this.handleValue}
                className={`${
                  category == "women's clothing" ? "activeLink" : ""
                }`}
              >
                Ayollar kiyimlari
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsCategory;
