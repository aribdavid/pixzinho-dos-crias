import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductInfo from '../components/ProductInfo';
import myContext from '../context/myContext';
import ProductForm from '../components/ProductForm';
import ProductImage from '../components/ProductImage';
import GoToMainBtn from '../components/GoToMainBtn';

export default function ProductDetails() {
  const { data, cart } = useContext(myContext);
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/')[2];

  return (
    <div className="flex flex-col pt-10 justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <ProductImage image={data[location - 1].image} />
      <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
        <GoToMainBtn />
        <ProductInfo
          title={data[location - 1].productName}
          description={data[location - 1].manufacturer}
          preco={data[location - 1].preco}
        />
        <ProductForm
          title={data[location - 1].productName}
          mainImg={data[location - 1].image}
          preco={data[location - 1].preco}
        />
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
