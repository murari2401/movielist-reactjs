import React from 'react'

function Watchlist() {
  return (
    <>
      <div className='flex flex-wrap justify-center m-4'>
        <div className='flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer'>Action</div>
        <div className='flex justify-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer'>Scifi</div>
        <div className='flex justify-center h-[3rem] w-[9rem] bg-red-300 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer'>Adventure</div>
      </div>
      <div className='flex justify-center my-8'>
        <input type="text" placeholder='Search movies' className='h-[3rem] w-[25rem] bg-gray-300 outline-none px-4 text-xl rounded-xl'/>       
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[6rem]' src={`https://preview.redd.it/kalki-2898-a-d-offical-poster-v0-qd7gl7vni0xc1.jpeg?auto=webp&s=e0e35ae2558735d624aacedf0534da0bdfd23731`} alt="" />
                <div className='mx-10'>
                  Kalki 2898AD
                </div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Scifi</td>
              <td className='text-red-900'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist