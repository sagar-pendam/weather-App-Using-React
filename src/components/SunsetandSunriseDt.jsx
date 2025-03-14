import React from 'react'
import { TbSunrise, TbSunset } from "react-icons/tb";
import * as motion from "motion/react-client"
function SunsetandSunriseDt({ weatherApi }) {
   

    return (
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }} className='weather-ui min-w-[80%] md:min-w-96 border px-4 py-2 rounded-2xl backdrop:blur-xl bg-[#87cefaa3] h-40 flex items-center '>
            <div className='rise_set_dt flex items-center justify-evenly w-full'>
                {weatherApi?.forecast?.forecastday[0]?.astro?.sunrise && <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }} className='sunrise flex gap-2 items-center'>
                    <span className='text-4xl text-yellow-400 '><  TbSunrise /></span>
                    <span className='text-sm text-white font-bold'>{weatherApi.forecast.forecastday[0].astro.sunrise}</span>
                </motion.div>}
                {weatherApi?.forecast?.forecastday[0]?.astro?.sunset && <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }} className='sunset flex gap-2 items-center'>
                    <span className='text-4xl text-yellow-400'><TbSunset /></span>
                    <span className='text-sm text-white font-bold'>{weatherApi.forecast.forecastday[0].astro.sunset}</span>
                </motion.div>}


            </div>
        </motion.div>
    )
}

export default SunsetandSunriseDt
