/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart/Cart";
import UserContext from "./Context";
import { getAuth } from "firebase/auth";
import app from "./config/firebase";
import Clothing from "Pages/Clothing";

function App() {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    currentUser: "",
    loading: true,
  });

  useEffect(() => {
    const auth = getAuth(app);
    const userData = auth.currentUser;
    if (userData) {
      setState({
        ...state,
        currentUser: userData,
        loading: false,
      })
    };
  }, []);

  return (
    <>
      <UserContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/clothing" element={<Clothing />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
