import LoginForm from "../Authentication/LoginForm";
import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";

const Login = () => {
  return (
    <div>
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
