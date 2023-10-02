import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="w-full  text-white max-w-[1440px] h-[91px] m-auto flex items-center shadow-sm font-my_Popins">
         <div className="w-[20%] pt-[10px] bg-white  pl-[135px] max-lg:pl-[30px]"><Logo/></div>
         <div className="w-[80%] flex items-center justify-end pr-[150px]">
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
                 <img className="  w-[30px] h-[30px] cursor-pointer pr-[50px]" src="./src/assets/images/burger.png" alt="" />
             </div>
         </div>
     </div>
    </header>
  )
}

export default Header
