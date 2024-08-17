import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Header/elements/home";
import Search from "./Header/elements/Search";
import Cart from "./Header/elements/cart";
import Info from "./Header/elements/info";
import Help from "./Header/elements/help";
import Signin from "./Header/elements/signin";
import Header from "./Header/header";
import Footer from "./Footer/Footer";
import FilterArea from "./components/filter_area";
import Signup from "./Header/elements/signup";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={ <> <Search/> , <FilterArea/> , <Home/> ,<Help/> </>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/offers" element={<><FilterArea/> , <Home/></>}/>
         <Route path="/info" element={<Info/>}/>
         <Route path="/help" element={<Help/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
