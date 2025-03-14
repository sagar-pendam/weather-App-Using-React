import React from 'react'
import { memo } from 'react'
import {MdOutlineEmojiEmotions, MdDewPoint, MdDirections, MdCompress, MdOutlineDownload, MdOutlineVisibility } from "react-icons/md";
import { TbTemperatureCelsius, TbPoint, TbUvIndex } from "react-icons/tb";
import WeatherSkeleton from './skeletons/WeatherSkeleton';
import { WiThermometer, WiHot, WiSnowflakeCold, WiFahrenheit, WiCloudyGusts, WiHumidity, WiDaySunny, WiCloud, WiCloudy, WiFog, WiRaindrop, WiRain, WiShowers, WiThunderstorm, WiStrongWind, WiGaleWarning, WiHurricaneWarning } from "react-icons/wi";
import { RiFahrenheitFill, RiEmotionUnhappyLine } from "react-icons/ri";
// import { CiTempHigh } from "react-icons/ci";
// import { FaWind } from "react-icons/fa6";
// import { FiCloudRain } from "react-icons/fi";
import { LuSnowflake } from "react-icons/lu";
import { PiCloudRainLight } from "react-icons/pi";
import { BsCloudRainHeavy, BsEmojiGrimace, BsEmojiExpressionless } from "react-icons/bs";
import { FaThermometerEmpty, FaThermometerQuarter, FaThermometerHalf, FaThermometerFull, FaThermometerThreeQuarters } from "react-icons/fa";
import { IoHappyOutline } from "react-icons/io5";
import * as motion from "motion/react-client"
function FullWeatherDt({ weatherApi, isDataFetched }) {
    console.log("Inside FullWeatherDt");
    console.log(weatherApi);

    const currentData = ['Dew Point']
    console.log(isDataFetched);
    const removeAtrributes = ['last_updated', 'last_updated_epoch', 'is_day', 'condition']
    console.log(weatherApi?.current?.gust_kph);
    const getCloudIcon = (cloudValue) => {
        if (cloudValue <= 10) return <WiDaySunny />
        if (cloudValue <= 30) return <WiCloud />;
        if (cloudValue <= 60) return <WiCloudy />;
        return <WiFog />;
    };
    const getPrecipIcon = (precipValue) => {
        if (precipValue === 0) return null; // No rain, no icon
        if (precipValue >= 2 && precipValue <= 4) return <WiRaindrop />; // 🌧 Light Rain
        if (precipValue >= 5 && precipValue <= 6) return <WiShowers />; // ☔ Moderate Rain
        if (precipValue > 30) return <WiRain />; // 🌧 Heavy Rain

    };
    const getPrecipIconIn = (precipValue) => {
        if (precipValue === 0) return null
        if (precipValue >= 0.07 && precipValue <= 0.15) return <PiCloudRainLight />; //Light Rain
        if (precipValue >= 0.19 && precipValue <= 0.23) return <WiRaindrop />; //Moderate Rain
        if (precipValue >= 0.59 && precipValue <= 0.78) return <BsCloudRainHeavy />; //Rain or strong rain 
        return <WiThunderstorm />;
    };
    const getTempIconCelceuis = (tempValue) => {
        if (tempValue <= 0) return <WiSnowflakeCold />;
        if (tempValue >= 30) return <WiHot />;
        return <WiThermometer />;
    };
    const getTempIconInF = (tempValue) => {
        if (tempValue <= 32) return <LuSnowflake /> // Freezing temperatures
        if (tempValue >= 86) return <WiHot />; // Hot temperatures
        return <WiThermometer />; // Moderate temperatures
    };
    const getWindIcon = (windSpeed) => {
        if (windSpeed < 1) return null; // Calm
        if (windSpeed <= 3) return <WiStrongWind />; // Light air
        if (windSpeed <= 7) return <WiCloudyGusts />; // Light breeze
        if (windSpeed <= 12) return <WiCloudyGusts />; // Gentle breeze
        if (windSpeed <= 18) return <WiCloudyGusts />; // Moderate breeze
        if (windSpeed <= 24) return <WiCloudyGusts />; // Fresh breeze
        if (windSpeed <= 31) return <WiGaleWarning />; // Strong breeze
        if (windSpeed <= 38) return <WiGaleWarning />; // Near gale
        if (windSpeed <= 46) return <WiGaleWarning />; // Gale
        if (windSpeed <= 54) return <WiGaleWarning />; // Severe gale
        if (windSpeed <= 63) return <WiHurricaneWarning />; // Storm
        if (windSpeed <= 72) return <WiHurricaneWarning />; // Violent storm
        return <WiHurricaneWarning />; // Hurricane
    };

    const getHeatIndexInF = (temp) => {
        if (temp >= 80 && temp <= 90) return <FaThermometerEmpty />;//Caution
        if (temp > 90 && temp < 103) return <FaThermometerQuarter />;//Extream Caution
        if (temp > 103 && temp < 125) return <FaThermometerThreeQuarters />;//Danger
        if (temp => 125) return <FaThermometerFull />//Extrem Danger
    }
    const getHeatIndexInC = (temp) => {
        if (temp >= 27 && temp <= 32) return <FaThermometerEmpty />; // Caution
        if (temp > 32 && temp < 39) return <FaThermometerQuarter />; // Extreme Caution
        if (temp > 39 && temp < 52) return <FaThermometerThreeQuarters />; // Danger
        if (temp >= 52) return <FaThermometerFull />; // Extreme Danger

    }
    const getDewPointInC = (temp) => {
        if(temp<10)return <MdOutlineEmojiEmotions />//Pleasant
        if (temp >= 10 && temp <= 15.56) return <IoHappyOutline /> // Comfortable
        if (temp >= 16.11 && temp <= 18.33) return <BsEmojiExpressionless /> // Sticky
        if (temp >= 18.89 && temp <= 21.11) return <RiEmotionUnhappyLine /> // Unpleasant
        if (temp >= 21.67) return <BsEmojiGrimace /> // Gross

    }
    const getDewPointInF = (temp) => {
        // How it feels ?
        if(temp<50)return <MdOutlineEmojiEmotions />//Pleasant
        if (temp >= 50 && temp <= 60) return <IoHappyOutline /> //Comfortable
        if (temp >= 61 && temp <= 65) return <BsEmojiExpressionless />//Sticky
        if (temp >= 66 && temp <= 70) return <RiEmotionUnhappyLine />//unpleasant
        if (temp >= 71) return <BsEmojiGrimace />//gross
    }
    return (
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }} viewport={{once:true,amount:0.3}} className='weather-ui max-w-[80%] sm:min-w-96 border px-4 py-8 rounded-2xl bg-[#87cefaa3] '>
            {/* Weather Details */}
            
            {isDataFetched ? (
                <ul className='flex flex-col gap-2 px-2 py-8  max-h-[400px] border border-white rounded-2xl overflow-x-auto  scroll-smooth'>
                    {Object.entries(weatherApi.current)
                        .filter(([key]) => !removeAtrributes.includes(key))
                        .map(([key, value], index) => (
                            <li key={index} className="border sm:text-sm text-[12px] bg-slate-800 px-4 py-2 rounded-2xl flex items-center border-white font-semibold text-white  justify-between">
                                <strong className='flex items-center gap-1'>{key === "temp_f" && getTempIconInF(value)}{key.startsWith("gust") && <WiCloudyGusts />}{key.startsWith("cloud") && getCloudIcon(value)}
                                
                                
                                {key==="dewpoint_c" && getDewPointInC(value)}
                                {key==="dewpoint_f" && getDewPointInF(value)}{key.startsWith("vis") && <MdOutlineVisibility />}{key.startsWith("uv") && <TbUvIndex />}
                                    {key === "heatindex_c" && getHeatIndexInC(value)}{key.startsWith("precip in") && getPrecipIconIn(value)}  {key.startsWith("precip") && getPrecipIcon(value)}{key.startsWith("humidity") && <WiHumidity />}{key == "feelslike_f" && getTempIconInF(value)}{key == "feelslike_c" && getTempIconCelceuis(value)}{key === "heatindex_f" && getHeatIndexInF(value)}{key === "temp_c" && getTempIconCelceuis(value)}{key.startsWith("pressure") && <MdCompress />}{key.startsWith("wind") && getWindIcon(value)}
                                    {key.replace(/_/g, " ")}</strong>



                                <span className='flex items-center justify-center'>{key.endsWith("mb") && <MdOutlineDownload />}{value} {key.endsWith("f") && <RiFahrenheitFill />}
                                    {key.endsWith("c") && <TbTemperatureCelsius />}
                                    {key.endsWith("mph") && ".mph"}
                                    {key.endsWith("mm") && ".mm"}
                                    {key.endsWith("kph") && "km/h"}
                                    {key.endsWith("mb") && "mb"}
                                    {key.endsWith("km") && "km"}
                                    {key.endsWith("miles") && "miles"}
                                    {key.endsWith("cloud") && "%"}
                                    {key.endsWith("degree") && <TbPoint />}
                                    {key.endsWith("dir") && <MdDirections />}

                                </span>
                            </li>

                        ))}
                </ul>
            ) : (
                <WeatherSkeleton />
            )}


        </motion.div>
    )
}

export default FullWeatherDt
