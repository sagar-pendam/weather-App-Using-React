import React from 'react'

function FullWeatherReportDtSkeleton() {
    return (
        <div className='weather-ui max-w-[80%] sm:min-w-96 border px-4 py-8 rounded-2xl  '>
        <div className='flex flex-col gap-2 px-2 py-8 max-h-[400px] border border-white rounded-2xl overflow-x-auto scroll-smooth'>
            {Array(5).fill(0).map((_, index) => (
                <div key={index} className='border sm:text-sm text-[12px] bg-gray-400 px-4 py-2 rounded-2xl flex items-center border-white font-semibold text-white justify-between'>
                    <div className='h-4 w-24 bg-gray-300 rounded animate-pulse'></div>
                    <div className='h-4 w-12 bg-gray-300 rounded animate-pulse'></div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default FullWeatherReportDtSkeleton
