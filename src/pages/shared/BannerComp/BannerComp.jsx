import PropTypes from 'prop-types';

const BannerComp = ({ pageTitle }) => {
  return (
    <div className='carousel w-full h-[350px] my-8'>
      <div className='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          className='w-11/12 rounded-xl ml-auto mr-0'
        />
        <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#4662ef88] to-[#3173ff21] w-full'>
          <div className='text-white space-y-7 ml-24'>
            <h2 className='text-5xl font-bold'>{pageTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerComp.propTypes = {
  pageTitle: PropTypes.string,
};

export default BannerComp;
