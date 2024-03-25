import stylesWhyChooseUs from './WhyChooseUs.module.css';
import IMAGE_HUMAN from '../../../../images/WhyChooseUs/Image.png';
import VIAR_GLASSES from '../../../../images/WhyChooseUs/ViarGlasses.png';
import { useState } from 'react';
import { data } from './dataCard';
import Card from './card';
interface Props {
  // Define props here
}
const WhyChooseUs: React.FC<Props> = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={stylesWhyChooseUs.whyChooseUs}>
      <div className={stylesWhyChooseUs.flexColum}>
        <div>
          <h2 className={stylesWhyChooseUs.title}>WHY CHOOSE US</h2>
          <h3
            className={[stylesWhyChooseUs.second_title, 'heading_2'].join(' ')}
          >
            Why Choose Us for Your VR Needs
          </h3>
          <ul className={stylesWhyChooseUs.list}>
            {data.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </ul>
        </div>
      </div>

      <div className={stylesWhyChooseUs.flexColum}>
        <div className={stylesWhyChooseUs.media}>
          <div className={stylesWhyChooseUs.image}>
            <img src={IMAGE_HUMAN} alt="human" />
          </div>
          <div className={stylesWhyChooseUs.image_viar_glasses}>
            <img src={VIAR_GLASSES} alt="viar glasses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
