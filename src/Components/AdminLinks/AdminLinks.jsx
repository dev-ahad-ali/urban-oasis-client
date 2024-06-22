import { NavLink } from 'react-router-dom';

const AdminLinks = () => {
  return (
    <div className='space-y-3'>
      <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>analytics</label>
      <NavLink
        to={'/dashboard/adminProfile'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>AdminProfile</span>
      </NavLink>

      <NavLink
        to={'/dashboard/manageUsers'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Manage Users</span>
      </NavLink>
      <NavLink
        to={'/dashboard/manageProperties'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Manage Properties</span>
      </NavLink>
      <NavLink
        to={'/dashboard/advertiseProperty'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Advertise Property</span>
      </NavLink>
      <NavLink
        to={'/dashboard/manageReviews'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Manage Reviews</span>
      </NavLink>
    </div>
  );
};

export default AdminLinks;
