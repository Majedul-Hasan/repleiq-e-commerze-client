import { Helmet } from 'react-helmet-async';
import BannerSlider from './BannerSlider/BannerSlider';
import Categories from './Categories/Categories';
import BestProduct from './BestProduct/BestProduct';

const HomePage = () => {
  return (
    <>
      <Helmet>home page</Helmet>
      <div className='container'>
        <BannerSlider />
        <Categories />
        <BestProduct />
      </div>
    </>
  );
};

export default HomePage;
