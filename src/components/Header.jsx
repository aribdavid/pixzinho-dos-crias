import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/resources/rsz_logo (1).jpg';
import myContext from '../context/myContext';

export default function Header() {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(myContext);
  const insertData = () => {
    const myCart = JSON.parse(localStorage.getItem('cart'));
    setCart(myCart);
  };

  useEffect(() => {
    insertData();
  });
  return (
    <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">

      <div>
        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
          <img
            height="200"
            width="300"
            src={logo}
            alt="logo"
          />
        </a>
      </div>

      <button type="button" onClick={() => navigate('/cart')} className="relative" aria-label="cart">
        <FontAwesomeIcon className="text-palette-primary w-8 m-auto" icon={faShoppingCart} />
        {
                !cart
                  ? null
                  : (
                    <div
                      className="absolute top-0 right-7 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                    >
                      {cart.length}
                    </div>
                  )
              }
      </button>

    </div>
  );
}
