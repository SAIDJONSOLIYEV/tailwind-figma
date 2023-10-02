import React from 'react'
import { Logo } from '../helpers/helpers'

const Footer = () => {
    return (
        <footer className="w-full h-[611px]">
            <div className="max-w-[1440px] h-[100%] m-auto bg-[#DBDBDB1A]">
                <div className="flex flex-col items-center pt-[107px] gap-[30px]">
                    <Logo />
                    <p className="text-center text-[#6C6C6C] text-[14px] font-normal leading-6">I have always striven to fix beauty in wood, stone, <br /> glass or pottery, that has been my creed.</p>
                </div>
                <div className="flex items-center gap-[220px] pt-[70px] justify-center pb-[114px]">
                    <div className="flex flex-col items-center">
                        <img className="w-[40px] h-[40px]" src="./src/assets/images/mail.png" alt="" />
                        <p className="pt-[10px] text-[13px] font-normal leading-[23px]">EMAIL</p>
                        <p className="pt-[20px] text-[14px] font-normal leading-[24px]">pompeopotery@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-[40px] h-[40px]" src="./src/assets/images/location.png" alt="" />
                        <p className="pt-[10px] text-[13px] font-normal leading-[23px]">FIND</p>
                        <p className="pt-[20px] text-[14px] font-normal leading-[24px] text-center">Central Park, Manhattan <br />New York, 1101</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-[40px] h-[40px]" src="./src/assets/images/call.png" alt="" />
                        <p className="pt-[10px] text-[13px] font-normal leading-[23px]">CALL</p>
                        <p className="pt-[20px] text-[14px] font-normal leading-[24px]">+1 292 345 678</p>
                    </div>
                </div>
                <div className="flex text-center items-center justify-center bg-[#cfcfcf1a] pt-[33px] pb-[30px]">
                    <p className="text-[#6C6C6C] text-[12px] font-normal leading-[22px]">Template design by</p>
                    <span className="text-[#000] text-[12px] font-normal leading-[22px]">Dorian Hoxha -</span>
                    <span className="text-[#000] text-[12px] font-normal leading-[22px]">Image License Info</span>
                    <p className="text-[#6C6C6C] text-[12px] font-normal leading-[22px]">Powered by</p>
                    <span className="text-[#000] text-[12px] font-normal leading-[22px]">Webflow</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer
