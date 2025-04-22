import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
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
  const apiKey = import.meta.env.VITE_API_KEY
  const [count, setCount] = useState(0)
  const [weatherApi, setweatherApi] = useState({})
  const [location, setlocation] = useState('')
  const [isDataFetched, setisDataFetched] = useState(false)
  const [city, setCity] = useState("Fetching...");
  const [debounceValue, setdebounceValue] = useState("")
  const [searchedCityResult, setsearchedCityResult] = useState([])
const [showSearchedResultList, setshowSearchedResultList] = useState(false)
  const fetchWeatherApi = async (name) => {
    try {      
      setisDataFetched(false);    
      let resp = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${name || location}&days=3`)
     setweatherApi({ ...resp.data })
     setisDataFetched(true);
       setsearchedCityResult([])
    }
    catch(error) {
     setshowSearchedResultList(false)
      setsearchedCityResult([])
      console.error(error)
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
  // Debounce the input value
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setdebounceValue(location);
    }, 500); 

    // Clear the previous timeout on each input change
    return () => clearTimeout(timeoutId);
  }, [location]);

  useEffect(() => {
    const fetchCityNames = async () =>{
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${debounceValue}`
        );
        setsearchedCityResult(response.data);     
         setshowSearchedResultList(true)
        
      } catch (err) {
        toast.error("Unable to fetch city");
        setsearchedCityResult([])
        console.error(err);
      }
    }
    // Call the API only if the debounce value is  greater than 3 characters
    if(debounceValue.trim().length > 2 && debounceValue.trim() !== "") {
      fetchCityNames();
      
    }
    else{
      setsearchedCityResult([])
      setshowSearchedResultList(false)
    }
    
  }, [debounceValue])
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {

     
      await fetchWeatherApi()
    }

  };
  useEffect(() => {
    const fetchCityByIP = async () => {
      
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=auto:ip`
        );
        setCity(response.data.city);

        //Fetching data of user current location using city
        let resp = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${response.data.city}&days=3`)

        setweatherApi({ ...resp.data })
        setisDataFetched(true)
       
      } catch (error) {
       toast.error("Unable to fetch city");
       console.error(error);
       
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
        <div className='flex items-center relative justify-center gap-2 border mx-auto bg-[#87cefaa3] px-4 py-2 rounded-2xl max-w-[90%] md:min-w-96'>
          <input className='border sm:min-w-[80%] px-4 py-2 rounded-full border-blue-400 shadow-sm outline-none text-[12px] sm:text-sm' onKeyDown={handleKeyDown} value={location} onChange={(e) => { setlocation(e.target.value); }} placeholder='Search city ' type="text" />
          <button onClick={() => { fetchWeatherApi() }}><lord-icon
            className="w-6 h-6"
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
          >
          </lord-icon></button>
          
          {/* Searched City Results */}
          <div>
            {showSearchedResultList && searchedCityResult.length > 0 && (
              <div className='absolute left-0 top-16 bg-white w-full max-h-60 overflow-y-auto rounded-lg shadow-lg'>
                {searchedCityResult.map((city) => (
                  <div key={city.id} className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => {
                  
                    setshowSearchedResultList(false)
                    fetchWeatherApi(city.name)
                    setsearchedCityResult([])
                    setlocation("")
                  }}>
                    {city.name}, {city.country}
                  </div>
                ))}
              </div>
            )}
          </div>
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
