import { Link } from 'react-router-dom';

const ShopCard = () => {
  return (
    <Link>
      <div className='relative group'>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
          <figure className='relative z-10'>
            <img
              src='https://tmart-1.myshopify.com/cdn/shop/products/07_0008426f-f1ab-4aa5-85e0-9d12f6a79e64_grande.jpg?v=1517312753'
              alt='Shoes'
            />
          </figure>
          <div className='card-body absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/50  transition-opacity duration-300 z-20 '>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Add To Cart</button>
              <Link className='btn btn-primary'>view detail</Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
