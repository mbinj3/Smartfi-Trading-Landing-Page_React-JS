import React from 'react';
import Smartfi from '../images/smartfi-smrtf-logo.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    
  return (
    <div className='navbg w-full h-[90px] flex items-center justify-center relative gap-[165px] max-xl:gap-[90px]'>
     <div className='flex items-center justify-center gap-2'>
        <img src={Smartfi} alt="" className='h-12 w-12 cursor-pointer'/>
        <h1 className='font-roboto text-white text-2xl font-medium uppercase'><Link to='/'>Smartfi.</Link></h1>
     </div>
     <div className='flex items-center justify-center gap-8 '>
        <h2 className='font-poppins text-white text-md font-medium uppercase'>
          <HashLink smooth to='#earn'>Earn</HashLink>
        </h2>
        <h2 className='font-poppins text-white text-md font-medium uppercase'>
          <HashLink smooth to='#trade'>Trade</HashLink>
        </h2>
        <h2 className='font-poppins text-white text-md font-medium uppercase'>
          <HashLink smooth to='#about'>About</HashLink>
        </h2>
        <h2 className='font-poppins text-white text-md font-medium uppercase'>
          <HashLink smooth to='#token'>Token</HashLink>
        </h2>
        <h2 className='font-poppins text-white text-md font-medium uppercase'>
          <HashLink smooth to='#swap'>Swap</HashLink>
        </h2> 
     </div>
     <div className='flex gap-3'>
        <button className='btno w-[125px] h-[43px] text-white text-md font-roboto font-medium rounded-full uppercase'>
            <Link to='/'>Sign In</Link>
        </button>
        <button className='bdg w-[125px] h-[43px] text-white text-md font-roboto font-medium rounded-full uppercase'>
            <Link to='/'>Sign Up</Link>
        </button>
     </div>
    </div>
  )
}

export default Navbar