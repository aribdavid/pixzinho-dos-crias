/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import SignUpPage from './pages/SignUpPage';
import myContext from './context/myContext';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

function App() {
  const { login, setLogin, setNome } = useContext(myContext);

  const checkUser = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      setLogin(true);
      setNome(user.nome);
    }
  };

  useEffect(() => {
    checkUser();
  });
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/signup" element={login ? <Navigate to="/profile" /> : <SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
