import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import AllPropertyCard from '../../Components/Cards/AllPropertyCard';
import { Button, Input, Option, Select } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const AllProperties = () => {
  const axiosSecure = useAxiosSecure();
  const [allProperties, setAllProperties] = useState([]);
  const [propertiesLoading, SetPropertiesLoading] = useState(true);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const getProperties = () => {
      axiosSecure.get(`/allProperties?location=${location}&sort=${sort}`).then((res) => {
        setAllProperties(res.data);
        SetPropertiesLoading(false);
      });
    };
    getProperties();
  }, [axiosSecure, location, sort]);

  const handleLocation = () => {
    const search = document.getElementById('searchLocation').value;
    setLocation(search);
  };

  if (propertiesLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='mx-auto max-w-7xl px-4 py-12 font-title text-5xl capitalize'>
        All listed Properties....
      </h2>
      <div className='my-12 flex items-center justify-end gap-6'>
        <div>
          <Select label='Sort Price'>
            <Option onClick={() => setSort('')}>All</Option>
            <Option onClick={() => setSort('low')}>Low To High</Option>
            <Option onClick={() => setSort('high')}>High To Low</Option>
          </Select>
        </div>
        <div className='relative w-96'>
          <div className='flex items-center gap-1'>
            <Input
              id='searchLocation'
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              label='Location'
            />
            <Button onClick={handleLocation} color='blue' className='rounded-none'>
              Search
            </Button>
          </div>
          {showSuggestion && (
            <div className='absolute top-12 z-10 w-4/5 rounded-md bg-white p-4'>
              <p className='text-sm font-semibold opacity-55'>California</p>
              <p className='text-sm font-semibold opacity-55'>Florida</p>
              <p>Hawai</p>
            </div>
          )}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        {allProperties.length === 0 && <h2 className='font-title text-4xl'>No Properties Found</h2>}
        {allProperties?.map((property) => (
          <AllPropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
