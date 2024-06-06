import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, logout } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    // console.log(imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    if (res.data.success) {
      const userInfo = {
        name: data.name,
        email: data.email,
        profileImage: res.data.data.display_url,
        role: 'user',
      };

      const userRes = await createUser(data.email, data.password);

      if (userRes.user) {
        updateUser(data.name, res.data.data.display_url).then(() => {
          axiosPublic.post('/users', userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              toast.success('User created successfully');
              logout();
            }
          });
        });
      }
    }
  };

  return (
    <div className='container relative mx-auto flex min-h-[100vh] flex-col items-center justify-center p-5'>
      <div className='font-heading flex w-full flex-col items-center justify-center space-y-14'>
        <h2 className='text-main text-center text-3xl font-bold'>
          Sign up for free!
        </h2>

        {/* sign up form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full flex-col items-center justify-center space-y-7 px-10 md:w-2/3 lg:w-1/3 lg:space-y-10'
        >
          {/* name input */}
          <input
            type='text'
            name='name'
            placeholder='Name'
            id='name'
            className='focus:border-main w-full border-b-[1px] border-[lightgray] bg-transparent pb-2 placeholder-customBlack transition-all duration-500 focus:outline-none'
            {...register('name', {
              required: {
                value: true,
                message: 'Must enter a Name',
              },
            })}
          />
          {errors.name && (
            <p className='font-noto text-sm font-semibold text-red-500'>
              {errors.name.message}
            </p>
          )}
          {/* email input */}
          <input
            required
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
            <p className='font-noto text-sm font-semibold text-red-500'>
              {errors.email.message}
            </p>
          )}

          {/* password input */}
          <div className='w-full'>
            <div className='relative flex w-full items-center justify-center'>
              <input
                required
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
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characters long',
                  },
                  validate: {
                    includesUppercase: (v) => {
                      const pattern = /(?=.*[A-Z])/;
                      if (!pattern.test(v)) {
                        return 'Password must include 1 uppercase letter';
                      }
                    },
                    includeSpecialCharacters: (v) => {
                      const pattern = /[^a-zA-Z0-9_]/;
                      if (!pattern.test(v)) {
                        return 'Password must include 1 special character';
                      }
                    },
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
            {errors.password && (
              <p className='font-noto text-sm font-semibold text-red-500'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* image file input */}

          <div>
            <input
              type='file'
              className='block w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 placeholder-gray-400/70 file:rounded-full file:border-none file:bg-gray-200 file:px-4 file:py-1 file:text-sm file:text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
              {...register('image', {
                required: {
                  value: true,
                  message: 'Must select a image',
                },
              })}
            />
            {errors.image && (
              <p className='font-noto text-sm font-semibold text-red-500'>
                {errors.image.message}
              </p>
            )}
            <p className='mt-1 text-center text-sm font-medium'>
              Upload Profile Picture
            </p>
          </div>

          {/* submit button */}
          <input
            type='submit'
            value='Sign up'
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

      <div className='font-heading flex flex-col items-center justify-center'>
        <div className='mt-5 flex items-center justify-center gap-1'>
          <p className='text-center'>Already have an account?</p>
          <Link
            to='/login'
            className='border-main hover:bg-main border-b-2 border-t-2 border-t-[#ffffff00] px-2 py-1 font-bold duration-300 hover:border-t-2 hover:text-blue-500'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
