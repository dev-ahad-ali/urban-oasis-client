import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/img/logo.png';
import useRole from '../Hooks/useRole';
import AdminLinks from '../Components/AdminLinks/AdminLinks';
import UserLinks from '../Components/UserLinks/UserLinks';
import AgentLinks from '../Components/AgentLinks/AgentLinks';

const DashboardLayout = () => {
  const { role } = useRole();

  return (
    <>
      <section className='flex'>
        <aside className='flex h-screen w-64 flex-col overflow-y-auto border-r bg-customBlack px-5 py-8 dark:border-gray-700 dark:bg-gray-900 rtl:border-l rtl:border-r-0'>
          <Link to={'/'}>
            <img className='h-8' src={logo} alt='' />
          </Link>

          <div className='mt-6 flex flex-1 flex-col justify-between'>
            <nav className='-mx-3 space-y-6'>
              {role === 'admin' ? (
                <AdminLinks />
              ) : role === 'agent' ? (
                <AgentLinks />
              ) : (
                <UserLinks />
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

                <a
                  className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                  href='#'
                >
                  <span className='mx-2 text-sm font-medium'>Hotspots</span>
                </a>

                <a
                  className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                  href='#'
                >
                  <span className='mx-2 text-sm font-medium'>Checklists</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
        <div className='flex-1 p-6'>
          <Outlet />
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
