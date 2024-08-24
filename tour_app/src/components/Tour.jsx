import React from 'react'

export const Tour = ({ Data }) => {
  return (
    <>
      <main className='bg-gray-800 min-h-screen'>
        <h1 className='text-center text-3xl italic text-white font-bold'>Tour App</h1>

        <div className='flex flex-col justify-center items-center px-5 py-5 my-4'>

          {Data.map((tour) => (
            <div key={tour.id} className='bg-white rounded-lg mb-8 w-full max-w-md'>
              <img src={tour.image} alt={tour.name} className='w-full h-48  object-cover rounded-lg mb-4' />
              <h1 className='text-center font-bold text-2xl italic my-3'>{tour.name}</h1>
              <p className='text-sm mx-3 mb-2'>{tour.description} </p>
            </div>
          ))}

        </div>

      </main>
    </>
  )
}
