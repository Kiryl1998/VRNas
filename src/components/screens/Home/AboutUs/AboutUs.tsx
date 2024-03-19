import stylesAboutUs from './AboutUs.module.css';
import IMG from '../../../../images/AboutUs/01.webp';
import GLASSES from '../../../../images/AboutUs/glasses.png';
import ButtonGradient from '../../../Button/ButtonGradient';

const AboutUs: React.FC = () => {
  return (
    <section className={stylesAboutUs.aboutUs}>
      <div className={stylesAboutUs.aboutUs__media}>
        <div
          className={[stylesAboutUs.img, stylesAboutUs.gradient_bg].join(' ')}
        >
          <img src={IMG} alt="" />
        </div>
        <div className={stylesAboutUs.img_glasses}>
          <img src={GLASSES} alt="" />
        </div>
      </div>
      <div className={stylesAboutUs.content}>
        <h2 className={stylesAboutUs.title}>ABOUT US</h2>
        <h3 className={["heading_2",stylesAboutUs.second_title].join(' ')}>
          Bring your events to life like never before with our VR services.
        </h3>
        <p className={[stylesAboutUs.description, 'body_1'].join(' ')}>
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </p>
        <ul className={stylesAboutUs.list}>
          <li className={['body_3', stylesAboutUs.item].join(' ')}>
            Cutting-Edge Technology
          </li>
          <li className={['body_3', stylesAboutUs.item].join(' ')}>
            Versatile Applications
          </li>
          <li className={['body_3', stylesAboutUs.item].join(' ')}>
            Affordable and Accessible
          </li>
        </ul>
        <ButtonGradient textBtn={'read more'} />
      </div>
    </section>
  );
};

export default AboutUs;
