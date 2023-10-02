import { Cricle1, Cricle2, Cricle3, Ico, Logo } from "./helpers/helpers";
// import mail from "./assets/images/mail.png"
const App = () => {
    return (
      <>
      {/* header */}
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

{/* main */}
<main className=" font-my_Popins">
<div className=" max-w-[1440px] h-[708px] m-auto flex  items-center font-my_Popins bg-[url(./assets/images/bgImg.png)] max-lg:flex-col">
            <div className="h-[100%] pt-[192px] pl-36 max-lg:p-[40px]">
            <p className="text-red-400 font-normal text-sm uppercase max-lg:p">Pompeo POttery</p>
            <div className="text-5xl  pb-[14px] leading-normal w-[500px] font-black">Unique Porcelain Stone Collection</div>
            <span className="pb-[100px] font-my_Popins text-slate-500 text-base font-normal leading-normal">Unique & modern pottery made by our master in porcelain & stones</span>
            <br /><br />
            <button className="mt-[51px] cursor-pointer w-[201px] h-[62px] border-none font-my_Popins text-xs  text-white uppercase font-bold bg-[#AC1313]">Shop Collection</button>
            </div>
            <div className="max-w-[784px] h-[445px]"><img src="./src/assets/images/image (6).png" alt="" /></div>
        </div>
        <div className=" max-w-[1440px] m-auto pt-[120px] pb-[150px]">
            <div className="flex flex-col gap-2">
                <p className="text-center font-my_Popins  text-sm font-bold uppercase text-[#D77474] leading-[24px]">Product Categories</p>
                <h1 className="flex  font-my_Popins text-[40px] font-bold leading-[50px] m-auto gap-1">Porcelain <Ico/> Pottery</h1>
            </div>
            <div className="flex items-center justify-center gap-[151px] pt-[63px]">
                <Cricle1/>
                <Cricle2/>
                <Cricle3/>
            </div>
            <div className="flex items-center gap-[133.22px] pt-[87px] pl-36 pr-36">
                <div>
                <h1 className="text-[#000] font-my_Popins text-[29px] font-bold leading-[36px]">Hand Grafted <br /> Pottery since 1990</h1>
                    <p className="pt-[23px] text-[#6C6C6C] font-my_Popins text-[14px] font-normal leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                        libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                        vitae risus posuere.</p>
                </div>

                <div>
                    <h1 className="text-[#000] font-my_Popins text-[29px] font-bold leading-[36px]">We Provide Premium Pottery Produts</h1>
                    <p className="pt-[23px] text-[#6C6C6C] font-my_Popins text-[14px] font-normal leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                        libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                        vitae risus posuere.</p>
                </div>
            </div>
        </div>
        <div className="max-w-[1440px] m-auto pl-[134px]">
                <div className="flex gap-[86px]">
                    <img className="pt-[77px]" src="./src/assets/images/vase1.png" alt="" />
                    <div className="pt-[241px]">
                    <h1 className="text-[#000] text-[24px] font-bold leading-[34px]">Gold & Black Pottery</h1>
                    <p className="text-[#6C6C6C] w-[388px] text-[14px] font-normal leading-[24px] pb-[27px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                        labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut
                        aliquip ex ea commodo consequatuisaute.</p>
                    <span className="text-[#000] text-[14px] leading-[24px] font-bold">View Details</span>
                    </div>
                </div>
                <div className="flex gap-[208px]">
                    <div className="">
                    <h1 className="text-[#000] text-[24px] font-bold leading-[34px]">Orange Ceramic</h1>
                    <p className="text-[#6C6C6C] w-[388px] text-[14px] font-normal leading-[24px] pb-[27px]">Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec
                        lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas
                        suscipit ad mea verear vivendo tincidunt.</p>
                    <span className="text-[#000] text-[14px] leading-[24px] font-bold">View Details</span>
                    </div>
                    <img className="pt-[77px] " src="./src/assets/images/vase2.png" alt="" />

                </div>
        </div>
        <div className="max-w-[1440px] m-auto pt-[121px] pb-[120px] flex flex-col items-center">
            <div className="flex items-center flex-col gap-[17px]">
                <p className="text-[#D77474] text-center text-[14px] font-bold leading-[24px] uppercase">Our online store</p>
                <h1 className="text-[#000] text-center text-[40px] font-bold leading-[50px]">Pottery Collection</h1>
            </div>
            <div className="flex items-center justify-center pt-[63px] gap-[20px]">
                <div>
                    <img src="./src/assets/images/col1.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Decor Plate</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 65.00 USD</span>
                </div>
                <div >
                    <img src="./src/assets/images/col2.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Mint Pottery</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 75.00 USD</span>
                </div>
                <div >
                    <img src="./src/assets/images/col3.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Set Of Potterys</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 125.00 USD</span>
                </div>
            </div>
            <div className="flex items-center justify-center pt-[21px] gap-[20px] pb-[61px]">
                <div>
                    <img src="./src/assets/images/col4.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Orange Ceramic</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 55.00 USD</span>
                </div>
                <div >
                    <img src="./src/assets/images/col5.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Dark Bowl</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 115.00 USD</span>
                </div>
                <div >
                    <img src="./src/assets/images/col6.png" alt="" />
                    <p className="pt-[15px] text-[#6C6C6C] text-[16px] font-normal leading-[26px]">Square Pottery</p>
                    <span className="text-[#000] text-[14px] font-normal leading-[24px]">$ 75.00 USD</span>
                </div>
            </div>
            <button className="w-[214px] h-[62px] bg-[#AC1313] border-none flex pt-5 pl-10">
                <p className="text-[#FFF] text-[12px] font-bold leading-[22px] text-center uppercase"> View All Products</p>
            </button>
        </div>
        <div className="w-full h-[471px] bg-[url(./assets/images/bgImg2.png)] bg-no-repeat bg-cover">
            <div className="max-w-[1440px] m-auto h-[100%]">
                <div className=" pt-[121px] pl-[144px]">
                    <p className="text-[#D77474] text-[14px] font-normal leading-[24px] uppercase">Pompeo POttery</p>
                    <h1 className="text-[#000] text-[36px] font-semibold leading-[46px] pt-[7px]">Ready to start shopping?</h1>
                    <span className="text-[#6C6C6C] text-[16px] font-bold leading-[24px] pt-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />. Suspendisse varius enim in eros
                        elementum.</span><br />
                    <button className="mt-[30px] w-[195px] h-[62px] bg-[#AC1313] border-none text-[#FFF] text-[12px] font-bold uppercase leading-[22px]">New Collection</button>
                </div>
            </div>
        </div>
        <div className="max-w-[1440px] m-auto flex items-center flex-col pt-[122px]">
            <img src="./src/assets/images/sendMess.png" alt="" />
            <p className="text-[#D77474] text-center pt-10 text-[14px] font-normal leading-6 uppercase">Latest news</p>
            <h1 className="text-[#000] text-center text-[40px] font-normal leading-[50px] pt-8px flex gap-2 mt-4">Latest news <Ico/> New updates</h1>
            <div className="flex items-center gap-1 pt-[63px]">
                <input className="w-[320px] h-[45px]  pl-5 borde" type="text" placeholder="Enter your email" />
                <button className="w-[175px] h-[45px] bg-[#000] text-white text-center text-[14px] font-normal leading-5">SUBSCRIBE</button>
            </div>
            <div className="pt-10 flex gap-[10px] pb-[162px] items-center">
            <div className="w-[13px] h-[13px] bg-[#8534FF]"></div>
                <span className="text-[#A1A1A1] text-center text-[14px] font-normal leading-5">Sign up for our newsletter </span>
            </div>
        </div>
</main>
        <footer className="w-full h-[611px]">
            <div className="max-w-[1440px] h-[100%] m-auto bg-[#DBDBDB1A]">
                <div className="flex flex-col items-center pt-[107px] gap-[30px]">
                    <Logo/>
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
      </>
    ); 
}

export default App;
