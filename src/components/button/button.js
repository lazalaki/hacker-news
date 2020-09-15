import React from 'react';
import './button.scss';

const Button = ({ onClick, disabled, text }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
