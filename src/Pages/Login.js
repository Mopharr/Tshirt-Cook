import React, { useContext } from "react";
import Nav from "../components/NavNew";
import Footer from "components/Footer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import Section from "components/Section";



  

const Login = () => {
  const { state, setState } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error code: ${errorCode} error message: ${errorMessage}`);
      });
  };

  
  return (
    <div>
      <Nav />
      <Section />
      <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form className="stupid" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="/" className="social">
              <BsFacebook />
            </a>
            <a href="/" className="social">
              <BsGoogle/>
            </a>
            <a href="/" className="social">
              <BsLinkedin />
            </a>
          </div>
          <span>need an account? <a className="signup" href = '/register'>signUp</a></span>
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
          <div className="forget">
            <div className="forgetCap">
              <input type = 'checkbox' />
              <p>RememberMe</p>
            </div>
            <a href="/">Forgot your password?</a>
          </div>
          <button className="buttons">Sign In</button>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Login;
