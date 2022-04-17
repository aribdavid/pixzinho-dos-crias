import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/resources/logo2.png';
import myContext from '../context/myContext';

export default function Header() {
  const navigate = useNavigate();

  const {
    cart, setCart, setSearch, searchPreview, setSearchPreview, nome, login,
  } = useContext(myContext);
  const insertData = () => {
    const myCart = JSON.parse(localStorage.getItem('cart'));
    setCart(myCart);
  };

  useEffect(() => {
    insertData();
  });
  return (
    <div className="flex items-center  h-32 mx-0  my-1 justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-8">

      <div>
        <button
          type="button"
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
          onClick={() => navigate('/')}
        >
          <img
            width="270"
            src={logo}
            alt="logo"
          />
        </button>
      </div>

      <div className="pt-9">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex  items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="O que você está procurando?"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={({ target }) => setSearchPreview(target.value)}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-palette-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-palette-light  hover:shadow-lg focus:bg-palette-light   focus:shadow-lg focus:outline-none focus:ring-0 active:bg-palette-light active:shadow-lg transition duration-150 ease-in-out flex items-end"
              type="button"
              id="button-addon2"
              onClick={() => setSearch(searchPreview)}
            >
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <button type="button" onClick={() => navigate('/signup')} className="relative mx-3" aria-label="cart">
          {
            login && nome !== '' ? (
              <span>
                Olá,
                {' '}
                {nome}
                {' '}
              </span>
            ) : null
          }
          <FontAwesomeIcon className="text-palette-primary w-8 m-auto fa-xl " icon={faUser} />
        </button>
        <button type="button" onClick={() => navigate('/cart')} className="relative" aria-label="cart">
          <FontAwesomeIcon className="text-palette-primary w-8 m-auto fa-5x" icon={faShoppingCart} />
          {
                !cart
                  ? null
                  : (
                    <div
                      className="absolute top-6  right-7 text-xs bg-yellow-300 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                    >
                      {cart.length}
                    </div>
                  )
              }
        </button>
      </div>

    </div>
  );
}
