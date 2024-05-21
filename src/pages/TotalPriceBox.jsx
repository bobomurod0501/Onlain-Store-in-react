/* eslint-disable react/prop-types */
import React from "react";

class TotalPriceBox extends React.Component {
  state = {};

  buyNow = () => {
    this.props.clearLocalStorage()
  }

  render() {
    const{total} = this.props
    // console.log(totalPrice)
    return (
      <div className="container">
        <div className="card1">
          <p>Total price: {total}$</p>
          <button className="btn btn-success" onClick={this.buyNow}>Buy Now</button>
        </div>
      </div>
    );
  }
}
export default TotalPriceBox;
