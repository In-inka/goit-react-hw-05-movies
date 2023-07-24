import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';

import { ThreeDots } from 'react-loader-spinner';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<ThreeDots color="rgba(65, 88, 136, 1)" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
