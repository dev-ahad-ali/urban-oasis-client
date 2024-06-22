import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <Advertised />
      <Services />
      <Reviews />
      <NewsLetter />
    </>
  );
};

export default Home;
