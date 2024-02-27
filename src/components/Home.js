import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg1 w-full h-[700px] flex flex-col items-center justify-center'>
      <div className=' w-auto h-auto flex gap-[122px] max-xl:gap-[100px] max-lg:gap-[60px]'>
        <div className=''>
          <p className='textg font-roboto text-xl font-extrabold uppercase max-lg:text-lg'>
            SmartTrade
          </p>
          <h1 className='font-roboto text-white text-[110px] font-semibold uppercase max-xl:text-[87px] max-lg:text-[60px]'>
            Your Simple
          </h1>
        </div>
        <div className='flex flex-col items-start justify-center gap-y-1 pt-5 max-xl:pb-0 max-xl:gap-y-0 max-lg:pb-0'>
          <div className='flex gap-2 items-center justify-center'>
            <div className='h-3 w-3 bdg rounded-full max-lg:h-2.5 max-lg:w-2.5'>  
            </div>
            <div className=''>
              <p className='font-roboto text-neutral-300 text-lg font-medium max-lg:text-[17px] max-lg:leading-tight'>Zero buy/swap fees</p>
            </div>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <div className='h-3 w-3 bdg rounded-full max-lg:h-2.5 max-lg:w-2.5'>  
            </div>
            <div className=''>
              <p className='font-roboto text-neutral-300 text-lg font-medium max-lg:text-[17px] max-lg:leading-tight'>Easily convert cryptocurrency</p>
            </div>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <div className='h-3 w-3 bdg rounded-full max-lg:h-2.5 max-lg:w-2.5'>  
            </div>
            <div className=''>
              <p className='font-roboto text-neutral-300 text-lg font-medium max-lg:text-[17px] max-lg:leading-tight'>Fast & secure payment methods</p>
            </div>
          </div>
        </div>
      </div> 
      <div className=' w-auto h-auto relative'>
        <div className='flex flex-col items-center '>
          <h2 className='font-roboto text-white text-[70px] font-semibold uppercase z-30 max-xl:text-[66px] max-lg:text-[50px]'>
              Crypto Trading
          </h2>
          <h1 className='font-roboto text-white text-[110px] font-semibold uppercase pl-[400px] max-xl:text-[87px] max-lg:text-[60px] max-lg:pl-[280px]'>
              Platform.
          </h1>
          <button className='bdg w-[170px] h-[53px] text-white text-lg font-roboto font-medium rounded-full uppercase mt-5 '>
              <Link to='/'>Get Started</Link>
          </button>
        </div>
        <div className='bdg w-[275px] h-[275px] rounded-full absolute top-[30px] left-[0px] flex items-center justify-center shadow-2xl z-0 max-lg:w-[220px] max-lg:h-[220px]'>
          <div className='bdg w-[255px] h-[255px] rounded-full flex items-center justify-center shadow-2xl z-10 max-lg:w-[200px] max-lg:h-[200px]'>
            <div className='bdg w-[230px] h-[230px] rounded-full flex flex-col items-center justify-center shadow-2xl z-20 max-lg:w-[180px] max-lg:h-[180px]'>
              <h1 className='font-roboto text-white text-[60px] font-black uppercase leading-none max-lg:text-[48px]'>Zero</h1>
              <p className='font-roboto text-white text-[70px] font-thin uppercase leading-none tracking-tighter max-lg:text-[55px]'>
                Fees
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )
}

export default Home