/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function MyProvider({ children }) {
  const [login, setLogin] = useState([]);
  const [filter, setFilter] = useState([]);

  const state = {
    login,
    setLogin,
    filter,
    setFilter,
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
