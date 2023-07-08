import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
