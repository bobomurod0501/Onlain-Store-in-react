/* eslint-disable react/prop-types */
import React from "react";
import Card from "./Card";

class Products extends React.Component {
  state = {
    newProducts:[],
  };

componentDidMount(){
  const data = JSON.parse(localStorage.getItem("data")) || []
  this.setState({
    newProducts:data,
  })
   this.props.changeProductCount(data.length)
}

  localStorageData = (arr) => {
    this.setState({
      newProducts:arr,
    })
    localStorage.setItem("data", JSON.stringify(arr))
    this.props.changeProductCount(arr.length)
  }
  

  
   

  
  
  render() {
    const { products } = this.props;
    return (
      <div className="wraper container">
        {products.length ? (
          products.map((product, index) => {
            return (
              <Card
                key={index}
                img={product.image}
                name={product.title}
                rate={product.rating.rate}
                price={product.price}
                id={product.id}
                products={products}
                newProducts={this.state.newProducts}
                localStorageData={this.localStorageData}
              />
            );
          })
        ) : (
          <h1>Product is not found😝</h1>
        )}
      </div>
    );
  }
}

export default Products;
