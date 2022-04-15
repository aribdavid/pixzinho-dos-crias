/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
