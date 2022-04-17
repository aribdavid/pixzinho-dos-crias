import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';

export default function CartTable() {
  const navigate = useNavigate();
  const {
    cart, setCart, total, setTotal,
  } = useContext(myContext);

  const removeItem = (position) => {
    const removedItemArray = cart.filter((elem, index) => index !== position);
    setCart(removedItemArray);
    localStorage.setItem('cart', JSON.stringify(removedItemArray));
  };
  const handleCart = () => {
    if (cart) {
      setTotal(cart.reduce((acc, elem) => acc + (elem.preco * elem.quantidade), 0));
    }
  };
  useEffect(() => {
    handleCart();
  }, [cart]);

  return (
    <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Produto</th>
            <th className="font-primary font-normal px-6 py-4">Quantidade</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Preço Unid.</th>
            <th className="font-primary font-normal px-6 py-4">Remover</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {cart && cart.map((item, index) => (
            <tr key={Number(index)} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={item.image}
                  alt="imagem"
                  height={64}
                  width={64}
                  className="hidden sm:inline-flex"
                />
                <button type="button" className="pt-1 hover:text-palette-dark" onClick={() => navigate(`/details/${item.id}`)}>
                  {item.productName}
                  ,
                  {' '}
                  {item.ProductName}
                </button>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  defaultValue={item.quantidade}
                  onChange={() => 'HandleFinalQtd(index)'}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <p className="pt-1 text-gray-900">
                  R$
                  {' '}
                  {item.preco.toFixed(2)}
                </p>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  type="button"
                  aria-label="delete-item"
                  className=""
                  onClick={() => removeItem(index)}
                >
                  <FontAwesomeIcon icon={faTimes} className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                </button>
              </td>
            </tr>
          ))}
          {
            total === 0
              ? null
              : (
                <tr className="text-center">
                  <td />
                  <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                  <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                    <p className="pt-1 text-gray-900">
                      R$
                      {' '}
                      {total.toFixed(2)}
                    </p>
                  </td>
                  <td />
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}

CartTable.propTypes = {
  cart: PropTypes.array,
}.isRequired;
