import React from "react";
import free1 from "../images/free-1.svg"
import free2 from "../images/free-2.svg"
import free3 from "../images/free-3.svg";


class SectionBrand extends React.Component{
    state = {};

    render(){
        return (
          <div className="SectionImgs">
            <div>
              <img  src={free1} alt="" />
              <h4>FREE SHIPPING</h4>
            </div>
            <div>
              <img src={free2} alt="" />
              <h4>100% REFUND</h4>
            </div>
            <div>
              <img  src={free3} alt="" />
              <h4>SUPPORT 24/7</h4>
            </div>
          </div>
        );
    }
}

export default SectionBrand;