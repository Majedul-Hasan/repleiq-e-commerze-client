import { Helmet } from 'react-helmet-async';
import BannerComp from '../shared/BannerComp/BannerComp';
import ShopCard from '../shared/cards/ShopCard';
import { useLoaderData } from 'react-router-dom';

const ShopPage = () => {
  const products = useLoaderData();
  return (
    <>
      <Helmet>
        <title>products</title>
      </Helmet>
      <section>
        <BannerComp pageTitle='Products' />
        <div className='my-10 py-5'>
          <h2 className='mb-5 py-3 text-2xl font-semibold uppercase text-center'>
            shop from our latest products
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto '>
            {products?.map((product) => (
              <ShopCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
