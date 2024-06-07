import { NavLink } from 'react-router-dom';

const AgentLinks = () => {
  return (
    <div className='space-y-3'>
      <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>
        analytics
      </label>

      <NavLink
        to={'/dashboard/agentProfile'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Agent Profile</span>
      </NavLink>
      <NavLink
        to={'/dashboard/addProperty'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Add Property</span>
      </NavLink>

      <NavLink
        to={'/dashboard/addedProperties'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Added Properties</span>
      </NavLink>
      <NavLink
        to={'/dashboard/offers'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>All Offers</span>
      </NavLink>
      <NavLink
        to={'/dashboard/soldProperties'}
        className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
        href='#'
      >
        <span className='mx-2 text-sm font-medium'>Sold Properties</span>
      </NavLink>
    </div>
  );
};

export default AgentLinks;
