import React,{useState,useEffect} from 'react'
import { CiDroplet } from "react-icons/ci";
import { ImDroplet } from "react-icons/im";
import * as motion from "motion/react-client"
function HourlyWeatherReport({weatherApi}) {
    const [hourlyWeatherReportDt, sethourlyWeatherReportDt] = useState(weatherApi?.forecast?.forecastday[0]?.hour)
    
    
    const formatTime = (timeString) => {
      const date = new Date(timeString);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    };
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }} viewport={{once:true,amout:0.3}} className='flex max-w-[80%] sm:max-w-96   flex-col items-center justify-center gap-4 rounded-md bg-[#87cefaa3] px-5 py-10 border '>
          <h1 className='font-bold border px-4 py-2 rounded-md text-[16px] sm:text-lg bg-slate-800 text-white'>Hourly</h1>
          <ul className='h-[400px] overflow-y-auto   border rounded-md flex flex-col gap-4 px-4 py-6'>
  {hourlyWeatherReportDt?.length > 0 ? (
    hourlyWeatherReportDt.map((data,index) => <li key={index} className='flex text-white bg-slate-800 px-2 py-2 border rounded-lg gap-2 text-[10px] sm:text-sm items-center justify-around'>
      <span className='flex gap-1 items-center justify-center'>{formatTime(data.time)}</span>
      <span>|</span>
      <span className='flex  items-center justify-center'><img className='w-8 h-8' src={data?.condition?.icon} alt=""  /> {data?.condition?.text}</span> 
      <span>|</span>
      <span  className='flex gap-1 items-center justify-center'>{data?.temp_c}  <img className='w-3 h-3' src="./svg/celsius.svg" alt="" /></span>
      <span>|</span>
    <span className='flex items-center gap-1'><ImDroplet className={data?.chance_of_rain >0?"text-blue-600":"text-gray-400"} /><span className='text-sm'>{data?.chance_of_rain}%</span></span>
    </li>)
  ) : (
    <li>Data Not Found</li>
  )}
</ul>

        </motion.div>
    )
}

export default HourlyWeatherReport
