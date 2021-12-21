import React from "react";
import RegisterForm from "../Authentication/RegisterForm";
import Nav from "../components/Nav";
import Footer from 'components/Footer'

const Register = () => {
  return (
    <div>
      <Nav />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
