/* eslint-disable react/prop-types */
import React from "react";
// import { MdDelete } from "react-icons/md";
import deleteIcon from "../images/deleteIcon.png"

class KorzinkaChild extends React.Component {
  state = {
    number: 1,
  };


  decNumber = () => {
    if(this.state.number != 1){
        this.setState({
          number: this.state.number-1,
        });
        this.props.totalPrice(-1*this.props.price)
    }else{
        this.setState({
          number:1,
        })
    }
  };

  incNumber = () => {
    this.setState({
      number: this.state.number+1,
    });
    this.props.totalPrice(this.props.price)
  }

  deleteProduct = (e) => {
    this.props.deleteProduct(e)
    this.props.totalPrice(-1*(this.state.number*this.props.price))
  }


  render() {

    const {img, price, name, id} = this.props;
    return (
      <div className="container">
        <table className="table">
          <tbody>
            <tr className="box">
              <th scope="row">
                <div className="productImgDel">
                  <img
                    src={deleteIcon}
                    className="daleteImg"
                    id={id}
                    onClick={this.deleteProduct}
                    alt=""
                  />
                  <img src={img} className="ProductsImg" alt="" />
                  <p className="ProductName">{name}</p>
                </div>
              </th>
              <td>{price}💲</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.decNumber}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-light">
                    {this.state.number}
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.incNumber}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>{(this.state.number * price).toFixed(2)}💲</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default KorzinkaChild;

{
  /* <div className="container">
        <div className="productBox1">
          <div className="productImgDel">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENxd4hjhBy9Tp7OkkH8nU_u2j8jLSq0Fxbw&s"
              className="daleteImg"
              alt=""
            />
            <img src={img} className="ProductsImg" alt="" />
            <p className="ProductName">{name}</p>
          </div>
          <div className="CountBox1">
            <p>{price}💲</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-secondary" onClick={this.decNumber}>
                -
              </button>
              <button type="button" className="btn btn-light">
                {this.state.number}
              </button>
              <button type="button" className="btn btn-info">
                +
              </button>
            </div>
            <p>1556💲</p>
          </div>
        </div>
      </div> */
}
