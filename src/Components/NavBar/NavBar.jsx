import { useState } from 'react';
import SideMenu from './SIdeMenu/SideMenu';
import { Button } from '@material-tailwind/react';
import { CgMenuRightAlt } from 'react-icons/cg';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openSideMenu = () => setOpen(true);
  const closeSideMenu = () => setOpen(false);

  return (
    <nav>
      <div>
        <Button
          onClick={openSideMenu}
          variant='text'
          size='lg'
          className='font-title flex items-center gap-1 text-lg font-medium capitalize'
        >
          <CgMenuRightAlt />
          Menu
        </Button>
        <SideMenu open={open} closeSideMenu={closeSideMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
