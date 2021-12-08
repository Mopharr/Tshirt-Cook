import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart/Cart";
import Context from "./Context";

function App() {
   const [state, setState] = useState({});
  return (
     <Context.Provider value={{ state, setState }}>
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Index />} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/register" element={<Register />} />
           <Route exact path="/cart" element={<Cart />} />
         </Routes>
     </BrowserRouter>
   </Context.Provider>
  );
}

export default App;
