import React from 'react';
import { Link } from 'react-router-dom';

function Swap() {
  return (
    <div id='swap' className='bg2 w-full h-[500px] flex items-center justify-center gap-36 max-xl:gap-8 max-lg:h-[600px]'>
      <div className='w-auto h-auto flex flex-col'>
        <p className='textg font-roboto text-xl font-extrabold uppercase max-lg:text-lg'>
          Easy Swapping
        </p>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase leading-10 pt-4 max-lg:text-[38px]'>
            How to swap
        </h1>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase pt-1 max-lg:text-[38px]'>
            Crypto ----------
        </h1>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase leading-10 pt-1 max-lg:text-[38px]'>
            In 3 easy steps
        </h1>
        <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
          Learn how to convert your crypto easily and fast. 
        </p>
        
        <button className='bdg w-[160px] h-[45px] text-white text-md font-roboto font-medium rounded-full uppercase mt-7 max-lg:text-sm max-lg:w-[150px] max-lg:h-[41px]'>
              <Link to='/'>Start Trading</Link>
        </button>
      </div>
      <div className='w-auto h-auto flex items-center justify-center gap-6'>
        <div className=' w-[250px] h-[170px] max-lg:hidden'>
          <div className='cdg w-[250px] h-[170px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
            <h1 className=' bdg  h-12 w-12 rounded-full font-roboto text-2xl text-black font-extrabold flex  items-center justify-center'>
              2
            </h1>
            <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
              Choose your Crypto
            </p>
            <p className='font-roboto text-neutral-300 text-lg font-medium'>
              or USD pair
            </p>
          </div>
        </div>
        <div className='w-auto h-auto flex flex-col items-center justify-center gap-y-6'>
          <div className='cdg w-[250px] h-[170px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
              <h1 className=' bdg  h-12 w-12 rounded-full font-roboto text-2xl text-black font-extrabold flex  items-center justify-center'>
                3
              </h1>
              <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
                Go to swap section
              </p>
              
          </div>
          <div className='cdg w-[250px] h-[170px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5] max-2xl:hidden max-xl:hidden max-lg:flex'>
            <h1 className=' bdg  h-12 w-12 rounded-full font-roboto text-2xl text-black font-extrabold flex  items-center justify-center'>
              2
            </h1>
            <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
              Choose your Crypto
            </p>
            <p className='font-roboto text-neutral-300 text-lg font-medium'>
              or USD pair
            </p>
          </div>
          <div className='cdg w-[250px] h-[170px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
              <h1 className=' bdg  h-12 w-12 rounded-full font-roboto text-2xl text-black font-extrabold flex  items-center justify-center'>
                1
              </h1>
              <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
                Sign Up and verify your ID
              </p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swap