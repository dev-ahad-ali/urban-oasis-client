import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { FaHome } from 'react-icons/fa';
import { IoExit } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import useRole from '../../../Hooks/useRole';

const SideMenu = ({ open, closeSideMenu, user, logout }) => {
  const { userRole } = useRole();
  return (
    <Drawer open={open} onClose={closeSideMenu} className='bg-offWhite'>
      <div className='mb-2 flex items-center justify-between p-4'>
        <Typography variant='h5' color='blue-gray' className='font-title uppercase'>
          Urban Oasis
        </Typography>
        <IconButton variant='text' color='red' onClick={closeSideMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </IconButton>
      </div>
      <List>
        <NavLink
          to={`/dashboard/${userRole === 'admin' ? 'adminProfile' : userRole === 'agent' ? 'agentProfile' : 'userProfile'}`}
        >
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z'
                  clipRule='evenodd'
                />
              </svg>
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </NavLink>
        <NavLink to={'/'}>
          <ListItem>
            <ListItemPrefix>
              <FaHome />
            </ListItemPrefix>
            Home
          </ListItem>
        </NavLink>
        <NavLink to={'/allProperties'}>
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z'
                  clipRule='evenodd'
                />
              </svg>
            </ListItemPrefix>
            All Properties
          </ListItem>
        </NavLink>
      </List>
      {user && (
        <div className='flex min-h-full flex-col justify-center'>
          <div className='mt-44 h-fit w-full'>
            <Button
              onClick={logout}
              variant='text'
              className='flex w-full items-center justify-between gap-2 rounded-none border-t-2 border-customBlack font-title text-lg font-bold'
            >
              Logout
              <IoExit className='text-3xl' />
            </Button>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default SideMenu;
