import React from 'react';
import { Link } from 'react-router-dom';

const BestProduct = () => {
  return (
    <section className='py-10 my-10'>
      <div className='my-10 py-4 text-3xl text-center'>Best Product</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto'>
        <div className='relative group'>
          <img
            src='https://tmart-1.myshopify.com/cdn/shop/products/07_0008426f-f1ab-4aa5-85e0-9d12f6a79e64_grande.jpg?v=1517312753'
            alt=''
            className='w-full'
          />
          <div className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-700 bg-opacity-30 text-white'>
              <Link
                to='/id'
                className='text-xl font-bold mb-2'>
                Product Title
              </Link>
              <p>$ 120.00</p>
            </div>
          </div>
        </div>
        <div className='relative group'>
          <img
            src='https://tmart-1.myshopify.com/cdn/shop/products/07_0008426f-f1ab-4aa5-85e0-9d12f6a79e64_grande.jpg?v=1517312753'
            alt=''
            className='w-full'
          />
          <div className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-700 bg-opacity-30 text-white'>
              <Link
                to='/id'
                className='text-xl font-bold mb-2'>
                Product Title
              </Link>
              <p>$ 120.00</p>
            </div>
          </div>
        </div>
        <div className='relative group'>
          <img
            src='https://tmart-1.myshopify.com/cdn/shop/products/07_0008426f-f1ab-4aa5-85e0-9d12f6a79e64_grande.jpg?v=1517312753'
            alt=''
            className='w-full'
          />
          <div className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-700 bg-opacity-30 text-white'>
              <Link
                to='/id'
                className='text-xl font-bold mb-2'>
                Product Title
              </Link>
              <p>$ 120.00</p>
            </div>
          </div>
        </div>
        <div className='relative group'>
          <img
            src='https://tmart-1.myshopify.com/cdn/shop/products/07_0008426f-f1ab-4aa5-85e0-9d12f6a79e64_grande.jpg?v=1517312753'
            alt=''
            className='w-full'
          />
          <div className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-700 bg-opacity-30 text-white'>
              <Link
                to='/id'
                className='text-xl font-bold mb-2'>
                Product Title
              </Link>
              <p>$ 120.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
