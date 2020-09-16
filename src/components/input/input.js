import React from 'react';
import './input.scss';

const Input = ({
  type,
  id,
  name,
  forName,
  text,
  value,
  onChange,
  placeholder,
  error = null,
}) => {
  const hasError = () => {
    if (value) {
      return error && error[name];
    }

    return;
  };

  return (
    <>
      <div className="input__group">
        <label htmlFor={forName} className={`input__group__label`}>
          {text}
        </label>
        <input
          name={name}
          id={id}
          type={type}
          className={`input__group__input ${
            hasError() ? 'input__group__input--error' : ''
          }`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {hasError() ? (
          <label className="input__group__error">{error[name]}</label>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Input;
