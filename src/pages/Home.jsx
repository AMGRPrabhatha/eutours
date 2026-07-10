import Hero from '../components/home/Hero';
import SpecialFeatures from '../components/home/SpecialFeatures';
import WhereToNext from '../components/home/WhereToNext';
import TravelersChoice from '../components/home/TravelersChoice';
import ServicesGrid from '../components/home/ServicesGrid';
import TrendingDestinations from '../components/home/TrendingDestinations';
import OurPackages from '../components/home/OurPackages';
import ComingSoon from '../components/home/ComingSoon';

const SHOW_COMING_SOON = true;

const Home = () => {
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <>
      <Hero />
      <SpecialFeatures />
      <WhereToNext />
      <TravelersChoice />
      <ServicesGrid />
      <TrendingDestinations />
      <OurPackages />
    </>
  );
};

export default Home;
