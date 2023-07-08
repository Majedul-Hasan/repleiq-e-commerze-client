import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });

        //
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

        // ..
      });
  };
  return (
    <div className='text-center md:text-left flex items-center gap-5'>
      <label className='mr-1'>Sign in with</label>
      <button
        onClick={handleGoogleSignIn}
        type='button'
        className='mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0px_15px_15px_-5px_#134391]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          className='h-9 w-9'>
          <path
            fill='#78a0cf'
            d='M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z'
          />
          <path
            fill='#f1bc19'
            d='M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z'
          />
          <path
            fill='#cee1f4'
            d='M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z'
          />
          <path
            fill='#f1bc19'
            d='M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z'
          />
          <path
            fill='#78a0cf'
            d='M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z'
          />
          <path
            fill='#fbcd59'
            d='M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z'
          />
          <path
            fill='#78a0cf'
            d='M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z'
          />
          <path
            fill='#fff'
            d='M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z'
          />
          <path
            fill='#f1bc19'
            d='M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z'
          />
          <path
            fill='#fff'
            d='M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z'
          />
          <g>
            <path
              fill='#ea5167'
              d='M35.233,47.447C36.447,40.381,42.588,35,50,35c3.367,0,6.464,1.123,8.968,2.996l6.393-6.885 C61.178,27.684,55.83,25.625,50,25.625c-11.942,0-21.861,8.635-23.871,20.001L35.233,47.447z'
            />
            <path
              fill='#00a698'
              d='M58.905,62.068C56.414,63.909,53.335,65,50,65c-7.842,0-14.268-6.02-14.934-13.689l-8.909,2.97 C28.23,65.569,38.113,74.125,50,74.125c6.261,0,11.968-2.374,16.27-6.27L58.905,62.068z'
            />
            <path
              fill='#48bed8'
              d='M68.5,45.5h-4.189H50.5v9h13.811c-1.073,3.414-3.333,6.301-6.296,8.179l7.245,6.038 c5.483-4.446,8.99-11.233,8.99-18.842c0-1.495-0.142-2.955-0.401-4.375H68.5z'
            />
            <path
              fill='#fde751'
              d='M35,50c0-2.183,0.477-4.252,1.316-6.123l-7.818-5.212c-1.752,3.353-2.748,7.164-2.748,11.21 c0,3.784,0.868,7.365,2.413,10.556L36,55C35.634,53.702,35,51.415,35,50z'
            />
          </g>
          <g>
            <path
              fill='#472b29'
              d='M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925 c5.75,0,11.362,2.005,15.804,5.646l0.576,0.472l-7.327,7.892l-0.504-0.377C56.051,36.688,53.095,35.7,50,35.7 c-7.885,0-14.3,6.415-14.3,14.3S42.115,64.3,50,64.3c5.956,0,11.195-3.618,13.324-9.1L50,55.208l-0.008-10.184l24.433-0.008 l0.104,0.574c0.274,1.503,0.421,2.801,0.421,4.285C74.95,63.633,63.758,74.825,50,74.825z M50,26.325 c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55c0-1.211-0.105-2.228-0.3-3.458H51.192 L51.2,53.8h14.065l-0.286,0.91C62.914,61.283,56.894,65.7,50,65.7c-8.657,0-15.7-7.043-15.7-15.7S41.343,34.3,50,34.3 c3.19,0,6.245,0.955,8.875,2.768l5.458-5.878C60.238,28.048,55.178,26.325,50,26.325z'
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SocialLogin;
