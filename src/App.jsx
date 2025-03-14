import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherDetails from './components/WeatherDetails'
import FullWeatherDt from './components/FullWeatherDt'
import WeatherDetailsSkeleton from './components/skeletons/WeatherDetailsSkeleton'
import SunsetandSunriseDt from "./components/SunsetandSunriseDt"
import HourlyWeatherReport from './components/HourlyWeatherReport'
import DailyWeatherReport from './components/DailyWeatherReport'
import SunsetandSunriseDtSkeleton from './components/skeletons/SunsetandSunriseDtSkeleton'
import HourlyWeatherSkeleton from './components/skeletons/HourlyWeatherSkeleton'
import DailyWeatherSkeleton from './components/skeletons/DailyWeatherSkeleton '
import Footer from './components/Footer'
import FullWeatherReportDtSkeleton from './components/skeletons/FullWeatherReportDtSkeleton'
import { ToastContainer, toast,Bounce } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  const [weatherApi, setweatherApi] = useState({})
  const [location, setlocation] = useState('')
  const [isDataFetched, setisDataFetched] = useState(false)
  const [city, setCity] = useState("Fetching...");
  const [error, setError] = useState(null);
  const fetchWeatherApi = async () => {





    try {
      setisDataFetched(false);
      let resp = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=21e7de7dec1748939d0114833250903&q=${location}&days=3`)


      setweatherApi({ ...resp.data })

      setisDataFetched(true);
    }
    catch {
      console.log("Data not found!")
      setlocation("")
      setisDataFetched(true);
      toast.error('Data not found !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }






  }

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {

     
      await fetchWeatherApi()
    }

  };
  useEffect(() => {
    const fetchCityByIP = async () => {
      const API_KEY = "21e7de7dec1748939d0114833250903"; // Replace with your API Key
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/ip.json?key=21e7de7dec1748939d0114833250903&q=auto:ip`
        );
        setCity(response.data.city);

        //Fetching data of user current location using city
        let resp = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${response.data.city}&days=3`)

        setweatherApi({ ...resp.data })
        setisDataFetched(true)
       


      } catch (err) {
        setError("Unable to fetch city");
      }
    };

    fetchCityByIP();

  }, []);

  return (
    <>
      <div className='wheather bg-gradient-to-b from-blue-400 to-blue-200 flex items-center flex-col gap-20 py-4 w-full min-h-screen'>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        {/* Search Bar */}
        <div className='flex items-center justify-center gap-2 border mx-auto bg-[#87cefaa3] px-4 py-2 rounded-2xl max-w-[90%] md:min-w-96'>
          <input className='border sm:min-w-[80%] px-4 py-2 rounded-full border-blue-400 shadow-sm outline-none text-[12px] sm:text-sm' onKeyDown={handleKeyDown} value={location} onChange={(e) => { setlocation(e.target.value); }} placeholder='Search city ' type="text" />
          <button onClick={() => { fetchWeatherApi() }}><lord-icon
            className="w-6 h-6"
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
          >
          </lord-icon></button>
        </div>

        <div className='flex  items-center justify-around w-full flex-wrap  gap-10'>
          {/* current Weather details display */}
          {isDataFetched ? <WeatherDetails weatherApi={weatherApi} /> : <WeatherDetailsSkeleton />}

          {/* Sunset and Sunrise Details */}
          {isDataFetched ? <SunsetandSunriseDt weatherApi={weatherApi} /> : <SunsetandSunriseDtSkeleton />}
        </div>

        {/* Full Weather Details */}
        {isDataFetched ?<FullWeatherDt weatherApi={weatherApi} isDataFetched={isDataFetched} />:<FullWeatherReportDtSkeleton/>}

        {/* Hourly Weather Report */}
        {isDataFetched ? <HourlyWeatherReport weatherApi={weatherApi} /> : <HourlyWeatherSkeleton />}

        {/* Daily Weather Report */}
        {isDataFetched ? <DailyWeatherReport weatherApi={weatherApi} /> : <DailyWeatherSkeleton />}
      </div>
      <Footer />
    </>
  )
}

export default App
