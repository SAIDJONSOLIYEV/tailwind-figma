import React from 'react'
import { Logo } from '../helpers/helpers'

const Header = () => {
    return (
        <header>
            <div className="w-full justify-between text-white lg:px-[135px] px-3 h-[91px] flex items-center shadow-sm font-my_Popins">
                <div className="pt-[10px] bg-white"><Logo /></div>
                <div className="flex items-center">
                    <ul className="flex items-center gap-10 pr-5 text-slate-600 max-lg:hidden">
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                    <div className="w-[1px] h-[38px] bg-slate-600 max-lg:hidden"></div>
                    <div className="pl-[17px] flex items-center gap-[5.71px]">
                        <img className="max-lg:hidden" src="./src/assets/images/Vector (2).png" alt="" />
                        <p className="text-slate-950 max-lg:hidden">Cart</p>
                    </div>
                </div>
                <img className=" w-[30px] h-[30px] cursor-pointer  lg:hidden border-black" src="./src/assets/images/burger.png" alt="" />
            </div>
        </header>
    )
}

export default Header
