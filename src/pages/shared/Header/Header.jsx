import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useCart from '../../../hooks/useCart';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Header = () => {
  const [cart] = useCart();
  const [pendingNumber, setPendingNumber] = useState();
  const [axiosSecure] = useAxiosSecure();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [role] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (role?.role === 'admin') {
      axiosSecure
        .get(`${import.meta.env.VITE_API}/order/pending`)
        .then((data) => {
          console.log(data);
          setPendingNumber(data.data.pending);
        });
    }
  }, [role, axiosSecure]);
  const navOptions = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>shop</NavLink>
      </li>
      <li>
        {role?.role === 'admin' ? (
          <NavLink to='/dashboard/manage-order'>
            <span>
              Dashboard{' '}
              <span className='absolute -top-1 badge bg-amber-500'>
                {pendingNumber}
              </span>
            </span>
          </NavLink>
        ) : role?.role === 'subscriber' ? (
          <NavLink to='/dashboard/user-home'>Dashboard</NavLink>
        ) : null}
      </li>
      <li>
        <NavLink to='/dashboard/selected-products'>
          <div>
            <p className='mt-1'>
              <FaShoppingCart></FaShoppingCart>
            </p>
            <span className='absolute -top-1 -right-2 badge bg-amber-500'>
              {cart?.length || 0}
            </span>
          </div>
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to='/profile'>{user?.displayName}</NavLink>
          </li>
          <li className='flex items-center'>
            <span onClick={handleLogOut}>LogOut</span>
          </li>
        </>
      ) : (
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl'>
            {navOptions}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-2xl font-bold'>repleIQ</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
      </div>
    </div>
  );
};

export default Header;
