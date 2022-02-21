/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Checkout from "components/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import UserContext from "./Context";
import { getAuth } from "firebase/auth";
import Clothing from "Pages/Clothing";
import Details from "Pages/Details";
import { commerce } from "Commerce";
import AddDesign from "components/Design/AddDesign";
import Check from "Pages/Check";
import Gift from "Pages/Gift";
import Shop from "Pages/Shop";
import CheckoutForm from 'Pages/CheckoutForm'

function App() {
  const [product, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [cart, setCart] = useState({});
  const [category, setCategory] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    currentUser: "",
    loading: true,
  });

  console.log(state.cart);
  console.log("categories", category);

  useEffect(() => {
    const auth = getAuth();
    const userData = auth.currentUser;
    if (userData) {
      setState({
        ...state,
        currentUser: userData,
        //loading: false,
      });
    }
  }, []);

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const updateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const removeCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const fetchCart = async () => {
    await commerce.cart.retrieve().then((cart) => {
      setCart(cart);
      setState({ ...state, loading: false });
    });
  };

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  const fetchSingleProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    setSingleProduct((response && response) || []);
  };

  const fetchProductsByCategory = async (cat_id) => {
    const response = await commerce.products.list({
      category_id: [cat_id]
    });
    setProduct((response && response.data) || []);
  };

  const fetchProductsByQuery = async (q) => {
    const response = await commerce.products.list({
      query: [q]
    });
    setProduct((response && response.data) || []);
  };

  const fetchCategory = async () => {
    const response = await commerce.categories.list();
    setCategory((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategory();
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
        cart,
        order,
        errorMessage,
        handleCaptureCheckout,
        category,
        fetchProductsByCategory,
        fetchProductsByQuery,
        fetchSingleProduct,
        singleProduct,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/clothing" element={<Clothing />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/checkout" element={<Checkout cart={cart} />} />
          <Route exact path="/design" element={<AddDesign />} />
          <Route exact path="/check" element={<Check />} />
          <Route exact path="/gift" element={<Gift />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/checkoutform" element={<CheckoutForm />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
