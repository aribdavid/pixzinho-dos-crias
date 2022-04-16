/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
