import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { imgHostingUrl } from '../../../../util/imgHostingUrl';
import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';

const AddProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    // formData.append('image', selectedFile);
    console.log(formData);
    fetch(imgHostingUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, stock, detail } = data;
          const newProduct = {
            name,
            category,
            stock: parseInt(stock),
            detail,
            price: parseFloat(price),
            image: imgURL,
            status: 'HOT',
            uploadAt: Date.now(),
          };
          console.log(newProduct);
          axiosSecure.post('/products', newProduct).then((data) => {
            console.log('after posting new Product item', data.data);
            if (data.data.insertedId) {
              reset();
              swalWithBootstrapButtons.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
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
            placeholder='course Name'
            {...register('name', { required: true, maxLength: 120 })}
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
              defaultValue='Pick One'
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
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200 '>
                Price*
              </span>
            </label>
            <input
              type='number'
              {...register('price', { required: true })}
              placeholder='Type here'
              className='input input-bordered w-full '
            />
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
              placeholder='Type here'
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
            placeholder='Bio'></textarea>
        </div>
        <div className='form-control w-full my-4'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              thumbnail*
            </span>
          </label>
          <input
            type='file'
            {...register('image', { required: true })}
            className='file-input file-input-bordered w-full '
            // onChange={(e) => setSelectedFile(e.target.files[0])}
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

export default AddProduct;
