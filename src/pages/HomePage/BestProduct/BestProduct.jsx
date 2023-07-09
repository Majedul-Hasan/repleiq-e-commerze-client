import { PropTypes } from 'prop-types';
import BestProductCart from './BestProductCart';

const BestProduct = ({ products }) => {
  return (
    <section className='py-10 my-10'>
      <div className='my-10 py-4 text-3xl text-center'>Best Product</div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto'>
        {products.map((x, i) => {
          if (i < 4)
            return (
              <BestProductCart
                key={x._id}
                product={x}
              />
            );
          return;
        })}
        {/*        
        <BestProductCart />
        <BestProductCart />
        <BestProductCart /> */}
      </div>
    </section>
  );
};

BestProduct.propTypes = {
  products: PropTypes.array,
};

export default BestProduct;
