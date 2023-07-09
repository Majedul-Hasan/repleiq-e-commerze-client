import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import protect from '../assets/Online research_Monochromatic.svg';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import SocialLogin from './shared/SocialLogin';
import { Helmet } from 'react-helmet-async';
import axiosInstance from '../util/axiosInstance';

const SignupPage = () => {
  const [firebaseError, setFirebaseError] = useState(null);
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((response) => {
        console.log(response.user);
        updateUserProfile(data.name, data.image);
        reset();
      })
      .then(() => {
        console.log(data);
        const { name, email, address, phone, image } = data;

        const saveUser = {
          name,
          email,
          address,
          phone,
          image,
          joinAt: Date.now(),
          role: 'subscriber',
        };
        console.log('user profile info updated');
        axiosInstance.post(`${import.meta.env.VITE_API}/users`, saveUser);
        reset();

        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setFirebaseError(errorMessage);

        // ..
      });

    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>signup page</title>
      </Helmet>
      <section className='min-h-screen flex flex-col md:flex-row dark:text-blue-200 justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 py-3 mx-5 md:mx-0 md:my-0'>
        <div className='md:w-1/3 max-w-sm'>
          <img
            alt='Sample image'
            src={protect}
          />
        </div>
        <div className='md:w-1/3 max-w-sm'>
          <SocialLogin />
          <div className='my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
            <p className='mx-4 mb-0 text-center font-semibold text-slate-500'>
              Or
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='dark:text-gray-600 '>
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='text'
              {...register('name', { required: true })}
              placeholder='Your name'
            />
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='text'
              {...register('image', { required: true })}
              placeholder='img url or upload img'
            />

            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 '
              type='email'
              {...register('email', { required: true })}
              placeholder='Email Address'
            />
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='password'
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              placeholder='Password'
            />
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='password'
              placeholder='confirm password'
              {...register('confirm_password', {
                required: true,
                validate: (val) => {
                  if (watch('password') != val) {
                    return 'Your passwords do no match';
                  }
                },
              })}
            />
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='text'
              {...register('address', { required: true })}
              placeholder='Your district, state'
            />
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type='text'
              {...register('phone', { required: true })}
              placeholder='Your phone number'
            />

            <div className='mt-4 flex justify-between font-semibold text-sm'></div>
            <div className='text-center md:text-left'>
              <button
                className='mt-4 bg-blue-500 hover:bg-blue-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'
                type='submit'>
                Register
              </button>
            </div>
          </form>
          <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
            Already have an account?{' '}
            <Link
              className='text-red-600 hover:underline hover:underline-offset-4'
              to='/login'>
              login
            </Link>
          </div>
          {errors.password?.type === 'required' && (
            <p className='text-red-600'>Password is required</p>
          )}
          {errors.image?.type === 'required' && (
            <p className='text-red-600'>
              If you upload photo please click on the url field
            </p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className='text-red-600'>Password must be 6 characters</p>
          )}
          {errors.confirm_password?.type === 'validate' && (
            <p className='text-red-600'>Your passwords do no match</p>
          )}
          {errors.password?.type === 'maxLength' && (
            <p className='text-red-600'>
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className='text-red-600'>
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
          {firebaseError && <p className='text-red-600'>{firebaseError}</p>}
        </div>
      </section>{' '}
    </>
  );
};

export default SignupPage;
