import React from 'react';
import PropTypes from 'prop-types';

export default function ProductInfo({ title, description, preco }) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">
        {description}
      </p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        R$
        {' '}
        <span className="text-2xl">{preco}</span>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;
