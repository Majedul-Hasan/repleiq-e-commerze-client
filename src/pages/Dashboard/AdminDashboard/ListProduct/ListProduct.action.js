import axiosInstance from '../../../../util/axiosInstance';
import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';

const token = localStorage.getItem('repleiq-access-token');
const headers = {
  Authorization: `Bearer ${token}`,
};

export const productDelete = (product, refetch) => {
  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/products/${product._id}`, {
            headers,
          })

          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              swalWithBootstrapButtons.fire(
                'Deleted!',
                `${product.name} has been deleted.`,
                'success'
              );
            }
          });
      }
    });
};
