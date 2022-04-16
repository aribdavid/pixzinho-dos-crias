/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import storeData from '../storeData';

function MyProvider({ children }) {
  const [login, setLogin] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(storeData);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [searchPreview, setSearchPreview] = useState('');

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
