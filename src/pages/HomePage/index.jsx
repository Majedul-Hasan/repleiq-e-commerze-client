import { Helmet } from 'react-helmet-async';
import BannerSlider from './BannerSlider/BannerSlider';

const HomePage = () => {
  return (
    <>
      <Helmet>home page</Helmet>
      <div className='container'>
        <BannerSlider />
      </div>
    </>
  );
};

export default HomePage;
