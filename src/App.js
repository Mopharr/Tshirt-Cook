import React, { useState } from "react";
import "index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "Pages/Index";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Cart from "Pages/Cart/Cart";
import createContext from "Context";
import { AuthProvider } from "contexts/AuthContext";

function App() {
  const [state, setState] = useState({});
  return (
    <>
      <createContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </createContext.Provider>
    </>
  );
}

export default App;
