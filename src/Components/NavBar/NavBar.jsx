import { useState } from 'react';
import SideMenu from './SIdeMenu/SideMenu';
import { Button } from '@material-tailwind/react';
import { CgMenuRightAlt } from 'react-icons/cg';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openSideMenu = () => setOpen(true);
  const closeSideMenu = () => setOpen(false);

  return (
    <nav className='border-customBlack border-b-2 py-2'>
      <div className='flex items-center justify-between px-5'>
        <div>
          <Button
            onClick={openSideMenu}
            variant='text'
            size='lg'
            className='font-title border-customBlack flex items-center gap-1 rounded-none border-r-2 p-0 px-5 py-3 text-lg font-medium capitalize'
          >
            <CgMenuRightAlt />
            Menu
          </Button>
          <SideMenu open={open} closeSideMenu={closeSideMenu} />
        </div>
        <div>
          <img src={logo} alt='logo' className='h-[50px]' />
        </div>
        <div>
          <Link to={'/login'}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
