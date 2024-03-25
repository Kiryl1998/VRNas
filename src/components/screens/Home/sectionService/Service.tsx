import stylesService from './Service.module.css';
import ServiceCard from '../../../cards/sectionService/ServiceCard';
import { cardsService } from '../../../cards/sectionService/data';
import React, { useEffect, useState } from 'react';
interface Props {
  // Define props here
}
const Service: React.FC<Props> = () => {
  return (
    <section className={stylesService.service}>
      <div className={stylesService.topService}>
        <div className={stylesService.titles}>
          <h2 className={[stylesService.firstTitle, 'caption_1'].join(' ')}>
            OUR SERVICE
          </h2>
          <h3 className={'heading_2'}>Our Service</h3>
        </div>
        <div className={stylesService.description}>
          <p className={'body_1'}>
            We use the latest VR hardware and software to create high-quality VR
            experiences that are accessible and affordable. Our goal is to
            provide exceptional customer service and support, and our team is
            always available to answer any questions and address any concerns
            you may have.
          </p>
        </div>
      </div>

      <div className={stylesService.serviceContents}>
        {cardsService.map((card) => (
          <ServiceCard
            key={card.id}
            title={card.title}
            description={card.description}
            url={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
