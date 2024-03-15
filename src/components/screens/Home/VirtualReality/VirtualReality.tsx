import stylesVirtualReality from './VirtualReality.module.css';
import player from '../../../../images/VirtualReality/kaka_clipdrop-relight_1.png';
import men from '../../../../images/VirtualReality/men.png';
import ButtonGradient from '../../../Button/ButtonGradient';
import client_1 from '../../../../images/VirtualReality/Ellipse_34.png';
import client_2 from '../../../../images/VirtualReality/Ellipse_35.png';
import client_3 from '../../../../images/VirtualReality/Ellipse_36.png';

const VirtualReality = () => {
  return (
    <section className={stylesVirtualReality.VirtualReality}>
      <div className={stylesVirtualReality.wrap}>
        <h1 className={[stylesVirtualReality.title, 'heading_1'].join(' ')}>
          Immerse Yourself in Virtual Reality
        </h1>
        <div className={stylesVirtualReality.description}>
          <p className="body_1">
            Experience Unforgettable Events in VR. Bring your events to life
            like never before with our VR services
          </p>
        </div>
        <ButtonGradient textBtn={'discover more'} />
        <div
          className={[
            stylesVirtualReality.wrap,
            stylesVirtualReality.happyClient,
          ].join(' ')}
        >
          <div className={stylesVirtualReality.wrapHappyClients}>
            <ul className={stylesVirtualReality.client_item}>
              <li className={stylesVirtualReality.client_list}>
                <img src={client_1} alt="client_1" />
              </li>
              <li className={stylesVirtualReality.client_list}>
                <img src={client_2} alt="client_2" />
              </li>
              <li className={stylesVirtualReality.client_list}>
                <img src={client_3} alt="client_3" />
              </li>
            </ul>
            <div className={stylesVirtualReality.client_text}>
              <span className={stylesVirtualReality.underline}>32+</span>
              HappyClient
            </div>
          </div>
          <div className={stylesVirtualReality.player}>
            <img src={player} alt="player" />
          </div>
        </div>
      </div>
      <div className={stylesVirtualReality.wrapMenImg}>
        <img className={stylesVirtualReality.men} src={men} alt="men" />
      </div>
    </section>
  );
};

export default VirtualReality;
