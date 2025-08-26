import { Outlet, ScrollRestoration } from 'react-router';

import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <main className='ml-64 p-8'>
        <ScrollRestoration />
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
