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
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="electronics"
                onClick={this.handleValue}
                className={`${category == "electronics" ? "activeLink" : ""}`}
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                data-type="jewelery"
                onClick={this.handleValue}
                className={`${category == "jewelery" ? "activeLink" : ""}`}
              >
                Jewelery
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
                Men`s Clothing
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
                Women` s Clothing
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsCategory;
