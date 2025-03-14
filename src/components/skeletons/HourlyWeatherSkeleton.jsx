import React from 'react'
const HourlyWeatherSkeleton = () => {
    return (
      <div className='flex max-w-[80%] sm:max-w-96 flex-col items-center justify-center gap-4 rounded-md  px-5 py-10 border'>
        <h1 className='font-bold border px-4 py-2 rounded-md text-[16px] sm:text-lg bg-gray-500 text-white'>------</h1>
        <ul className='h-[400px] overflow-y-auto border rounded-md flex flex-col gap-4 px-2 py-6'>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className='flex text-white bg-gray-200 px-2 py-2 border rounded-lg gap-2 text-[10px] sm:text-sm items-center justify-around'>
              <span className='flex gap-1 items-center justify-center bg-gray-500 w-12 h-4 rounded animate-pulse'></span>
              <span>|</span>
              <span className='flex items-center justify-center'>
                <div className='w-8 h-8 bg-gray-500 rounded animate-pulse'></div>
                <div className='w-16 h-4 bg-gray-500 rounded animate-pulse'></div>
              </span>
              <span>|</span>
              <span className='flex gap-1 items-center justify-center'>
                <div className='w-6 h-4 bg-gray-500 rounded animate-pulse'></div>
                <div className='w-3 h-3 bg-gray-500 rounded animate-pulse'></div>
              </span>
              <span>|</span>
              <span className='flex items-center gap-1'>
                <div className='w-4 h-4 bg-gray-500 rounded animate-pulse'></div>
                <div className='w-6 h-4 bg-gray-500 rounded animate-pulse'></div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HourlyWeatherSkeleton;
  