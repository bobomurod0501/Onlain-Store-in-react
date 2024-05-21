import React from "react";
import Footer from "../components/Footer";
import SectionBrand from "../components/SectionBrand";
import ShopCardHeader from "./ShopCardHeader";
import KorzinkaSection from "./KorzinkaSection";
class ShopCardPage extends React.Component {
  render() {
    return (
      <div>
        <ShopCardHeader/>
        <KorzinkaSection/>
       
        <SectionBrand />
        <Footer />
      </div>
    );
  }
}

export default ShopCardPage