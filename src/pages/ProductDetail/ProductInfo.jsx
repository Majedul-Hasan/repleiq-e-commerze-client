import { PropTypes } from 'prop-types';

const ProductInfo = ({ product, handleAddToCart }) => {
  console.log(product);
  return (
    <>
      <div className='grid grid-cols-5 gap-3 '>
        <div className='col-span-2 flex flex-col py-8 '>
          <div>
            <img
              src={product?.image}
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
              Price: ${product?.price} BDT
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className='mt-4 w-full bg-violet-600 disabled:bg-gray-300  disabled:text-gray-600  hover:bg-violet-300 hover:text-violet-700 text-violet-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'>
              Add To Cart
            </button>
            <p className='mt-4 bg-gray-200  hover:bg-gray-800 hover:text-gray-100 text-gray-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
              Available : ${product?.stock}
            </p>

            <div>
              <h3 className='font-bold capitalize py-2 text-center dark:text-blue-200'>
                detail info
              </h3>
              <p>{product.detail}</p>
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
  handleAddToCart: PropTypes.func,
};

export default ProductInfo;
