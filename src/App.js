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
import { commerce } from "Commerce";

function App() {
  // const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    currentUser: "",
    test: [
      {
        id: 1,
        name: "quadri",
      },
      {
        id: 2,
        name: "mubash",
      },
    ],
    loading: true,
    cart: [],
  });

  useEffect(() => {
    const auth = getAuth(app);
    const userData = auth.currentUser;
    if (userData) {
      setState({
        ...state,
        currentUser: userData,
        // loading: false,
      });
    }
  }, []);

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setState({ ...state, cart: cart });
  };

  const updateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setState({ ...state, cart: cart });
  };

  const removeCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setState({ ...state, cart: cart });
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setState({ ...state, cart: cart });
  };

  useEffect(() => {
    let subscribe = false;
    commerce.cart.retrieve().then((cart) => {
      if (!subscribe) {
        setState({ ...state, cart: cart, loading: false });
      }
    });
    return () => {
      subscribe = true;
    };
  }, []);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(product);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
        addToCart,
        updateCartQty,
        removeCart,
        emptyCart,
        product,
      }}
    >
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
  );
}

export default App;
