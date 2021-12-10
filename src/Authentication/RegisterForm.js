/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "assets/register.css";
//import { useAuth } from "contexts/AuthContext";

const RegisterForm = () => {
  //const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(error, loading);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.fullname}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
