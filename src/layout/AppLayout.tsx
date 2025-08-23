import { Outlet } from 'react-router';

import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <main className='ml-64 p-8'>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
