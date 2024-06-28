import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Header/elements/home';
import Search from './Header/elements/Search';
import Cart from './Header/elements/cart';
import Offers from './Header/elements/offers';
import Info from './Header/elements/info';
import Help from './Header/elements/help';
import Signin from './Header/elements/signin';
import Header from './Header/header';
import Footer from './Footer/Footer';
import FilterArea from './components/filter_area';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Header/>
       <Routes>
         <Route path="/" element={ <>,<FilterArea/> , <Home/></>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/offers" element={<><FilterArea/> , <Home/></>}/>
         <Route path="/info" element={<Info/>}/>
         <Route path="/help" element={<Help/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/cart" element={<Cart/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
