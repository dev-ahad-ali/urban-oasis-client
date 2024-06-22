import { NavLink } from 'react-router-dom';

const AdminLinks = () => {
  return (
    <div className='space-y-3'>
      <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>analytics</label>
      <NavLink
        to={'/dashboard/adminProfile'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>AdminProfile</span>
      </NavLink>

      <NavLink
        to={'/dashboard/manageUsers'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Manage Users</span>
      </NavLink>
      <NavLink
        to={'/dashboard/manageProperties'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Manage Properties</span>
      </NavLink>
      <NavLink
        to={'/dashboard/advertiseProperty'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Advertise Property</span>
      </NavLink>
      <NavLink
        to={'/dashboard/manageReviews'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Manage Reviews</span>
      </NavLink>
    </div>
  );
};

export default AdminLinks;
