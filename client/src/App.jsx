import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Home />
      {/* <Product/> */}
      <Footer/>
    </div>
  );
};

export default App;
