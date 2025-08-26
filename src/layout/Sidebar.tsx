import { NavLink } from 'react-router';

const SIDEBAR_PATHS = [
  {
    to: '/phone-book',
    name: 'Phonebook',
  },
  {
    to: '/match-search',
    name: 'Match Search',
  },
];

const Sidebar = () => {
  return (
    <div className='bg-dark-blue fixed h-screen w-64 py-12 text-white'>
      <div className='grid gap-3'>
        {SIDEBAR_PATHS.map((path) => (
          <NavLink
            to={path.to}
            className={({ isActive }) =>
              `px-8 py-2 ${isActive ? 'bg-highlight font-bold text-white' : ''}`
            }
          >
            {path.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
