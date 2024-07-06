import React from 'react'

function Pagenation({page,incrementPage,decrementPage}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div className='px-8 hover:cursor-pointer'>
            <button onClick={decrementPage}><i class="fa-solid fa-arrow-left"></i></button>
        </div>

        <div className='font-bold'>{page}</div>

        <div className='px-8 hover:cursor-pointer'>
            <button onClick={incrementPage}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Pagenation