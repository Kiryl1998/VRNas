import { useState } from 'react';
import stylesButton_nav_arrow from './Button_nav_arrow.module.css';
interface Props {}
const Button_nav_arrow: React.FC<Props> = () => {
  const [handleclick, sethandleclick] = useState(false);
  return (
    <button
      onClick={() => sethandleclick(!handleclick)}
      className={[
        stylesButton_nav_arrow.btn_menu_arrow,
        handleclick ? stylesButton_nav_arrow.active : '',
      ].join(' ')}
    ></button>
  );
};

export default Button_nav_arrow;
