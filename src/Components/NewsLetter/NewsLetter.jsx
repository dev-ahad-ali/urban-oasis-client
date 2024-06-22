import { ParallaxBanner } from 'react-scroll-parallax';
import newsletterBg from '../../assets/img/newletter.jpg';
import { Button, Input } from '@material-tailwind/react';
const NewsLetter = () => {
  return (
    <ParallaxBanner
      layers={[{ image: `${newsletterBg}`, speed: -40 }]}
      className='aspect-[2/1] max-h-[390px]'
    >
      <div className='absolute inset-0 flex'>
        <div className='w-full bg-black/50 py-4 text-center md:py-10'>
          <h1 className='mt-10 font-title text-4xl leading-none text-white md:text-[120px]'>
            Newsletter
          </h1>
          <p className='text-white md:text-lg'>
            Subscribe to our newsletter to get all the latest offers and news first
          </p>
          <div className='mx-auto max-w-xl px-4 md:mt-12'>
            <div className='flex items-center'>
              <Input label='Subscribe' className='rounded-none bg-white' />
              <Button color='blue' className='rounded-none'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default NewsLetter;
