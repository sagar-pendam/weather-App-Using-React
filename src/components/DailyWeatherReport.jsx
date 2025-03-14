import React,{useState,useEffect} from 'react'
import { ImDroplet } from "react-icons/im";
import * as motion from "motion/react-client"
function DailyWeatherReport({weatherApi}) {
    
    const [dailyWeatherReportDt, setdailyWeatherReportDt] = useState([])
    useEffect(() => {
       setdailyWeatherReportDt(weatherApi?.forecast?.forecastday)
    }, [])

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'short' }); // "Wed"
      };
    console.log(weatherApi?.forecast?.forecastday);
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }} viewport={{once:true,amount:0.3}} className='flex max-w-[80%] sm:min-w-96  flex-col items-center justify-center gap-4 border bg-[#87cefaa3] p-5 rounded-md'>
             <h1 className='font-bold border px-4 py-2 rounded-md bg-slate-800 text-white'>Daily</h1>
            <ul className='h-[300px] overflow-y-auto w-full border rounded-md flex flex-col gap-4 px-4 py-6'>
            {setdailyWeatherReportDt.length >0 ?(dailyWeatherReportDt.map((data,index)=>{
              return  <li key={index} className='border gap-4 scroll-smooth sm:gap-1 text-white bg-slate-800 px-2 py-2 rounded-md flex items-center justify-around overflow-y-auto overflow-x-scroll sm:overflow-x-auto  text-[10px] sm:text-sm'>
                <span className='font-semibold'>{getDayName(data.date)}</span>
                <span>|</span>
                <span className='flex items-center gap-1 justify-center'>{data?.day?.maxtemp_c}<img className='w-3 h-3' src="./svg/celsius.svg" alt="" /><span>/</span>{data.day.mintemp_c}<img className='w-3 h-3' src="./svg/celsius.svg" alt="" /></span>
                <span>|</span>
                <span className='sm:text-sm text-[10px] font-semibold flex items-center flex-col' ><img className='w-8 h-8' src={data?.day?.condition?.icon}  alt=""  />{data?.day?.condition?.text} </span>
                <span>|</span>
                <span className='flex items-center justify-center gap-1'> <ImDroplet className={data.day.daily_chance_of_rain>0?"text-blue-600":"text-gray-400"} /> <span>{data.day.daily_chance_of_rain}%</span></span>
              </li>
            })):<li>Data Not Found</li>}
            </ul>
        </motion.div>
    )
}

export default DailyWeatherReport
