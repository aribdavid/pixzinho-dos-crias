import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ currency, num, numSize }) {
  return (
    <>
      {currency}
      <span className={numSize}>{num}</span>
    </>
  );
}

Price.propTypes = {
  currency: PropTypes.string,
  num: PropTypes.number,
  numSize: PropTypes.number,
}.isRequired;
