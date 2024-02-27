import React from 'react';
import BitCoin from '../images/bitcoin-btc-logo.png';
import EthereumCoin from '../images/ethereum-eth-logo.png';
import LiteCoin from '../images/litecoin-ltc-logo.png';
import SmartfiCoin from '../images/smartfi-smrtf-logo.png';
import { FaArrowTrendUp } from "react-icons/fa6";

function Earn() {
  return (
    <div id='earn' className='bg2 w-full h-[400px] flex flex-wrap items-center justify-center gap-12 max-xl:h-[600px] max-xl:gap-x-10 max-xl:gap-y-10'>
      <div className='cdg w-[240px] h-[245px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
        <div className='w-[240px] h-[80px] flex items-center justify-center gap-5'>
          <div className=''>
            <img src={BitCoin} alt="" className='h-14 w-14 rounded-full'/>
          </div>
          <div>
            <h1 className='font-roboto text-white text-2xl font-semibold uppercase'>BTC</h1>
            <p className='font-roboto text-white text-md font-normal uppercase'>BITCOIN</p>
          </div>
        </div>
        <div className=' w-[240px] h-[110px] flex items-center justify-center'>
          <div className='flex flex-col items-center justify-cneter'>
            <div className='flex items-center justify-center gap-[47px]'>
              <p className='font-roboto text-[#05c08d] text-md font-normal'>
                1.78%
              </p>
              <FaArrowTrendUp className='font-roboto text-[#05c08d] text-lg font-normal'/>
            </div>
            <h1 className='font-roboto text-white text-2xl font-semibold pt-1'>
              $ 27367.60
            </h1>
            <p className='font-roboto text-neutral-300 text-[10px] font-medium pt-1 '>
              May 18, 2023 7:51
            </p>
          </div>
        </div>
      </div>
      <div className='cdg w-[240px] h-[245px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
        <div className='w-[240px] h-[80px] flex items-center justify-center gap-5'>
          <div className=''>
            <img src={EthereumCoin} alt="" className='h-14 w-14 rounded-full'/>
          </div>
          <div>
            <h1 className='font-roboto text-white text-2xl font-semibold uppercase'>ETH</h1>
            <p className='font-roboto text-white text-md font-normal uppercase'>ETHEREUM</p>
          </div>
        </div>
        <div className=' w-[240px] h-[110px] flex items-center justify-center'>
          <div className='flex flex-col items-center justify-cneter'>
            <div className='flex items-center justify-center gap-[47px]'>
              <p className='font-roboto text-[#05c08d] text-md font-normal'>
                1.18%
              </p>
              <FaArrowTrendUp className='font-roboto text-[#05c08d] text-lg font-normal'/>
            </div>
            <h1 className='font-roboto text-white text-2xl font-semibold pt-1'>
              $ 1831.93
            </h1>
            <p className='font-roboto text-neutral-300 text-[10px] font-medium pt-1 '>
              May 18, 2023 7:51
            </p>
          </div>
        </div>
      </div>
      <div className='cdg w-[240px] h-[245px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
        <div className='w-[240px] h-[80px] flex items-center justify-center gap-5'>
          <div className=''>
            <img src={LiteCoin} alt="" className='h-14 w-14 rounded-full'/>
          </div>
          <div>
            <h1 className='font-roboto text-white text-2xl font-semibold uppercase'>LTC</h1>
            <p className='font-roboto text-white text-md font-normal uppercase'>LITECOIN</p>
          </div>
        </div>
        <div className=' w-[240px] h-[110px] flex items-center justify-center'>
          <div className='flex flex-col items-center justify-cneter'>
            <div className='flex items-center justify-center gap-[47px]'>
              <p className='font-roboto text-[#05c08d] text-md font-normal'>
                1.63%
              </p>
              <FaArrowTrendUp className='font-roboto text-[#05c08d] text-lg font-normal'/>
            </div>
            <h1 className='font-roboto text-white text-2xl font-semibold pt-1'>
              $ 93.09
            </h1>
            <p className='font-roboto text-neutral-300 text-[10px] font-medium pt-1 '>
              May 18, 2023 7:51
            </p>
          </div>
        </div>
      </div>
      <div className='cdg w-[240px] h-[245px] flex flex-col items-center justify-center border-y-4 border-[#f70ce5]'>
        <div className='w-[240px] h-[80px] flex items-center justify-center gap-5'>
          <div className=''>
            <img src={SmartfiCoin} alt="" className='h-14 w-14 rounded-full'/>
          </div>
          <div>
            <h1 className='font-roboto text-white text-2xl font-semibold uppercase'>SMTF</h1>
            <p className='font-roboto text-white text-md font-normal uppercase'>SMARTFI</p>
          </div>
        </div>
        <div className=' w-[240px] h-[110px] flex items-center justify-center'>
          <div className='flex flex-col items-center justify-cneter'>
            <div className='flex items-center justify-center gap-[47px]'>
              <p className='font-roboto text-[#05c08d] text-md font-normal'>
                0%
              </p>
              <FaArrowTrendUp className='font-roboto text-[#05c08d] text-lg font-normal'/>
            </div>
            <h1 className='font-roboto text-white text-2xl font-semibold pt-1'>
              $ 0.30
            </h1>
            <p className='font-roboto text-neutral-300 text-[10px] font-medium pt-1 '>
              May 18, 2023 7:51
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earn