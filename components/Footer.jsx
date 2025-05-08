import React from "react";



function Footer() {









    return (
        <div className="w-full mt-8 h-50 bg-[#F8F8F8] flex justify-evenly gap-2 items-baseline pt-7">
            <div className="flex flex-col pl-5">
                <h1 className="text-[10px] font-bold lg:text-2xl">Help & Information</h1>
                <div className="text-[8px] font-medium lg:text-xs">
                    <p className="cursor-pointer my-1">Help</p>
                    <p className="cursor-pointer my-1">Track order</p>
                    <p className="cursor-pointer my-1">Delivery & return</p>
                    <p className="cursor-pointer my-1">ASOS Premier</p>
                    <p className="cursor-pointer my-1">10% Student Discount</p>
                    <p className="cursor-pointer my-1">Sitemap</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[10px] font-bold lg:text-2xl">About ASOS</h1>
                <div className="text-[8px] font-medium lg:text-xs">
                    <p className="cursor-pointer my-1">About us</p>
                    <p className="cursor-pointer my-1">CareerS at ASOS</p>
                    <p className="cursor-pointer my-1">Corporate responsibility</p>
                    <p className="cursor-pointer my-1">Investors' siter</p>
                    <p className="cursor-pointer my-1">Cyber Security</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[10px] font-bold lg:text-2xl">More From ASOS</h1>
                <div className="text-[8px] font-medium lg:text-xs">
                    <p className="cursor-pointer my-1">Mobile and ASOS apps</p>
                    <p className="cursor-pointer my-1">Gift vouchers</p>
                    <p className="cursor-pointer my-1">Corporate gift vouchers</p>
                    <p className="cursor-pointer my-1">Discover the ASOS Credit Card</p>
                    <p className="cursor-pointer my-1">Discover the ASOS Credit Card</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[10px] font-bold lg:text-2xl">Social Media</h1>
                <div className="w-6 h-6 lg:w-12 lg:h-12 ">
                    <img className="cursor-pointer" src="src\assets\icons8-instagram-logo-94.png" />
                    <img className="cursor-pointer" src="src\assets\icons8-facebook-logo-94.png" />
                    <img className="cursor-pointer" src="src\assets\icons8-telegram-48.png" />
                </div>
            </div>
        </div>

    )
}

export default Footer;