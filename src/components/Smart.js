import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import MobIcon from '../images/mobile.svg';
import BankIcon from '../images/bitcoin-wallet.png';
import PieChartIcon from '../images/piechart.png';

function Smart() {
  
  return (
    <div className='bg1 w-full h-[550px] flex items-center justify-center gap-28 max-xl:gap-6'>
      <div className='w-auto h-auto flex flex-col items-center justify-center gap-y-6'>
        <div className='cdg w-[450px] h-[100px] flex items-center justify-start border-x-4 border-[#f70ce5] gap-5 pl-8  max-lg:w-[400px]'>
          <div className="h-[55px] w-[55px] bdg flex items-center justify-center rounded-full">
          <img src={MobIcon} alt="" className='textg h-9 w-9 text-white'/>
          </div>
          <h2 className='font-roboto text-white text-xl font-medium'>Create an account.</h2>
        </div>
        <div className='cdg w-[450px] h-[100px] flex items-center justify-start border-x-4 border-[#f70ce5] gap-5 pl-8 max-lg:w-[400px]'>
          <div className="h-[55px] w-[55px] bdg flex items-center justify-center rounded-full">
          <img src={BankIcon} alt="" className='textg h-9 w-9 text-white'/>
          </div>
          <h2 className='font-roboto text-white text-xl font-medium'>Link your bank account or deposit crypto.</h2>
        </div>
        <div className='cdg w-[450px] h-[100px] flex items-center justify-start border-x-4 border-[#f70ce5] gap-5 pl-8 max-lg:w-[400px]'>
          <div className="h-[55px] w-[55px] bdg flex items-center justify-center rounded-full">
          <img src={PieChartIcon} alt="" className='textg h-9 w-9 text-white'/>
          </div>
          <h2 className='font-roboto text-white text-xl font-medium'>Build your crypto portfolio.</h2>
        </div>
      </div>
      <div className='w-[600px] h-auto flex flex-col max-lg:w-[350px]'>
        <p className='textg font-roboto text-xl font-extrabold uppercase max-lg:text-lg'>
            Future with smartfi
        </p>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase leading-10 pt-4 max-lg:text-[38px]'>
            Smart your
        </h1>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase pt-1 max-lg:text-[38px]'>
            Financial future
        </h1>
		    <h1 className='font-roboto text-white text-[45px] font-bold leading-10 uppercase pt-1 max-lg:text-[38px]'>
            Today
        </h1>
        <p className='font-roboto text-neutral-300 text-lg font-medium pt-4'>
          SmartFi is FINCEN registered, open-finance platform for crypto currencies with a built-in fiat gateway. Creating an account on Smartfi takes a few minutes ang gives you access to all our tools for crypto wealth generation in one platform. 
        </p>
        <button className='bdg w-[160px] h-[45px] text-white text-md font-roboto font-medium rounded-full uppercase mt-7 max-lg:text-sm max-lg:w-[150px] max-lg:h-[41px]'>
              <Link to='/'>Start Trading</Link>
        </button>
      </div> 
    </div>
  )
}

export default Smart