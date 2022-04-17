/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import SignUpPage from './pages/SignUpPage';
import myContext from './context/myContext';
import ProfilePage from './pages/ProfilePage';

function App() {
  const { login } = useContext(myContext);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/signup" element={login ? <Navigate to="/profile" /> : <SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
