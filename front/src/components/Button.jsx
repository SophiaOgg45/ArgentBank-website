import React from 'react';

const Button = ({ btnText, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {btnText}
  </button>
);

export default Button;
