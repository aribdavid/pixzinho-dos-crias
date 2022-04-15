/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route exact path="/details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
