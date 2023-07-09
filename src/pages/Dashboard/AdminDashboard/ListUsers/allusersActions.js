import axiosInstance from '../../../../util/axiosInstance';
import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';
const token = localStorage.getItem('repleiq-access-token');
const headers = {
  Authorization: `Bearer ${token}`,
};

export const userMakeAdmin = (user, refetch) => {
  axiosInstance
    .patch(`${import.meta.env.VITE_API}/users/${user._id}`, {}, { headers })
    .then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        refetch();
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};
export const handleMakeCustomer = (user, refetch) => {
  axiosInstance
    .patch(
      `${import.meta.env.VITE_API}/users/subs/${user._id}`,
      {},
      { headers }
    )
    .then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        refetch();
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'success',
          title: `${user.name} become customer Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

export const userDelete = (user, refetch) => {
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
          .delete(`${import.meta.env.VITE_API}/users/${user._id}`, {
            headers,
          })

          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              swalWithBootstrapButtons.fire(
                'Deleted!',
                `${user.name} has been deleted.`,
                'success'
              );
            }
          });
      }
    });
};
