import ReactPlayer from 'react-player';

const Banner = () => {
  return (
    <section>
      <div className='mt-36 max-w-5xl px-6'>
        <h1 className='font-title text-[130px] uppercase leading-none'>
          BUILDING THE FUTURE WITH DISTINCTION
        </h1>
      </div>
      <div className='mt-4 flex items-baseline gap-3 ps-8'>
        <p>We level up real estate for your luxury experience.</p>
        <div className='h-[2px] flex-1 bg-customBlack'></div>
      </div>
      <div className='mt-6 px-6'>
        <ReactPlayer
          url={
            'https://assets-global.website-files.com/63034bfa82bc95d18246e3e3/636a70774ac11bc2607ac087_Filme-Varino-transcode.mp4'
          }
          width={'100%'}
          height={'100%'}
          controls={true}
          playing={true}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Banner;
