import stylesAbout from './About.module.css';
import IMG_1 from '../../../../images/About/01.svg';
import IMG_2 from '../../../../images/About/02.svg';
import IMG_3 from '../../../../images/About/03.svg';

const About: React.FC = () => {
  return (
    <section className={stylesAbout.whyChooseUs}>
      <div className={stylesAbout.wrapCards}>
        <div className={stylesAbout.card}>
          <div className={stylesAbout.card_img}>
            <img src={IMG_1} alt="img" />
          </div>
          <h2 className={[stylesAbout.card_title, 'heading_7'].join(' ')}>
            Expertise
          </h2>
          <div className={[stylesAbout.card_description, 'body_2'].join(' ')}>
            <p className="body_2">
              Our team consists of experienced VR developers, designers, and
              technicians who have a passion for VR and a commitment to
              delivering quality work and give the best service
            </p>
          </div>
        </div>
        <div className={stylesAbout.card}>
          <div className={stylesAbout.card_img}>
            <img src={IMG_2} alt="img" />
          </div>
          <h2 className={[stylesAbout.card_title, 'heading_7'].join(' ')}>
            Customization
          </h2>
          <div className={[stylesAbout.card_description, 'body_2'].join(' ')}>
            <p className="body_2">
              Every client is unique, and we believe every VR experience should
              be too. We'll work with you to create a customized solution that
              meets your specific needs and goals
            </p>
          </div>
        </div>
        <div className={stylesAbout.card}>
          <div className={stylesAbout.card_img}>
            <img src={IMG_3} alt="img" />
          </div>
          <h2 className={[stylesAbout.card_title, 'heading_7'].join(' ')}>
            Service
          </h2>
          <div className={[stylesAbout.card_description, 'body_2'].join(' ')}>
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

export default About;
