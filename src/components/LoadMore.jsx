/* eslint-disable react/prop-types */
import React from "react";


class LoadMore extends React.Component{
    state = {}

    LoadButton = () => {
        this.props.loadButton()
    }

    render(){
        return <div className="text-center m-5">
            <button type="button" className="btn btn-primary btn-lg" onClick={this.LoadButton}>Load More</button>
        </div>
    }
}

export default LoadMore;