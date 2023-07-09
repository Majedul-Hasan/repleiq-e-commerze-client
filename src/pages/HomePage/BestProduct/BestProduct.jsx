import BestProductCart from './BestProductCart';

const BestProduct = () => {
  
  return (
    <section className='py-10 my-10'>
      <div className='my-10 py-4 text-3xl text-center'>Best Product</div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto'>
        <BestProductCart />
        <BestProductCart />
        <BestProductCart />
        <BestProductCart />
      </div>
    </section>
  );
};

export default BestProduct;
