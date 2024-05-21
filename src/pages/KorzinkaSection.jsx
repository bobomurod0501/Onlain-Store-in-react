import React from "react";
import KorzinkaChild from "./KorzinkaChild";
import KorzinkaSectionTitle from "./KorzinkaSectionTitle";
import TotalPriceBox from "./TotalPriceBox"


class KorzinkaSection extends React.Component{
    state = {
        products:[],
        total:0
    }

    componentDidMount(){
        const data = JSON.parse(localStorage.getItem("data")) || []
        let price = 0
        data.forEach((item) => {
             price+=item.price
        })
        this.setState({
            products:data,
            total:price.toFixed(2)
        })

    }

    totalPrice = (value) => {
        this.setState({
            total:(Number(this.state.total) + Number(value)).toFixed(2)
        })
    }

   clearLocalStorage = () => {
    localStorage.clear()

    alert("Xaridingiz uchun rahmat🤑")
    this.setState({
        total:0,
        products:[]

    })
   }
    deleteProduct = (e) => {
        const data = JSON.parse(localStorage.getItem("data"))
        const filtered = data.filter((item) => item.id != e.target.id)
        localStorage.setItem("data", JSON.stringify(filtered))
        this.setState({
            products:filtered || []
        })
        
        
    }
    
    render(){
          return(
            <div>
                <KorzinkaSectionTitle/>
                {this.state.products.map((item, index) => {
                    return(
                        <KorzinkaChild key={index} img={item.img} price={item.price} name={item.name} id={item.id} totalPrice={this.totalPrice} deleteProduct={this.deleteProduct}/>
                    )
                })}
                 <TotalPriceBox total={this.state.total} clearLocalStorage={this.clearLocalStorage} />
            </div>
          );  
    }
}

export default KorzinkaSection;