import React from 'react';
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Community() {
  return (
    <div className='bg2 w-full h-[400px] flex items-center justify-center max-lg:h-[450px]'>
      <div className='w-full h-[300px] flex flex-col items-center justify-center gap-y-7'>
        <h1 className='font-roboto text-white text-[45px] font-bold uppercase'>
            Join the community
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-9 max-xl:gap-5'>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaDiscord className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaTelegramPlane className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaTwitter className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaTiktok className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaLinkedin className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaYoutube className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaFacebook className='text-white text-5xl'/>
            </div>
            <div className='cdg w-[100px] h-[155px] bg-red-500 flex items-center justify-center border-y-4 border-[#f70ce5]'>
            <FaInstagram className='text-white text-5xl'/>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Community