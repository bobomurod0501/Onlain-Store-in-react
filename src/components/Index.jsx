/* eslint-disable react/prop-types */
import React from "react";
import Products from "./Products";
import ProductsCategory from "./ProductsCategory";
import LoadMore from "./LoadMore";
import HeaderBrand from "./HeaderBrand"
import Header from "./Header"



class Index extends React.Component {
  state = {
    products: [],
    products2: [],
  };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return this.setState({
          products: data,
          products2: data.slice(0, 8),
        });
      });
  }

  productsCategory = (e) => {
    e.preventDefault()
    if (e.target.dataset.type === "all") {
      this.setState({
        products2: this.state.products.slice(0, 8),
      });
    }
    if (e.target.dataset.type != "all") {
      const data = this.state.products.filter(
        (product) => product.category === `${e.target.dataset.type}`
      );
      this.setState({
        products2: data,
      });
    }
  };

  LoadMoreButton = () => {
      this.setState({
        products2:this.state.products
      })
  }

  headerSearch = (e) => {
  console.log(this.state.products2)
    this.setState({
      products2:(this.state.products.filter(product => product.title.toLowerCase().includes((e.target.value).toLowerCase())))
    })
  }
  

  render() {
    return (
      <div>
        <Header headerSearch={this.headerSearch}/>
        <HeaderBrand />
        <ProductsCategory productCategory={this.productsCategory} />
        <Products products={this.state.products2} />
        <LoadMore loadButton={this.LoadMoreButton}/>
      </div>
    );
  }
}
export default Index;
