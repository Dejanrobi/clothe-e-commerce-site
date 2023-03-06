import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// CSS
import "./App.css";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route path="/products/:id" element={<Products/>}/>         
            <Route path="/product/:id" element={<Product/>}/>         
          </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
