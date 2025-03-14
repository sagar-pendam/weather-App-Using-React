import React from 'react'
const WeatherSkeleton = () => {
  return (
    <div className='weather-dt h-[192px] min-w-[80%] md:min-w-96 border px-4 py-2 rounded-2xl bg-gray-500 animate-pulse'>
      <div className='first_dt flex items-center justify-between'>
        <div className='temp flex gap-2 items-center justify-center'>
          <span className='w-8 h-8 bg-gray-400 rounded-md'></span>
          <div className='w-4 h-4 bg-gray-400 rounded'></div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-10 h-10 bg-gray-400 rounded'></div>
          <div className='w-24 h-4 bg-gray-400 rounded mt-2'></div>
        </div>
      </div>
      <div className='h-[1px] rounded-full w-full bg-gray-200'></div>
      <div className='flex justify-around items-center py-2'>
        <div className='flex gap-1 items-center justify-center'>
          <div className='w-16 h-4 bg-gray-400 rounded'></div>
          <div className='w-3 h-3 bg-gray-400 rounded'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-4 bg-gray-400 rounded'></div>
          <span className='text-white font-semibold'>/</span>
          <div className='w-8 h-4 bg-gray-400 rounded'></div>
        </div>
        <div className='flex items-center justify-center bg-gray-400 rounded-md px-4 py-2'>
          <div className='w-8 h-4 bg-gray-300 rounded'></div>
        </div>
      </div>
      <div className='h-[1px] rounded-full w-full bg-gray-200'></div>
      <div className='location_Dt flex items-center gap-2 py-2'>
        <div className='w-24 h-4 bg-gray-400 rounded'></div>
        <div className='w-3 h-3 bg-gray-400 rounded'></div>
      </div>
      <div className='local_date_time w-32 h-4 bg-gray-400 rounded mt-2'></div>
    </div>
  );
};

export default WeatherSkeleton;
