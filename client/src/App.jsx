import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Categorybar from "./Components/Categorybar";
import Categories from "./Pages/Categories";

const App = () => {
  return (
    <div className="h-screen w-full  ">
      <Categories/>
    </div>
  );
};

export default App;
