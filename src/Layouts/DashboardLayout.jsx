import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/img/logo.png';
import useRole from '../Hooks/useRole';
import AdminLinks from '../Components/AdminLinks/AdminLinks';
import UserLinks from '../Components/UserLinks/UserLinks';
import AgentLinks from '../Components/AgentLinks/AgentLinks';

const DashboardLayout = () => {
  const { userRole } = useRole();

  return (
    <>
      <section className='flex'>
        <div className='relative w-64'>
          <aside className='fixed left-0 top-0 flex h-screen w-64 flex-col overflow-y-auto border-r bg-customBlack px-5 py-8 dark:border-gray-700 dark:bg-gray-900 rtl:border-l rtl:border-r-0'>
            <Link to={'/'}>
              <img className='h-8' src={logo} alt='' />
            </Link>

            <div className='mt-6 flex flex-1 flex-col justify-between'>
              <nav className='-mx-3 space-y-6'>
                {userRole === 'admin' ? (
                  <AdminLinks />
                ) : userRole === 'agent' ? (
                  <AgentLinks />
                ) : userRole === 'user' ? (
                  <UserLinks />
                ) : (
                  <p className='text-offWhite'>Navigating....</p>
                )}
                {/* Public Content */}
                <div className='space-y-3'>
                  <label className='px-3 text-xs uppercase text-gray-500 dark:text-gray-400'>
                    Public content
                  </label>

                  <NavLink
                    to={'/'}
                    className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                    href='#'
                  >
                    <span className='mx-2 text-sm font-medium'>Home</span>
                  </NavLink>
                </div>
              </nav>
            </div>
          </aside>
        </div>
        <div className='flex-1 p-6'>
          <Outlet />
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
