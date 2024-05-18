/* eslint-disable react/prop-types */
import React from "react";
import Card from "./Card"

class Products extends React.Component{
    state = {}

    render() {
        const{products} = this.props
        console.log(products)
        return(
            <div className="wraper container">
                {products.length ? products.map((product, index) => {
                   return(
                    <Card key={index} img={product.image} name={product.title} rate={product.rating.rate} price={product.price}/>
                   ) 
                }) : <h1>Product is not found😝</h1>}
            </div>
        )
    }
}

export default Products;