import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ title }) {
  return (
    <button type="button">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
}.isRequired;
