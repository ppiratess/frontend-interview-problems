import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className='bg-dark-blue fixed h-screen w-64 px-4 py-12 text-white'>
      <NavLink to={'/phone-book'}> Phonebook</NavLink>
    </div>
  );
};

export default Sidebar;
