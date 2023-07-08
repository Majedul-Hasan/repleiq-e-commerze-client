import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default MainLayout;
