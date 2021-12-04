import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

