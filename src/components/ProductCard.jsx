import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  name, manufacturer, image, preco, id,
}) {
  const navigate = useNavigate();

  const redirectProductDetails = () => {
    navigate(`details/${id}`);
  };

  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <button type="button" onClick={redirectProductDetails}>
        <h4 className="font-bold text-palette-primary font-semibold pb-2 border-b border-gray-200">{name}</h4>
        <img
          className="rounded hover:grow hover:shadow-lg"
          src={image}
          alt={name}
        />
        <div className="pt-3 text-palette-primary flex items-center justify-between">
          <span>
            Marca:
            {' '}
            {manufacturer}
          </span>
          <div />
        </div>
        <p className="pt-1 text-palette-primary font-semibold">
          R$
          {' '}
          {preco.toFixed(2)}
        </p>
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  image: PropTypes.string,
  preco: PropTypes.number,
  id: PropTypes.number,
}.isRequired;
