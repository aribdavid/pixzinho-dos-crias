/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import storeData from '../storeData';

function MyProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(storeData);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [searchPreview, setSearchPreview] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const state = {
    login,
    setLogin,
    filter,
    setFilter,
    data,
    setData,
    cart,
    setCart,
    total,
    setTotal,
    search,
    setSearch,
    searchPreview,
    setSearchPreview,
    nome,
    setNome,
    sobrenome,
    setSobrenome,
    email,
    setEmail,
    senha,
    setSenha,
  };
  return (
    <myContext.Provider value={state}>
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
