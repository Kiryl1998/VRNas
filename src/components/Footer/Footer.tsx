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
      <div className={stylesFooter.footer_social}>
        <div className={stylesFooter.logo}>
          <img src={LOGO} alt="Logo" />
          <span>VRNas</span>
        </div>
        <div className={stylesFooter.social}>
          <ul className={stylesFooter.social_list}>
            <li className={stylesFooter.social_item}>
              <a
                className={[
                  stylesFooter.social_link,
                  stylesFooter.twitter,
                ].join(' ')}
                href=""
              ></a>
            </li>
            <li className={stylesFooter.social_item}>
              <a
                className={[
                  stylesFooter.social_link,
                  stylesFooter.facebook,
                ].join(' ')}
                href=""
              ></a>
            </li>
            <li className={stylesFooter.social_item}>
              <a
                className={[
                  stylesFooter.social_link,
                  stylesFooter.instagram,
                ].join(' ')}
                href=""
              ></a>
            </li>
            <li className={stylesFooter.social_item}>
              <a
                className={[stylesFooter.social_link, stylesFooter.github].join(
                  ' '
                )}
                href=""
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div className={stylesFooter.footer_contents}>
        <ul className={stylesFooter.list}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Quicklinks
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Home
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Pricing Plan
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Service
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Blog
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Our Team
            </Link>
          </li>
        </ul>
        <ul className={stylesFooter.list}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Support
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              About us
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Contact us
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              FAQ
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Tems & Conditions
            </Link>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}>
              Privacy Policy
            </Link>
          </li>
          <li className={[stylesFooter.v, 'body_1'].join(' ')}>
            <Link className={stylesFooter.link} to={''}></Link>
          </li>
        </ul>
        <ul className={stylesFooter.list}>
          <li className={[stylesFooter.item_title, 'heading_10'].join(' ')}>
            Need Help?
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <BsGeoAlt className={stylesFooter.content_icon} />
            <a
              className={stylesFooter.link}
              href="https://www.google.ru/maps/search/Tanjung+Sari+Street+no.48,+Pontianak+City/@-0.0352231,109.2491481,12z/data=!3m1!4b1?entry=ttu"
            >
              Tanjung Sari Street no.48, Pontianak City
            </a>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <HiOutlineMail className={stylesFooter.content_icon} />
            <a className={stylesFooter.link} href="mailto:Support@VRNas.com">
              Support@VRNas.com
            </a>
          </li>
          <li className={[stylesFooter.item, 'body_1'].join(' ')}>
            <FiPhoneCall className={stylesFooter.content_icon} />
            <a className={stylesFooter.link} href="tel:+123 456 7890">
              +123 456 7890
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
