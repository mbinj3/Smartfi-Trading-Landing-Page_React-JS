import React from 'react';
import { Link } from 'react-router-dom';
import SmartfiCandles from '../images/smartfi_candles.png'
import SmartfiArrow from '../images/smartfi-arrow.png';

function Trade() {
  return (
    <div id='trade' className='bg1 w-full h-[500px] flex items-center justify-center gap-28 relative max-xl:gap-7'>
      <div className='w-[600px] h-auto flex flex-col max-lg:w-[350px]'>
        <p className='textg font-roboto text-xl font-extrabold uppercase max-lg:text-lg'>
            Zero fee crypto trading
        </p>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase leading-10 pt-4 max-lg:text-[38px]'>
            Trade More To
        </h1>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase pt-1 max-lg:text-[38px]'>
            Earn More
        </h1>
        <p className='font-roboto text-neutral-300 text-lg font-medium pt-3'>
          Swap, trade or buy <span className='font-roboto text-white text-lg font-medium underline'>Bitcoin</span>, <span className='font-roboto text-white text-lg font-medium underline'>Ethereum</span> & other cryptocurrencies. You get
        </p>
        <p className='font-roboto text-neutral-300 text-lg font-medium'>
          what you see, we do not add extra fees to the price that we show.
        </p>
        <button className='bdg w-[160px] h-[45px] text-white text-md font-roboto font-medium rounded-full uppercase mt-7 max-lg:text-sm max-lg:w-[150px] max-lg:h-[41px]'>
              <Link to='/'>Start Trading</Link>
        </button>
      </div>
      <div className=''>
        <div className='cdg w-[340px] h-[235px] rounded-lg flex items-center justify-center max-lg:w-[290px] max-lg:h-[170px]'>
          <img src={SmartfiCandles} alt="" className='w-[340px] h-[235px] max-lg:w-[290px] max-lg:h-[170px]'/>
        </div>
      </div>
      <div className='absolute top-[0px] right-[-50px]'>
          <img src={SmartfiArrow} alt="" className='max-xl:invisible'/>
      </div>
    </div>
  )
}

export default Trade