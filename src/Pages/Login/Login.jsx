import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { login, setLoading, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const to = location?.state?.from?.pathname || '/';
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        if (res.user) {
          toast.success('Login Successful');
          navigate(to);
        }
      })
      .catch(() => {
        setLoading(false);
        setLoginError('Please check if you have entered a valid email or password');
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (res) => {
        const userInfo = {
          name: res.user.name,
          email: res.user?.providerData[0]?.email || res.user?.email,
          profileImage: res.user.photoURL,
          role: 'user',
        };

        axiosPublic.post('/users', userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success('Login Successful');
            navigate(to);
          }
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className='container relative mx-auto flex min-h-[100vh] flex-col items-center justify-center p-5'>
        <div className='font-heading flex w-full flex-col items-center justify-center space-y-14'>
          <h2 className='text-main text-center text-3xl font-bold'>Login to your account</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-full flex-col items-center justify-center space-y-7 px-10 font-medium md:w-2/3 lg:w-1/3 lg:space-y-10'
          >
            <input
              type='email'
              name='email'
              placeholder='Email address'
              id='eamil'
              className='focus:border-main w-full border-b-[1px] border-[lightgray] bg-transparent pb-2 placeholder-customBlack transition-all duration-500 focus:outline-none'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Must enter an Email',
                },
              })}
            />
            {errors.email && (
              <p className='text-sm font-semibold text-red-500'>{errors.email.message}</p>
            )}
            <div className='relative flex w-full items-center justify-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Password'
                id='password'
                className='focus:border-main w-full border-b-[1px] border-[lightgray] bg-transparent pb-2 placeholder-customBlack transition-all duration-500 focus:outline-none'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Must enter a password',
                  },
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-2 text-[gray]'
              >
                {' '}
                {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}{' '}
              </span>
            </div>
            {errors.password ? (
              <p className='font-noto text-sm font-semibold text-red-500'>
                {errors.Password.message}
              </p>
            ) : loginError ? (
              <p className='font-noto text-sm font-semibold text-red-500'>{loginError}</p>
            ) : (
              <></>
            )}
            <input
              type='submit'
              value='Login'
              className='w-full cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white duration-300'
            />
          </form>

          {/* back to homepage button */}
          <Link
            to='/'
            className='hover:text-main absolute left-5 top-0 flex items-center justify-center gap-2 text-[18px] font-semibold duration-500 hover:scale-105'
          >
            <MdHome /> Back to Home
          </Link>
        </div>

        <div className='font-heading mt-10 flex w-full flex-col items-center justify-center'>
          <button
            onClick={handleGoogleSignIn}
            className='hover:bg-sub flex items-center justify-center gap-2 rounded bg-[#1fb3f8] px-4 py-2 font-semibold text-white duration-300'
          >
            <BsGoogle className='text-white' /> Sign in using Google
          </button>
          <div className='mt-5 flex items-center justify-center gap-1'>
            <p className='text-center font-medium'>{"Dont't"} have an account?</p>
            <Link
              to='/signUp'
              className='border-main border-b-2 border-t-2 border-t-[#ffffff00] px-2 py-1 font-bold duration-300 hover:border-t-2 hover:text-blue-500'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
