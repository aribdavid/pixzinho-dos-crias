import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import myContext from '../context/myContext';
import ProductForm from '../components/ProductForm';
import ProductImage from '../components/ProductImage';
import GoToMainBtn from '../components/GoToMainBtn';
// import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { data } = useContext(myContext);
  const location = useLocation().pathname.split('/')[2];
  // const item = data.filter((elem) => elem.id === Number(location));

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
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
          handle={data[location - 1].productName}
          mainImg={data[location - 1].image}
        />
      </div>
    </div>

  );
}
