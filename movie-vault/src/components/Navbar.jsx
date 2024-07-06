import React from 'react'
import logoimg from '../logo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex items-center p-3'>
        <img className='h-[50px] mx-6' src={logoimg} alt="" />
        <Link to="/" className='text-3xl mx-6 font-bold text-sky-600 hover:cursor-pointer'>Movies</Link>
        <Link to="/watchlist" className='text-3xl mx-6 font-bold text-sky-600 hover:cursor-pointer'>Watchlist</Link>
    </div>
  )
}

export default Navbar