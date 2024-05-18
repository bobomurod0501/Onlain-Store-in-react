import React from "react";

class ProductsCategory extends React.Component{
    state = {
        category:"All"
    }


    handleValue = (e) => {
        this.props.productCategory(e) 
    }

    render() {
        return(
            <div className="categoriesBox">
                <h1>Best Seller</h1>
                <div className="div">
                    <ul className="ProductsCategoriesBox">
                        <li>
                            <a href="#" data-type="all" onClick={this.handleValue} >All</a>
                        </li>
                        <li>
                            <a href="#" data-type="electronics" onClick={this.handleValue}>Electronics</a>
                        </li>
                        <li>
                            <a href="#" data-type="jewelery" onClick={this.handleValue}>Jewelery</a>
                        </li>
                        <li>
                            <a href="#" data-type="men's clothing" onClick={this.handleValue}>Men`s Clothing</a>
                        </li>
                         <li>
                            <a href="#" data-type="women's clothing" onClick={this.handleValue}>Women` s Clothing</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductsCategory;