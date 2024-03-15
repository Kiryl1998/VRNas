import React, { ButtonHTMLAttributes } from 'react';
import stylesButton from './ButtonTransparent.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  spanText: string;
}
const ButtonTransparent: React.FC<Props> = ({ spanText, type }) => {
  return (
    <button
      type={type}
      className={[
        stylesButton.button,
        stylesButton.button_transparent,
        'button_2',
      ].join(' ')}
    >
      <span>{spanText}</span>
    </button>
  );
};

export default ButtonTransparent;
