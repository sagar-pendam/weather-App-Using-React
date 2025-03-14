import React,{useState}from 'react'
import { memo } from 'react'
import {WiDaySunny, WiCloud, WiCloudy, WiFog} from "react-icons/wi"
import { ImDroplet } from "react-icons/im";
import * as motion from "motion/react-client"
function WeatherDetails(prop) {
    // console.log(prop.weatherApi.prop.weatherApi);
    console.log(prop.weatherApi);
    console.log(prop.weatherApi?.forecast?.forecastday[0]?.day.daily_chance_of_rain);
    
    console.log("weatherDt");
    console.log(prop?.weatherApi?.forecast?.forecastday[0]?.day?.daily_chance_of_rain);
    const [formattedDate, seformattedDate] = useState(new Date(prop.weatherApi.location.localtime).toLocaleString('en-US', {
        weekday: 'short',  // Thu
        hour: 'numeric',   // 6
        minute: '2-digit', // 11
        hour12: true       // PM/AM format
      }).replace(/(\w{3}),(\d)/, "$1, $2")) // Removes space before AM/PM)
    
     const getCloudIcon = (cloudValue) => {
            if (cloudValue <= 10) return <WiDaySunny />
            if (cloudValue <= 30) return <WiCloud />;
            if (cloudValue <= 60) return <WiCloudy />;
            return <WiFog />;
        };
    return (
        <motion.div   initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }} className='weather-dt h-[192px] min-w-[80%] md:min-w-96 border px-4 py-2 rounded-2xl bg-[#87cefaa3]'>
            <div className='first_dt flex items-center justify-between'>
                {/* Tempreture */}
                <div className='temp flex gap-2 items-center justify-center'><span className='text-2xl font-semibold text-white'>{prop.weatherApi.current.temp_c}</span> <img className='w-4 h-4' src="./svg/celsius.svg" alt="" /></div>
                {/* Condition */}
                <div className='flex flex-col justify-center items-center'>
                    <span className='sm:text-md'>                    {prop.weatherApi.current.condition.icon && <img className='w-6 h-6 sm:w-10 sm:h-10' src={prop.weatherApi.current.condition.icon} />}
                    </span>
                    <h1 className='text-white'>{prop.weatherApi.current.condition.text}</h1>
                </div>
            </div>
            {/* horizontal line */}
            <div className='h-[1px] rounded-full w-full bg-gray-200'>

            </div>
            {/* Feels Like & localtime */}
            <div className='flex justify-around  items-center py-2'>
                {/* FeelsLike  Dt*/}
                <div className='flex gap-1 items-center justify-center'>
                    <h1 className='text-sm text-white ont-semibold'>
                        Feels like <span className='text-white font-light text-sm'>{prop.weatherApi.current.feelslike_c}</span>
                    </h1>
                    <img className='w-3 h-3' src="./svg/celsius.svg" alt="" />
                </div>
                {/* max & min Tempreture */}
                <div className='flex items-center text-white text-sm gap-1'>
            <span className='flex gap-1 items-center text-white font-semibold'>{prop?.weatherApi?.forecast?.forecastday[0]?.day?.maxtemp_c}<img className='w-3 h-3' src="./svg/celsius.svg" alt="" /></span>
            <span className='text-white font-semibold'>/</span>
            <span className='flex gap-1 items-center text-white font-semibold'>{prop?.weatherApi?.forecast?.forecastday[0]?.day?.mintemp_c}<img className='w-3 h-3' src="./svg/celsius.svg" alt="" /></span>
            
                </div>
                {/* cloud */}
                <div className='flex items-center justify-center  bg-slate-800 rounded-md text-white gap-2'>

                    {/* cloud percentage */}
                   <span className='text-sm flex items-center gap-1 px-2 py-2'><ImDroplet className={prop?.weatherApi?.forecast?.forecastday[0]?.day?.daily_chance_of_rain >0?"text-blue-600":"text-gray-400"} /> {prop?.weatherApi?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%</span>
                   

                </div>
               
            </div>
            <div className='h-[1px] rounded-full w-full bg-gray-200'>

</div>
            {/* Current Location Details */}
            {prop.weatherApi.location && <div className='location_Dt flex items-center  gap-2 py-2'>
                <h1 className='text-sm font-semibold text-white'>{prop.weatherApi.location.name}, {prop.weatherApi.location.country}</h1>
                <lord-icon
                    className="w-3 h-3"
                    src="https://cdn.lordicon.com/onmwuuox.json"
                    trigger="loop"
                    delay="1500"
                >
                </lord-icon>

               
            </div>}
              {/* Localtime & Date */}
              <div className='local_date_tiem text-white  text-sm font-semibold '>
                    {formattedDate}
                </div>   
        </motion.div>
    )



}

export default WeatherDetails