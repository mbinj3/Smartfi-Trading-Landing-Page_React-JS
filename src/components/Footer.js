import React from "react";
import Smartfi from '../images/smartfi-smrtf-logo.png';
import PaymentIcons from '../images/visa mastercard logo.png'
import PaladinLogo from '../images/paladin_logo.png';
import FincenLogo from '../images/fincen_logo.png';
import { LuMailPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoCopySharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="footerbg w-full h-[550px] flex flex-col items-center justify-center">
      <div className="w-full h-[350px] flex items-center justify-center gap-5 max-xl:gap-4">
         <div className="w-[270px] h-[350px] flex flex-col items-start justify-center gap-y-10">
            <div className='flex items-center justify-center gap-2'>
            <img src={Smartfi} alt="" className='h-12 w-12 cursor-pointer'/>
            <h1 className='font-roboto text-white text-2xl font-medium uppercase'><Link to='/'>Smartfi.</Link></h1>
            </div>
            <div className='cdg h-10 w-64  rounded-3xl pl-2 flex items-center justify-center gap-2'>
            <input type="text" placeholder='Sign Up for updates' className='cdg text-md text-white h-7 w-44 ml-1 focus:outline-none'/>
            <button>
            <div className="bdg h-8 w-11 flex items-center justify-center rounded-2xl">   
            <LuMailPlus className=' text-2xl text-white'
            />
            </div>
            </button> 
         </div>
         </div>
         <div className="w-[190px] h-[350px] flex flex-col items-start justify-center">
            <h3 className="font-roboto text-white text-[22px] font-medium uppercase">Products</h3>
            <h4 className="font-roboto text-neutral-300 text-md font-medium  pt-5 cursor-pointer">Smartfi Token</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Crytpo Interest Accounts</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Swap Crytpo</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Crytpocurrency Exchange</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Crytpo Loans</h4>
         </div>
         <div className="w-[150px] h-[350px] flex flex-col items-start justify-center">
            <h3 className="font-roboto text-white text-[22px] font-medium uppercase">Resources</h3>
            <h4 className="font-roboto text-neutral-300 text-md font-medium  pt-5 cursor-pointer">Help Center</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">News</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Tokenomics</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">White Paper</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Media Kit</h4>
         </div>
         <div className="w-[150px] h-[350px] flex flex-col items-start justify-center max-lg:hidden">
            <h3 className="font-roboto text-white text-[22px] font-medium uppercase">Company</h3>
            <h4 className="font-roboto text-neutral-300 text-md font-medium  pt-5 cursor-pointer">About</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Temrs of Use</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Privacy Policy</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Disclaimer</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Contact Us</h4>
         </div>
         <div className="w-[150px] h-[350px] flex flex-col items-start justify-center max-xl:hidden">
            <h3 className="font-roboto text-white text-[22px] font-medium uppercase">Other Link</h3>
            <h4 className="font-roboto text-neutral-300 text-md font-medium  pt-5 cursor-pointer">SMTF Registration</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Loan Calculator</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Crypto Podcast</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Referral Program</h4>
            <h4 className="font-roboto text-neutral-300 text-md font-medium pt-5  cursor-pointer">Sitemap</h4>
         </div>
         <div className="w-[180px] h-[350px] flex flex-col items-start justify-center gap-y-10">
            <h3 className="font-roboto text-white text-[22px] font-medium uppercase">Search</h3>
            <img src={PaymentIcons} alt="" />
         </div>
      </div>
      <div className="w-full h-[150px] flex flex-col items-center justify-center gap-y-4">
         <div className="flex items-center justify-center gap-7">
            <div className="flex items-center justify-center gap-2">
               <img src={PaladinLogo} alt="" className="h-9 w-9 cursor-pointer"/>
               <h4 className="font-roboto text-white text-md font-medium  cursor-pointer">Smart Contract Audited By Paladin</h4>   
            </div>
            <div className="flex items-center justify-center gap-2">
               <img src={FincenLogo} alt="" className="h-7 w-9 cursor-pointer"/>
               <h4 className="font-roboto text-white text-md font-medium  cursor-pointer">FINCEN Registered Money Service Business</h4> 
            </div>
         </div>
         <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
               <h4 className="font-roboto text-white text-md font-medium  cursor-pointer">SMTF Token Address: 0x3b9bA781797b57872687Ce5d5219A1A4Bc0e85ea </h4>
               <div className="bdg h-7 w-7 flex items-center justify-center rounded-2xl"> 
                  <IoCopySharp className='text-black cursor-pointer'/>
               </div>
            </div>
         </div>
      </div>
    </div> 
  )
}

export default Footer