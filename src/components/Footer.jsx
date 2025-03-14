const Footer = () => {
    return (
      <footer className="bg-slate-600 text-white text-center py-4 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Weather App. All rights reserved.</p>
        <p className="text-xs">Powered by <a href="https://www.weatherapi.com/" className="underline hover:text-blue-400">WeatherAPI</a></p>
      </footer>
    );
  };
  
  export default Footer;
  