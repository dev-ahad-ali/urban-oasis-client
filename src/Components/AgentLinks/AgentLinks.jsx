import { NavLink } from 'react-router-dom';

const AgentLinks = () => {
  return (
    <div className='space-y-3'>
      <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>analytics</label>

      <NavLink
        to={'/dashboard/agentProfile'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Agent Profile</span>
      </NavLink>
      <NavLink
        to={'/dashboard/addProperty'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Add Property</span>
      </NavLink>

      <NavLink
        to={'/dashboard/addedProperties'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Added Properties</span>
      </NavLink>
      <NavLink
        to={'/dashboard/offers'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>All Offers</span>
      </NavLink>
      <NavLink
        to={'/dashboard/soldProperties'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Sold Properties</span>
      </NavLink>
    </div>
  );
};

export default AgentLinks;
