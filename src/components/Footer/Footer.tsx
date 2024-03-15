import stylesFooter from './Footer.module.css';
import LOGO from '../../assets/Logo.png';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGeoAlt } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer className={stylesFooter.footer}>
      <div className={stylesFooter.wrap}>
        <div className={stylesFooter.logo}>
          <img src={LOGO} alt="Logo" />
          <span>VRNas</span>
        </div>
        <div className={stylesFooter.social}>
          <div className={stylesFooter.wrapIcon}>
            <FaGithub className={stylesFooter.icon} />
          </div>
          <div className={stylesFooter.wrapIcon}>
            <FaInstagram className={stylesFooter.icon} />
          </div>
          <div className={stylesFooter.wrapIcon}>
            <FaSquareXTwitter className={stylesFooter.icon} />
          </div>
          <div className={stylesFooter.wrapIcon}>
            <CiYoutube className={stylesFooter.icon} />
          </div>
        </div>
      </div>
      <div className={stylesFooter.wrap}>
        <ul className={stylesFooter.item}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Quicklinks
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link className={stylesFooter.linkbtn} to={''}>Home</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Pricing Plan</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Service</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Blog</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Our Team</Link>
          </li>
        </ul>
        <ul className={stylesFooter.item}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Support
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>About us</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Contact us</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>FAQ</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Tems & Conditions</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}>Privacy Policy</Link>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <Link to={''}></Link>
          </li>
        </ul>
        <ul className={stylesFooter.item}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Need Help?
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <BsGeoAlt />
            <a href="https://www.google.ru/maps/search/Tanjung+Sari+Street+no.48,+Pontianak+City/@-0.0352231,109.2491481,12z/data=!3m1!4b1?entry=ttu">
              Tanjung Sari Street no.48, Pontianak City
            </a>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <HiOutlineMail />
            <a href="mailto:Support@VRNas.com">Support@VRNas.com</a>
          </li>
          <li className={[stylesFooter.link, 'body_1'].join(' ')}>
            <FiPhoneCall /> <a href="tel:+123 456 7890">+123 456 7890</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
