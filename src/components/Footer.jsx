import React from 'react'

const Footer = () => {
  return (
    <div> 
      <div className="w-[90vw] mt-[25vh] mx-auto bg-[url('/public/assets/footerImg__One.svg')] bg-center bg-cover bg-no-repeat p-20 items-center justify-center">
      <div className="w-[70vw] pt-6 mx-auto bg-[url('/public/assets/imgBlur.svg')] bg-center bg-cover bg-no-repeat items-center justify-center">
            <span className="flex items-center justify-center opacity-100 text-center text-[#00095F] text-[32px] font-bold">Let&apos;s stay in touch</span>
            <p className="font-semibold text-[20px] my-3 flex justify-center">Enjoy 15% off your first order when you join our mailing list.</p>

            <div className="flex justify-center w-[30vw] mt-10 mb-16 mx-auto">
                <input type="email" name="email" className="mt-1 px-4 py-3 bg-transparent border shadow-sm border-[#0F5FA9] focus:outline-none w-full focus:border-sky-500 placeholder:text-black focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Enter your email address" />
             
                <button className="px-6 py-2 uppercase text-[13px] bg-[#0F5FA9] text-white">
                    Subscribe
                </button>
            </div>

            <p className="flex justify-center text-[15px] pb-14 font-semibold">We respect your privacy so we never share your info</p>
        </div>
      </div>

      {/**Footer */}
      <div className="w-screen bg-[#00095F] mt-[10vh]">
        <div className="flex w-[80vw] text-white mx-auto pt-14 space-x-[10vw]">
            <div className="flex flex-col space-y-2">
                <h2 className="text-[20px] mb-4">Contact Info</h2>
                <span className="text-[13px] text-[#5ABAFF]">Phone: +24567812456</span>
                <span className="text-[13px] text-[#5ABAFF]">Address: OJO, okoko From Nigeria</span>
            </div>

            <div className="flex flex-col space-y-2">
                <h2 className="text-[20px] mb-4">Get Help</h2>
                <span className="text-[13px] text-[#5ABAFF]">Delivery Information</span>
                <span className="text-[13px] text-[#5ABAFF]">Sales Terms and Conditions</span>
                <span className="text-[13px] text-[#5ABAFF]">Returns and Refunds</span>
                <span className="text-[13px] text-[#5ABAFF]">Privacy Notice</span>
                <span className="text-[13px] text-[#5ABAFF]">Shopping FAQ&apos;s</span>
            </div>

            <div className="flex flex-col space-y-2">
                <h2 className="text-[20px] mb-4">Popular Categories</h2>
                <span className="text-[13px] text-[#5ABAFF]">Homes(45)</span>
                <span className="text-[13px] text-[#5ABAFF]">Doors(275)</span>
                <span className="text-[13px] text-[#5ABAFF]">House(64)</span>
                <span className="text-[13px] text-[#5ABAFF]">Gallery(125)</span>
                <span className="text-[13px] text-[#5ABAFF]">Chairs(25)</span>
            </div>

            <div className="flex flex-col space-y-2">
                <h2 className="text-[20px] mb-4">We Accept:</h2>
                <div className="flex space-x-4">
                    <img src="/assets/footerImg__PayPal.svg" alt="PayPal" className="w-[2rem]" />
                    <img src="/assets/footerImg__Visa.svg" alt="Visa" className="w-[2rem]" />
                    <img src="/assets/footerImg__MasterCard.svg" alt="MasterCard" className="w-[2rem]" />
                </div>
            </div>
        </div>

        {/**Copyright 2022 */}

        <p className="flex justify-center text-[#5ABAFF] mt-[10vh] pb-4 text-15px">&#169;. All rights reserved. travella.com</p>
      </div>
    </div>
  )
}

export default Footer
