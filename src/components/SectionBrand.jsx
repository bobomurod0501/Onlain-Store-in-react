import React from "react";


class SectionBrand extends React.Component{
    state = {};

    render(){
        return (
            <div className="SectionImgs">
                <div  >
                    <img src="https://exam-fourth-month.netlify.app/img/free-1.svg" alt="" />
                    <h4>FREE SHIPPING</h4>
                </div>
                <div>
                    <img src="https://exam-fourth-month.netlify.app/img/free-2.svg" alt="" />
                    <h4>100% REFUND</h4>
                </div>
                <div>
                    <img src="https://exam-fourth-month.netlify.app/img/free-3.svg" alt="" />
                    <h4>SUPPORT 24/7</h4>
                </div>
            </div>
        )
    }
}

export default SectionBrand;