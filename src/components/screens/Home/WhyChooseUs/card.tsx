import { useState } from 'react';
import stylescard from './card.module.css';
interface Props {
  title: string;
  description: string;
}
const Card: React.FC<Props> = ({ title, description }) => {
  const [active, setActive] = useState(false);

  return (
    <li className={stylescard.item}>
      <h6
        className={[
          stylescard.content_title,
          'heading_8',
          active ? stylescard.activeArrowBtn : null,
        ].join(' ')}
        onClick={() => setActive(!active)}
      >
        {title}
      </h6>
      <div
        className={[
          stylescard.description,
          'body_3',
          !active ? stylescard.description_hiden : '',
        ].join(' ')}
      >
        {description}
      </div>
    </li>
  );
};

export default Card;
