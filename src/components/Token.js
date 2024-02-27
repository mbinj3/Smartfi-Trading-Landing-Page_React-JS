import React from 'react';
import { Link } from 'react-router-dom';
import SmartfiTokens from '../images/smartfi-tokens.png';

function Token() {
  return (
    <div id='token' className='bg1 w-full h-[500px] flex items-center justify-center gap-40 max-xl:gap-10 max-lg:gap-7'>
      <div className=''>
        <div className='w-auuto h-auto flex items-center justify-center'>
          <img src={SmartfiTokens} alt="" className='w-[420px] h-[420px] max-lg:w-[290px] max-lg:h-[290px]'/>
        </div>
      </div>
      <div className=' w-[600px] h-auto flex flex-col max-lg:w-[350px]'>
        <p className='textg font-roboto text-xl font-extrabold uppercase max-lg:text-lg'>
            Fiat Gateway
        </p>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase leading-10 pt-4 max-lg:text-[38px]'>
            Buy Crypto With
        </h1>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase pt-1 max-lg:text-[38px]'>
            Ach or Bank Transfer
        </h1>
        <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
          Smart Trade users can buy crypto with ACH, credit card, bank transfers and 
        </p>
        <p className='font-roboto text-neutral-300 text-lg font-medium'>
          in some cases Apple Pay. You can withdraw your USD funds to bank.
        </p>
        <button className='bdg w-[160px] h-[45px] text-white text-md font-roboto font-medium rounded-full uppercase mt-7 max-lg:text-sm max-lg:w-[150px] max-lg:h-[41px]'>
              <Link to='/'>Start Trading</Link>
        </button>
      </div>
      
    </div>
  )
}

export default Token