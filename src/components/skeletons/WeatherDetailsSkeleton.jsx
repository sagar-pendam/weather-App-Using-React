import React from 'react'

function WeatherDetailsSkeleton() {
    return (
        <div className='weather-dt min-w-96 border px-4 py-2 rounded-2xl animate-pulse'>
          {/* First row - Temperature & Condition */}
          <div className='first_dt flex items-center justify-between'>
            {/* Temperature Skeleton */}
            <div className='temp flex gap-2 items-center justify-center'>
              <div className='w-12 h-6 bg-gray-300 rounded'></div>
              <div className='w-4 h-4 bg-gray-300 rounded'></div>
            </div>
    
            {/* Condition Skeleton */}
            <div className='flex flex-col justify-center items-center'>
              <div className='w-6 h-6 bg-gray-300 rounded'></div>
              <div className='w-16 h-4 bg-gray-300 rounded mt-1'></div>
            </div>
          </div>
    
          {/* Horizontal Line */}
          <div className='h-[1px] rounded-full w-full bg-gray-200 my-2'></div>
    
          {/* Feels Like & Cloud */}
          <div className='flex justify-between items-center py-2'>
            {/* Feels Like Skeleton */}
            <div className='flex gap-1 items-center justify-center'>
              <div className='w-20 h-4 bg-gray-300 rounded'></div>
              <div className='w-3 h-3 bg-gray-300 rounded'></div>
            </div>
    
            {/* Cloud Skeleton */}
            <div className='flex items-center justify-center bg-slate-500 text-white p-1 rounded-md'>
              <div className='w-5 h-5 bg-gray-300 rounded-full'></div>
              <div className='w-8 h-4 bg-gray-300 rounded ml-2'></div>
            </div>
    
            {/* Local Time Skeleton */}
            <div className='local_date_time w-24 h-4 bg-gray-300 rounded'></div>
          </div>
    
          {/* Horizontal Line */}
          <div className='h-[1px] rounded-full w-full bg-gray-200'></div>
    
          {/* Location Details Skeleton */}
          <div className='location_Dt flex items-center gap-2 py-2'>
            <div className='w-32 h-4 bg-gray-300 rounded'></div>
            <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
          </div>
        </div>
      );
}

export default WeatherDetailsSkeleton
