import React from "react";
import RegisterForm from "../Authentication/RegisterForm";
import Nav from "../components/NavNew";
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
