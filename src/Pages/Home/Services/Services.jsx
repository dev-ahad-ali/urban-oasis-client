import servicesImg from '../../../assets/img/services.jpg';

const Services = () => {
  return (
    <section className='my-28'>
      <div className='container mx-auto px-6 py-10'>
        <div className='lg:flex lg:items-center'>
          <div className='w-full space-y-12 lg:w-1/2'>
            <div>
              <h1 className='text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl'>
                Know our <br /> key Services
              </h1>

              <div className='mt-2'>
                <span className='inline-block h-1 w-40 rounded-full bg-customBlack'></span>
                <span className='ml-1 inline-block h-1 w-3 rounded-full bg-customBlack'></span>
                <span className='ml-1 inline-block h-1 w-1 rounded-full bg-customBlack'></span>
              </div>
            </div>

            <div className='md:-mx-4 md:flex md:items-start'>
              <span className='inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
              </span>

              <div className='mt-4 md:mx-4 md:mt-0'>
                <h1 className='text-xl font-semibold capitalize text-gray-700 dark:text-white'>
                  All modern & registered properties
                </h1>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Explore our curated selection of modern, verified properties for a stylish and
                  secure real estate experience.
                </p>
              </div>
            </div>

            <div className='md:-mx-4 md:flex md:items-start'>
              <span className='inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </span>

              <div className='mt-4 md:mx-4 md:mt-0'>
                <h1 className='text-xl font-semibold capitalize text-gray-700 dark:text-white'>
                  Flexible Price range
                </h1>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Find your perfect fit! Explore properties across a range of budgets to suit your
                  financial needs.
                </p>
              </div>
            </div>

            <div className='md:-mx-4 md:flex md:items-start'>
              <span className='inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                  />
                </svg>
              </span>

              <div className='mt-4 md:mx-4 md:mt-0'>
                <h1 className='text-xl font-semibold capitalize text-gray-700 dark:text-white'>
                  Including Luxury real estates
                </h1>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Immerse yourself in opulence. Discover exquisite luxury homes designed for the
                  discerning buyer.
                </p>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center'>
            <img
              className='h-[28rem] w-[28rem] rounded-full object-cover xl:h-[34rem] xl:w-[34rem]'
              src={servicesImg}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
