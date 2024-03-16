import stylesHeader from './Header.module.css';
import LOGO from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import ButtonTransparent from '../Button/ButtonTransparent';
import Button_nav_arrow from '../Button/Button_nav_arrow';

const Header: React.FC = () => {
  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.logo}>
        <img src={LOGO} alt="Logo" />
        <span>VRNas</span>
      </div>
      <nav className={stylesHeader.nav}>
        <ul className={stylesHeader.list}>
          <li className={stylesHeader.item}>
            <Link className={stylesHeader.link} to={'/'}>
              Home
            </Link>
          </li>
          <li className={stylesHeader.item}>
            <Link className={stylesHeader.link} to={'/'}>
              About us
            </Link>
          </li>
          <li className={stylesHeader.item}>
            <Link className={stylesHeader.link} to={'/'}>
              Service
            </Link>
          </li>
          <li className={stylesHeader.item}>
            <Link className={stylesHeader.link} to={'/'}>
              Page
            </Link>
            <Button_nav_arrow />
          </li>
          <li className={stylesHeader.item}>
            <Link className={stylesHeader.link} to={'/'}>
              Blog
            </Link>
            <Button_nav_arrow />
          </li>
        </ul>
      </nav>
      <ButtonTransparent  type={'button'} spanText={'Contact us'} />
    </header>
  );
};

export default Header;
