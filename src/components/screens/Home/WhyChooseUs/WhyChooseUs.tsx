import stylesWhyChooseUs from './WhyChooseUs.module.css';
import IMG_1 from '../../../../images/WhyChooseUs/01.svg';
import IMG_2 from '../../../../images/WhyChooseUs/02.svg';
import IMG_3 from '../../../../images/WhyChooseUs/03.svg';

const WhyChooseUs: React.FC = () => {
  return (
    <section className={stylesWhyChooseUs.whyChooseUs}>
      <div className={stylesWhyChooseUs.wrapCards}>
        <div className={stylesWhyChooseUs.card}>
          <div className={stylesWhyChooseUs.card_img}>
            <img src={IMG_1} alt="img" />
          </div>
          <h2 className={[stylesWhyChooseUs.card_title, 'heading_7'].join(' ')}>
            Expertise
          </h2>
          <div
            className={[stylesWhyChooseUs.card_description, 'body_2'].join(' ')}
          >
            <p className="body_2">
              Our team consists of experienced VR developers, designers, and
              technicians who have a passion for VR and a commitment to
              delivering quality work and give the best service
            </p>
          </div>
        </div>
        <div className={stylesWhyChooseUs.card}>
          <div className={stylesWhyChooseUs.card_img}>
            <img src={IMG_2} alt="img" />
          </div>
          <h2 className={[stylesWhyChooseUs.card_title, 'heading_7'].join(' ')}>
            Customization
          </h2>
          <div
            className={[stylesWhyChooseUs.card_description, 'body_2'].join(' ')}
          >
            <p className="body_2">
              Every client is unique, and we believe every VR experience should
              be too. We'll work with you to create a customized solution that
              meets your specific needs and goals
            </p>
          </div>
        </div>
        <div className={stylesWhyChooseUs.card}>
          <div className={stylesWhyChooseUs.card_img}>
            <img src={IMG_3} alt="img" />
          </div>
          <h2 className={[stylesWhyChooseUs.card_title, 'heading_7'].join(' ')}>
            Service
          </h2>
          <div
            className={[stylesWhyChooseUs.card_description, 'body_2'].join(' ')}
          >
            <p className="body_2">
              We believe in providing exceptional customer service, from initial
              consultation to final delivery. Our goal is to ensure you're
              satisfied with every aspect of your VR experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
