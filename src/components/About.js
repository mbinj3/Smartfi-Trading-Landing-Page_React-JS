import React from 'react';
import BitCoinLogo from '../images/bitcoin.png';
import GearLogo from '../images/approved.png';
import KindnessLogo from '../images/kindness.png';
import CardLogo from '../images/card-payment.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function About() {
  return (
    <div id='about' className='bg2 w-full h-[500px] flex flex-col items-center justify-center gap-y-6 max-xl:h-[900px]'>
      <div className=''>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase'>
            Why Choose SmartTrade ?
        </h1>
      </div> 
      
      <div className='w-full h-auto flex items-center justify-center flex-wrap gap-10'>
        <div className='cdg w-[280px] h-[310px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5] gap-y-5'>
           <div className='h-[70px] w-[70px] bdg rounded-full flex items-center justify-center'>
           <img src={BitCoinLogo} alt="" className='h-14 w-14'/>
           </div>
           <h3 className='font-roboto text-white text-2xl font-medium capitalize text-center'>
            Your Favorite Crypto Assets
           </h3>
            <p className='font-roboto text-neutral-300 text-lg font-medium text-center'>
              Buy the most popular cryptocurrencies listed in the exchange
            </p>
        </div> 
        <div className='cdg w-[280px] h-[310px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5] gap-y-5'>
           <div className='h-[70px] w-[70px] bdg rounded-full flex items-center justify-center'>
           <img src={GearLogo} alt="" className='h-14 w-14'/>
           </div>
           <h3 className='font-roboto text-white text-2xl font-medium capitalize text-center'>
            Easy To Use
           </h3>
            <p className='font-roboto text-neutral-300 text-lg font-medium text-center'>
              Built for new cryptocurrencies users, use SmartTrade for simple swaps and buys
            </p>
        </div>
        <div className='cdg w-[280px] h-[310px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5] gap-y-5'>
           <div className='h-[70px] w-[70px] bdg rounded-full flex items-center justify-center'>
           <img src={KindnessLogo} alt="" className='h-14 w-14'/>
           </div>
           <h3 className='font-roboto text-white text-2xl font-medium capitalize text-center'>
            Zero Fees
           </h3>
            <p className='font-roboto text-neutral-300 text-lg font-medium text-center'>
              You got what you see, we do not add an extra fee to the price that we show
            </p>
        </div>
        <div className='cdg w-[280px] h-[310px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5] gap-y-5'>
           <div className='h-[70px] w-[70px] bdg rounded-full flex items-center justify-center'>
           <img src={CardLogo} alt="" className='h-14 w-14'/>
           </div>
           <h3 className='font-roboto text-white text-2xl font-medium capitalize text-center'>
            Easy Way To Buy
           </h3>
            <p className='font-roboto text-neutral-300 text-lg font-medium text-center'>
              The easiest way to buy Bitcoin, SMARTFI and top cryptocurrency with easy payment methods
            </p>
        </div>
      </div> 
    </div>
  )
}

export default About