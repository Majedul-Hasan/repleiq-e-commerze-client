import { useForm } from 'react-hook-form';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';

import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';

import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const UpdateProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: loadedProduct = [], refetch } = useQuery({
    queryKey: ['loadedCourse'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;

      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const { _id, name, category, stock, detail, price, image, status } =
    loadedProduct;

  const onSubmit = (data) => {
    const { name, price, category, stock, detail } = data;
    const updatedProduct = {
      name,
      category,
      stock: parseInt(stock),
      detail,
      price: parseFloat(price),
      image,
      status: 'HOT',
      updatedAt: Date.now(),
    };

    axiosSecure.patch(`/products/${_id}`, updatedProduct).then((data) => {
      console.log('after posting new menu item', data.data);
      if (data.data.modifiedCount > 0) {
        reset();
        swalWithBootstrapButtons.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item updated successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        navigate('/dashboard/admin-home');
      }
    });
  };

  return (
    <div className='w-full px-10 dark:text-blue-200'>
      <div className='py-10'>
        <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200'>
          New Product
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full mb-4 '>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200 '>
              Product Name*
            </span>
          </label>
          <input
            type='text'
            {...register('name', { required: true, maxLength: 120 })}
            defaultValue={name}
            className='input input-bordered w-full '
          />
        </div>

        <div className='flex my-4'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200  '>
                Category*
              </span>
            </label>
            <select
              defaultValue={category}
              {...register('category', { required: true })}
              className='select select-bordered dark:text-black'>
              <option
                className='dark:text-black'
                disabled>
                Pick One
              </option>
              <option className='dark:text-black'>Men</option>
              <option className='dark:text-black'>Women</option>
            </select>
          </div>
          <div className='flex'>
            <div className='form-control w-full ml-4'>
              <label className='label'>
                <span className='label-text font-semibold dark:text-blue-200 '>
                  status*
                </span>
              </label>
              <input
                type='text'
                {...register('status', { required: true })}
                defaultValue={status}
                className='input input-bordered w-full '
              />
            </div>
            <div className='form-control w-full ml-4'>
              <label className='label'>
                <span className='label-text font-semibold dark:text-blue-200 '>
                  Price*
                </span>
              </label>
              <input
                type='number'
                {...register('price', { required: true })}
                defaultValue={price}
                className='input input-bordered w-full '
              />
            </div>
          </div>
        </div>
        <div className='flex my-4'>
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text  dark:text-blue-200 font-semibold'>
                stock*
              </span>
            </label>
            <input
              type='number'
              {...register('stock', { required: true })}
              defaultValue={stock}
              className='input input-bordered w-full '
            />
          </div>
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              {' '}
              Details*
            </span>
          </label>
          <textarea
            {...register('detail', { required: true })}
            className='textarea textarea-bordered h-24'
            defaultValue={detail}></textarea>
        </div>
        <div className='form-control w-full my-4'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              thumbnail*
            </span>
          </label>
          <input
            type='text'
            {...register('image', { required: true })}
            className='file-input file-input-bordered w-full '
            defaultValue={image}
          />
        </div>
        <input
          className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider cursor-pointer'
          type='submit'
          value='Add Product'
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
