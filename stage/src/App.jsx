import Topbar  from "./component/topbar/topbar";
import Home from "./component/home/home";
import About from "./component/about/about";
import Sevice from "./component/service/service";
import Blog from "./component/blog/blog";
import Dentistes from "./component/dentistes/dentistes";
import Portifilo from "./component/Portfilo/portfilo";
import Appointment from "./component/appointment/appointment";
import Shortcode from "./component/shortcode/shortcode";
import './App.css';
import { Route , Routes } from "react-router-dom";
import React, { useRef, useState } from "react";

function App() {
  
  return (
    <div className="App">
      
         <Topbar />
   <div className="contenies">
   <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Sevice />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dentistes" element={<Dentistes />} />
        <Route path="/portifilo" element={<Portifilo />} />
        <Route path="/shortcode" element={<Shortcode />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
  
   </div>
          
         
   
    </div>
  );
}


export default App;
