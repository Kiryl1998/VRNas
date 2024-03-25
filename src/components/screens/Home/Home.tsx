import VirtualReality from './VirtualReality/VirtualReality';
import Service from './sectionService/Service';
import AboutUs from './AboutUs/AboutUs';
import About from './About/About';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <>
      <VirtualReality />
      <About />
      <AboutUs />
      <Service />
      <WhyChooseUs/>
    </>
  );
};

export default Home;
