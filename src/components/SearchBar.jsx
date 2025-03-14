import React from 'react'

function SearchBar() {
    return (
        <>
        <input className='border' value={location} onChange={(e) => setlocation(e.target.value)} placeholder='Search weather in your location' type="text" />
        <button onClick={()=>{fetchWeatherApi()}}>Search</button>
        </>
    )
}

export default SearchBar
