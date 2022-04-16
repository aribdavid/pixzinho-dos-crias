import React, { useState, useContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import myContext from '../context/myContext';

export default function ProductForm({
  title, mainImg, preco,
}) {
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useContext(myContext);

  const insertData = () => {
    const myCart = JSON.parse(localStorage.getItem('cart'));
    setCart(myCart);
  };

  useEffect(() => {
    insertData();
  });

  function handleAddToCart() {
    const myCart = JSON.parse(localStorage.getItem('cart'));
    if (myCart) {
      localStorage.setItem('cart', JSON.stringify([...myCart, {
        productName: title,
        image: mainImg,
        quantidade: quantity,
        preco,
      }]));
    } else {
      localStorage.setItem('cart', JSON.stringify([{
        productName: title,
        image: mainImg,
        quantidade: quantity,
        preco,
      }]));
    }
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('');
    }
    setQuantity(Math.floor(e));
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <span className="text-gray-500 text-base">Qty.</span>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            defaultValue={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
      </div>
      <button
        className="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
        justify-center items-baseline  hover:bg-palette-dark"
        type="button"
        aria-label="cart-button"
        onClick={() => {
          handleAddToCart();
          insertData();
        }}
      >
        Adicionar ao Carrinho
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
      </button>
    </div>
  );
}

ProductForm.propTypes = {
  title: Proptypes.string,
  mainImg: Proptypes.string,
  preco: Proptypes.number,
}.isRequired;
