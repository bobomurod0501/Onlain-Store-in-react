/* eslint-disable react/prop-types */
import React from "react";

class Card extends React.Component {
  state = {
    star:[] 
  };

  render() {
    const { img, name, rate,price } = this.props;
    for(let i = 0; i < 5; i++){
      if(i < Math.round(rate)){
        this.state.star.push("https://exam-fourth-month.netlify.app/img/star.svg")
      }else{
        this.state.star.push("https://exam-fourth-month.netlify.app/img/unset-star.svg")
      }
    }
    return (
      <div className="card">
        <img className="ProductImg" src={img} alt="" />
        <div className="ProductsData">
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="PriceBox">
            <p className="currentPrice">{(price-price*24/100).toFixed(2)}$</p>
            <p className="PriviousPrice">{price}$</p>
            <p className="skidka">24%</p>
          </div>
          <div className="starBox">
            <img src={this.state.star[0]} alt="" />
            <img src={this.state.star[1]} alt="" />
            <img src={this.state.star[2]} alt="" />
            <img src={this.state.star[3]} alt="" />
            <img src={this.state.star[4]} alt="" />
          </div>
          <div className="korzinHeart">
            <img
              src="https://exam-fourth-month.netlify.app/img/hearts.svg" className="heart"
              alt=""
            />
            <img
              src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" className="korzin"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
