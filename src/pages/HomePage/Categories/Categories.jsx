import React from 'react';
import decor from '../../../assets/decor.jpg';
import basket from '../../../assets/basket.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className='my-10 py-5 '>
      <div className='flex md:flex-row flex-col gap-6  justify-between   mx-auto w-full'>
        <div className='relative flex items-center w-full '>
          <img
            className='w-full'
            src={decor}
            alt=''
          />
          <div className='absolute p-3'>
            <h1 className='uppercase text-2xl font-semibold'>
              New Product Collection
            </h1>
            <Link>SHOP NOW </Link>
          </div>
        </div>
        <div className='relative flex items-center w-full'>
          <img
            className='w-full'
            src={basket}
            alt=''
          />
          <div className='absolute p-3 '>
            <h1 className='uppercase text-2xl font-semibold'>
              Basket Collection
            </h1>
            <Link>SHOP NOW </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
