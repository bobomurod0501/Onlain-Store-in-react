import React from "react";
import Index from "../components/Index";
import Footer from "../components/Footer";
import SectionBrand from "../components/SectionBrand";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Index />
        <SectionBrand />
        <Footer />
      </div>
    );
  }
}

export default HomePage