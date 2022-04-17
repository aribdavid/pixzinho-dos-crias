import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import GoToMainBtn from '../components/GoToMainBtn';
import CartTable from '../components/CartTable';

export default function CartPage() {
  return (
    <div className="container bg-palette-light mx-auto mb-20 min-h-screen">
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        Seu Carrinho
      </h1>
      <CartTable />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <button
          className="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
        justify-center items-center  hover:bg-palette-secondary"
          type="button"
          aria-label="cart-button"
        >
          Finalizar Compra
          <FontAwesomeIcon icon={faCreditCard} className=" w-5 ml-2" />
        </button>
        <GoToMainBtn />
      </div>
    </div>
  );
}
