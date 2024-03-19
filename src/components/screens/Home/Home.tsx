import VirtualReality from './VirtualReality/VirtualReality';
import stylesHome from './Home.module.css';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import AboutUs from './AboutUs/AboutUs';
import Service from './sectionService/Service';

const Home = () => {
  return (
    <>
      <VirtualReality />
      <WhyChooseUs />
      <AboutUs />
      <Service />
    </>
  );
};

export default Home;
