import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BannerComp from '../../../shared/BannerComp/BannerComp';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ManageOrder = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order');
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;
      return res.data;
    },
  });

  const handleService = (product) => {
    prompt('precessing delivery?');
  };

  return (
    <>
      <Helmet>
        <title>Manage Product </title>
      </Helmet>
      <BannerComp pageTitle='Manage Order' />
      <section className='my-10 py-5'>
        <h3 className='text-3xl font-semibold my-4'>
          Total Products: {products?.length}
        </h3>
        <div className='overflow-x-auto'>
          <table className='table  w-full'>
            <thead>
              <tr>
                <th>#</th>
                <th>transactionId</th>
                <th>date</th>
                <th>email</th>
                <th>status</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <Link>{product.transactionId}</Link>
                  </td>
                  <td>{moment(product.date).format('MMM Do YY')}</td>
                  <td>{product.email}</td>
                  <td>{product.status}</td>

                  <td className='flex items-center'>
                    <button
                      className='mx-1 bg-blue-200  text-blue-700 p-2   rounded-md'
                      onClick={() => handleService(product)}>
                      process delivery
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

export default ManageOrder;
