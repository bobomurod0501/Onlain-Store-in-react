import React from "react";
import Index from "./components/Index"
import Footer from "./components/Footer"

import SectionBrand from "./components/SectionBrand"


class App extends React.Component{

    state = ({
       
    })

    

    render() {
        return(
           <div>
                <Index />
                <SectionBrand/>
                <Footer />

           </div>
        )
    }
}

export default App;