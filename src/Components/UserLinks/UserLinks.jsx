import { NavLink } from 'react-router-dom';

const UserLinks = () => {
  return (
    <div className='space-y-3'>
      <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>analytics</label>

      <NavLink
        to={'/dashboard/userProfile'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>User Profile</span>
      </NavLink>
      <NavLink
        to={'/dashboard/userWishList'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Wish List</span>
      </NavLink>

      <NavLink
        to={'/dashboard/userPropertyBought'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>Property Bought</span>
      </NavLink>
      <NavLink
        to={'/dashboard/userReviews'}
        className={({ isActive }) =>
          isActive
            ? 'flex transform items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
            : 'flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
        }
      >
        <span className='mx-2 text-sm font-medium'>My Reviews</span>
      </NavLink>
    </div>
  );
};

export default UserLinks;
