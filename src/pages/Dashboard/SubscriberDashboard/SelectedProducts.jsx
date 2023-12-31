import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { handleDeleteAction } from './handleDeleteAction';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedProducts = () => {
  const [cart, refetch] = useCart();

  const total = cart?.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    handleDeleteAction(item, refetch);
  };

  return (
    <div className='w-full mt-1'>
      <Helmet>
        <title> selected Products</title>
      </Helmet>
      <section className='h-full my-10'>
        <div>
          <h2 className='text-3xl uppercase text-center my-5 font-bold'>
            my selected Products
          </h2>
        </div>
        <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
          <h3 className='text-3xl'>Total Items: {cart.length}</h3>
          <h3 className='text-3xl'>Total Price: ${total}</h3>
          <button
            className='btn btn-warning btn-sm'
            disabled={cart.length === 0}>
            <Link to='/dashboard/payment'>Checkout</Link>
          </button>
        </div>

        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>item</th>
                <th className='text-center'>Product Name</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src={item.image}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className='text-center'>${item.price}</td>
                  <td className='flex justify-center'>
                    <button
                      onClick={() => handleDelete(item)}
                      className='btn btn-ghost bg-red-600  text-white'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SelectedProducts;
