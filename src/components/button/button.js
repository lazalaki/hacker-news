import React from 'react';
import './button.scss';

const Button = ({ onClick, text, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={disabled ? 'button-disabled' : 'button-enabled'}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
