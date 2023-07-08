import { Helmet } from 'react-helmet-async';
import BannerSlider from './BannerSlider/BannerSlider';
import Categories from './Categories/Categories';

const HomePage = () => {
  return (
    <>
      <Helmet>home page</Helmet>
      <div className='container'>
        <BannerSlider />
        <Categories />
      </div>
    </>
  );
};

export default HomePage;
