/* eslint-disable react/prop-types */
import React from "react";
import Products from "./Products";
import ProductsCategory from "./ProductsCategory";
import LoadMore from "./LoadMore";
import HeaderBrand from "./HeaderBrand";
import Header from "./Header";

class Index extends React.Component {
  state = {
    category: "all",
    products: [],
    products2: [],
    productNumber:0,
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
    e.preventDefault();
    if (e.target.dataset.type === "all") {
      this.setState({
        products2: this.state.products.slice(0, 8),
      });
    } else {
      const data = this.state.products.filter(
        (product) => product.category === `${e.target.dataset.type}`
      );
      this.setState({
        products2: data,
      });
    }
    this.setState({
      category: e.target.dataset.type,
    });
  };

  LoadMoreButton = () => {
    this.setState({
      category: "all",
      products2: this.state.products,
    });
  };

  headerSearch = (e) => {
    if(this.state.category == "all"){
      this.setState({
      products2: this.state.products.filter((product) =>product.title.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
    }else{
      this.setState({
        products2: this.state.products.filter((product) =>product.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
        product.category == this.state.category
        ),
      });
    }
  };

  changeProductCount = (count) => {
    this.setState({
      productNumber:count,
    })
  }

  render() {
    return (
      <div>
        <Header headerSearch={this.headerSearch} productNumber={this.state.productNumber}/>
        <HeaderBrand />
        <ProductsCategory
          category={this.state.category}
          productCategory={this.productsCategory}
        />
        <Products products={this.state.products2} changeProductCount={this.changeProductCount}/>
        <LoadMore loadButton={this.LoadMoreButton} />
      </div>
    );
  }
}
export default Index;
