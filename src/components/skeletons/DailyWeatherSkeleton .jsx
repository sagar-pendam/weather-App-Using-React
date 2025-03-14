const DailyWeatherSkeleton = () => {
    return (
      <div className='flex max-w-[80%] sm:min-w-96 flex-col items-center justify-center gap-4 border  p-2 rounded-md'>
        <h1 className='font-bold border px-4 py-2 rounded-md bg-gray-500 text-white '>------</h1>
        <ul className='h-[300px] overflow-y-auto w-full border rounded-md flex flex-col gap-4 px-1 py-6'>
          {[...Array(5)].map((_, index) => (
            <li key={index} className='border gap-4 sm:gap-1 text-white bg-gray-600 px-2 py-2 rounded-md flex items-center justify-around animate-pulse'>
              <span className='font-semibold bg-gray-500 w-12 h-4 rounded-md'></span>
              <span>|</span>
              <span className='flex items-center gap-1 justify-center'>
                <span className='bg-gray-500 w-6 h-4 rounded-md'></span>
                <span>/</span>
                <span className='bg-gray-500 w-6 h-4 rounded-md'></span>
              </span>
              <span>|</span>
              <span className='sm:text-sm text-[10px] font-semibold flex items-center flex-col'>
                <div className='bg-gray-500 w-8 h-8 rounded-md'></div>
                <span className='bg-gray-500 w-16 h-4 rounded-md'></span>
              </span>
              <span>|</span>
              <span className='flex items-center justify-center gap-1'>
                <div className='bg-gray-500 w-6 h-6 rounded-md'></div>
                <span className='bg-gray-500 w-6 h-4 rounded-md'></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DailyWeatherSkeleton;
  