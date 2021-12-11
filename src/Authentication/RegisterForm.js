/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "assets/register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "config/firebase";
import { useNavigate } from "react-router-dom";
import UserContext from "Context";

const RegisterForm = () => {
  const { state, setState } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error code: ${errorCode} error message: ${errorMessage}`);
      });
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
            value={state.fullname}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={state.email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
