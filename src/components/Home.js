import React from 'react'

function Home() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='  max-h-[500px] relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 max-h-[500px] text-gray-200 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The<span className='pl-2 text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl' ><span className='px-2 text-orange-600'>Foods</span>Deliveried</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        

        </div>
    </div>
  )
}

export default Home