import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12'>
        <div className='wf-ull lg:w-1/2'>
          <p className='text-5xl font-medium text-blue-500 dark:text-blue-400'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.Here are some helpful links:
          </p>

          <div className='mt-6 flex items-center gap-x-3'>
            <Link to={'/'}>
              <button className='w-1/2 shrink-0 rounded-lg bg-blue-700 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto'>
                Take me home
              </button>
            </Link>
          </div>
        </div>

        <div className='relative mt-12 w-full lg:mt-0 lg:w-1/2'>
          <img
            className='w-full max-w-lg lg:mx-auto'
            src='/images/components/illustration.svg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
