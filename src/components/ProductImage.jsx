import React from 'react';
import PropTypes from 'prop-types';

export default function ProductImage({ image }) {
  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <img
          src={image}
          alt="img"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

ProductImage.propTypes = {
  image: PropTypes.string,
}.isRequired;
