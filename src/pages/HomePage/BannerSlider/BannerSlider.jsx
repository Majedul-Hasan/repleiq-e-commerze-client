import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerSlider = () => {
  return (
    <Carousel infiniteLoop={true}>
      <div className='max-h-[75vh] max-w-full bg-sky-300  flex justify-between items-center text-black'>
        <div className=' flex-1'>
          <img
            className='h-full absolute left-0'
            src='https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
        </div>
      </div>
      <div className='max-h-[75vh] max-w-full bg-gray-400  flex justify-between items-center text-black'>
        <div className=' flex-1'>
          <img
            className='h-full'
            src='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
        </div>
      </div>
      <div className='max-h-[75vh] max-w-full bg-gray-400  flex justify-between items-center text-black'>
        <div className=' flex-1'>
          <img
            className='h-full'
            src='https://images.unsplash.com/photo-1561052967-61fc91e48d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
        </div>
      </div>
      <div className='max-h-[75vh] max-w-full bg-gray-400  flex justify-between items-center text-black  '>
        <div className=' flex-1 bg-transparent'>
          <img
            className=' h-full  '
            src='https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80'
            alt=''
          />
        </div>
      </div>
    </Carousel>
  );
};

export default BannerSlider;
