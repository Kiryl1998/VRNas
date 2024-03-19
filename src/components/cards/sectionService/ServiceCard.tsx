import ButtonTransparent from '../../Button/ButtonTransparent';
import stylesServiceCard from './ServiceCard.module.css';
interface Props {
  title: string;
  description: string;
  url: string;
}

const ServiceCard: React.FC<Props> = ({ title, description, url }) => {
  return (
    <div className={stylesServiceCard.wrapCard}>
      <div className={stylesServiceCard.serviceCard}>
        <div>
          <div className={stylesServiceCard.img_service}>
            <img src={url} alt="" />
          </div>
          <div
            className={[
              stylesServiceCard.card_title,
              'heading_7',
              stylesServiceCard.active,
            ].join(' ')}
          >
            {title}
          </div>
        </div>
        <div>
          <div className={stylesServiceCard.description_card}>
            <p className={['body_2', stylesServiceCard.active].join(' ')}>
              {description}
            </p>
            <div className={stylesServiceCard.btnCard}>
              <ButtonTransparent spanText={'LEARN MORE'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
