import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import BannerComp from '../../../shared/BannerComp/BannerComp';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const ListProduct = () => {
  const handleDelete = () => {
    //    userDelete(user, refetch);
  };

  const products = useLoaderData() || [];
  console.log(products);
  return (
    <>
      <Helmet>
        <title>Manage Product </title>
      </Helmet>
      <BannerComp pageTitle='Manage Product' />
      <section className='my-10 py-5'>
        <h3 className='text-3xl font-semibold my-4'>
          Total Products: {products?.length}
        </h3>
        <div className='overflow-x-auto'>
          <table className='table  w-full'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>image</th>
                <th>category</th>
                <th>stock</th>
                <th>price</th>
                <th>detail</th>
                <th>status</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <Link to={`/shop/${product._id}`}>{product.name}</Link>
                  </td>
                  <td>
                    <img
                      className='w-16'
                      src={product.image}
                      alt=''
                    />
                  </td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td>{product.detail}</td>
                  <td>{product.status}</td>

                  <td className='flex items-center'>
                    <Link
                      to={`/dashboard/update-product/${product._id}`}
                      className='mx-1 bg-green-200 text-xl  text-green-700   disabled:bg-gray-200 p-1   rounded-md'>
                      <FiEdit />
                    </Link>

                    <button
                      className='mx-1 bg-red-200  text-red-700 p-2 dark:bg-red-700 dark:text-red-200 rounded-md'
                      onClick={() => handleDelete(product)}>
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      ;
    </>
  );
};

export default ListProduct;
