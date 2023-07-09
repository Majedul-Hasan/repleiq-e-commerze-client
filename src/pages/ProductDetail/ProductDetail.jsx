import { Helmet } from 'react-helmet-async';
import BannerComp from '../shared/BannerComp/BannerComp';
import ProductInfo from './ProductInfo';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { handleAddToCartAction } from '../shared/handleAddToCart';

const ProductDetail = () => {
  const product = useLoaderData();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (course) => {
    handleAddToCartAction(course, user, refetch, navigate);
    console.log('object');
  };
  return (
    <>
      <Helmet>
        <title> Product detail</title>
      </Helmet>
      <div className='py-5'>
        {product.error ? (
          <div className='bg-red-100 text-red-700 p-3 '>
            <h2 className='font-bold  text-2xl text-center '>
              {product.error}
            </h2>{' '}
          </div>
        ) : (
          <div className='py-10'>
            <BannerComp pageTitle='product?.name' />
            <h2 className='font-bold  text-3xl text-center text-gray-600 dark:text-blue-200 my-5'>
              {product?.name}
            </h2>
            <ProductInfo
              product={product}
              handleAddToCart={handleAddToCart}
              //   user={user}
            />
          </div>
        )}
      </div>

      {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
          {courses?.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}
        </div> */}
    </>
  );
};

export default ProductDetail;
