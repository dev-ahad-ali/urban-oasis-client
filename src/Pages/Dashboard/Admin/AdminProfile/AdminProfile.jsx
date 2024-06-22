import useAuth from '../../../../Hooks/useAuth';
import useRole from '../../../../Hooks/useRole';

const AdminProfile = () => {
  const { user } = useAuth();
  const { userRole } = useRole();
  return (
    <div>
      <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>
        Admin Profile
      </h2>
      <div className='flex items-center gap-12'>
        <div>
          <div className='h-[360px] w-[400px]'>
            <img className='w-full' src={user.photoURL} alt='' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-title text-xl font-semibold'>Name : {user.displayName}</h4>
          <h4>Email : {user.email || user?.providerData[0]?.email}</h4>
          {userRole !== 'user' && (
            <h4 className='bg-green-400 px-4 py-2 font-title font-bold capitalize text-white'>
              Special Role : {userRole}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
