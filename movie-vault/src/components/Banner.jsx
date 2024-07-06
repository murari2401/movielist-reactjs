import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage:'url(https://www.deccanchronicle.com/h-upload/2024/06/24/1099178-gpysqlvwuaagvsm.webp)'}}>
        <div className='w-full text-3xl text-white bg-gray-900/60 text-center p-3'>
            Kalki 2898AD
        </div>
    </div>
  )
}

export default Banner