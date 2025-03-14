const SunsetandSunriseDtSkeleton = () => {
    return (
      <div className="weather-ui min-w-[80%] md:min-w-96 border px-4 py-2 backdrop:blur-sm rounded-2xl  h-40 flex items-center">
        <div className="rise_set_dt flex items-center justify-evenly w-full">
          <div className="sunrise flex gap-2 items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="sunset flex gap-2 items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SunsetandSunriseDtSkeleton;
  