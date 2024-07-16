import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Categorybar from "./Components/Categorybar";
import Categories from "./Pages/Categories";
import Login from './Account/Login'
import Signup from './Account/Signup'


const App = () => {
  return (
    <div className="h-screen w-full overflow-auto no-scrollbar  ">
      {/* <Categories/> */}
      <Login/>
      <Signup/>
    </div>
  );
};

export default App;
