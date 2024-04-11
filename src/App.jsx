import { useState } from "react";

import "./App.css";
import HomePage from "./components/home";
import SignIn from "./components/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Route correctly
import Dashboard from "./components/dashboard/dashboard";
import ProductCard from "./components/cart/productcard";
import Cart from "./components/cart/cart";
import MobileLanding from "./components/mobile-landing/mobilelanding";
import WebLanding from "./components/landing/landing";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileLanding />} />
          <Route path="/web" element={<WebLanding />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
