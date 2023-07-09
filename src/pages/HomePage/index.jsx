import { Helmet } from 'react-helmet-async';
import BannerSlider from './BannerSlider/BannerSlider';
import Categories from './Categories/Categories';
import BestProduct from './BestProduct/BestProduct';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const products = useLoaderData();
  return (
    <>
      <Helmet>home page</Helmet>
      <div className='container'>
        <BannerSlider />
        <Categories />
        <BestProduct products={products} />
      </div>
    </>
  );
};

export default HomePage;
