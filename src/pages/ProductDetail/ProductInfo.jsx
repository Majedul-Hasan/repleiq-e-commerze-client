import { PropTypes } from 'prop-types';
import moment from 'moment';

const ProductInfo = ({ product, handleAddToCart, user }) => {
  return (
    <>
      <div className='grid grid-cols-5 gap-3 '>
        <div className='col-span-2 flex flex-col py-8 '>
          <div>
            <img
              src={
                product?.image ||
                'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              }
              alt=''
            />
          </div>
        </div>
        <div className='col-span-3'>
          <div className='flex justify-between'>
            <p className='py-1 px-4 font-bold bg-violet-200 text-violet-700 w-fit rounded-md'>
              {product.category}
            </p>
          </div>
          <div>
            <p className='mt-4 bg-indigo-200  hover:bg-indigo-800 hover:text-indigo-100 text-indigo-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
              Price: ${product?.price} USD
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className='mt-4 w-full bg-violet-600 disabled:bg-gray-300  disabled:text-gray-600  hover:bg-violet-300 hover:text-violet-700 text-violet-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'
              disabled={
                product?.stock === 0 ||
                user?.role?.role === 'admin' ||
                user?.role?.role === 'instructor'
              }>
              Add To Cart
            </button>
            <p className='mt-4 bg-gray-200  hover:bg-gray-800 hover:text-gray-100 text-gray-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
              Available : ${product?.stock}
            </p>

            <p className='mt-4 bg-gray-200  hover:bg-gray-800 hover:text-gray-100 text-gray-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
              {/* arrived :{moment(product.uploadAt).fromNow()} */} dgd
            </p>
            <div>
              <h3 className='font-bold capitalize py-2 text-center dark:text-blue-200'>
                detail info
              </h3>
              <ul>
                {/* {product?.topic.split(',').map((x, i) => ( */}
                <li>dfhh tr</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductInfo;
