import { useState } from 'react';
import SideMenu from './SIdeMenu/SideMenu';
import { Avatar, Badge, Button, Spinner } from '@material-tailwind/react';
import { CgMenuRightAlt } from 'react-icons/cg';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  const openSideMenu = () => setOpen(true);
  const closeSideMenu = () => setOpen(false);

  return (
    <nav className='border-b-2 border-customBlack py-2'>
      <div className='flex items-center justify-between px-5'>
        <div>
          <Button
            onClick={openSideMenu}
            variant='text'
            size='lg'
            className='flex items-center gap-1 rounded-none border-r-2 border-customBlack p-0 px-5 py-3 font-title text-lg font-medium capitalize'
          >
            <CgMenuRightAlt />
            Menu
          </Button>
          <SideMenu
            open={open}
            closeSideMenu={closeSideMenu}
            user={user}
            logout={logout}
          />
        </div>
        <div>
          <img src={logo} alt='logo' className='h-[50px]' />
        </div>
        <div>
          {loading ? (
            <Spinner color='indigo' />
          ) : user ? (
            <Badge
              placement='top-end'
              overlap='circular'
              color='green'
              withBorder
            >
              <Avatar src={user?.photoURL} alt='avatar' />
            </Badge>
          ) : (
            <Link to={'/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
