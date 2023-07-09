import BannerComp from '../shared/BannerComp/BannerComp';
import ShopCard from '../shared/cards/ShopCard';

const ShopPage = () => {
  return (
    <>
      <section>
        <BannerComp pageTitle='Products' />
        <div className='my-10 py-5'>
          <h2 className='mb-5 py-3 text-2xl font-semibold uppercase text-center'>
            shop from our latest products
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto '>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
