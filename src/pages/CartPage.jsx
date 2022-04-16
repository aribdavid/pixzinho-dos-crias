import React from 'react';
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
        <GoToMainBtn />
      </div>
    </div>
  );
}
