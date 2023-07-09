import { PropTypes } from 'prop-types';
import { handleAddToCartAction } from '../../shared/handleAddToCart';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';

const BestProductCart = ({ product }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const buyNowHandler = (prod) => {
    handleAddToCartAction(prod, user, refetch, navigate);
  };
  return (
    <div className='relative group w-96'>
      <div className='card w-96 bg-base-100 shadow-xl image-full'>
        <figure className='relative z-10'>
          <img
            src={product.image}
            alt=''
          />
        </figure>
        <div className='card-body absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/50  transition-opacity duration-300 z-20 '>
          <h2 className='card-title'>{product.name}</h2>
          <p>{product.detail.slice(0, 30)}</p>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary'
              onClick={() => buyNowHandler(product)}>
              add to cart
            </button>
            <Link
              className='btn btn-primary'
              to={`shop/${product._id}`}>
              detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
BestProductCart.propTypes = {
  product: PropTypes.object,
};

export default BestProductCart;
