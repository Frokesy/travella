import React from 'react'

const Body = () => {
  return (
      <div>
            <div className="flex justify-between">
      <div className="w-[40%] mt-[20vh]  px-[6vw]">
        <h2 className="text-[26px] font-bold">Collection in 2022</h2>
        <div className="flex flex-col -space-y-2 mt-10 font-semibold text-[40px]">
            <p>Rich Home</p>
            <p className="text-[#00095F]">Your First Choice</p>
            <p>From $150K</p>
        </div>
        <p className="mt-6 w-[25vw] text-[15px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, ultricies viverra faucibus eget senectus pellentesque. Mauris, platea cras liberormentum eu mattis dolor, sagittis velit int
        </p>

        <button className="flex items-center px-10 py-4 text-[18px] mt-14 bg-[#5ABAFF] text-white space-x-6">
              <span>Get Started</span>
              <img src="/assets/arrow__Vector.svg" alt="arrow vector" className="w-[1.5rem]" />
          </button>
      </div>
            <div className="w-[60%] mt-14">
            <div className="relative flex w-[50vw] mt-[6vh] justify-end">
                <div className="">
                 <img src="/assets/bodyImg__Two.svg" alt="img" className="absolute top-20 h-[60vh] right-[10vw]" /> 
                 <img src="/assets/bodyImg__One.svg" alt="" className="absolute top-[35vh] right-[26vw] h-[45vh]" />

                </div>
                 <img src="/assets/bodyImg__Three.svg" alt="img" className="h-[80vh] w-auto" />
                </div>
            </div>
           </div>



           {/**About Section*/}
           <div className="mt-[10vh] h-[90vh]">
              <div className="flex px-[6vw] gap-6">
                <div className="mt-[6vh] flex flex-col space-y-4">
                    <img src="/assets/bodyImg__Four.svg" alt="img" className="" />
                    <img src="/assets/bodyImg__Five.svg" alt="img" className="" />
                </div>
                <div className="bg-[#00095F]">
                  <div className="pt-14 px-10 text-white">
                    <h2 className="text-[24px]">About Us</h2>
                    <div className="flex flex-col space-y-8 w-[20vw] pt-10">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi vestibulum enim nullam nam arcu sed convallis. Aliquam rhoncus tincidunt faucibus interdum sed sit eget. Eget eu pharetra, bibendum vitae luctus morbi. Eleifend aliquam morbi turpis vitae. Arcu vestibulum rhoncus diam commodo nunc sit eget donec nec
                      </p>
                      <p>
                        Vel facilisis sagittis, donec sed. Faucibus phasellus quis et adipiscing lorem lorem. Nunc tellus enim nulla est, vitae aliquet enim. In 
                      </p>
                      <p>
                        condimentum ipsum sed aliquet hendrerit blandit. Vitae placerat viverra cras aliquam euismod donec auctor vel auctor. Nunc a.
                      </p>
                    </div>
                    <button className="flex items-center px-10 py-2 uppercase text-[18px] mt-24 bg-[#5ABAFF] text-white space-x-6">
                        Read More
                    </button>
                    <div className="mt-[10vh]"></div>
                  </div>
                </div>
                <div className="mt-[6vh] w-[25vw]">
                  <img src="/assets/bodyImg__Six.svg" alt="img" className="h-[40vh] object-cover w-full"/>
                  <div className="flex flex-col -space-y-2 font-bold">
                    <span className="text-[24px]">Soft and cozy</span>
                    <span className="text-[#5ABAFF] text-[24px]">Estate Awesome</span>
                  </div>
                  <div className="w-[20vw]">
                    <span className="text-[16px] font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas dignissim pellentesque feugiat etiam donec vivamus. Diam et aliquet f
                    </span>
                  </div>
                </div>
              </div>
           </div>


           {/**Section Three */}
           <div className="flex w-screen mt-[10vh]">
           <div className="bg-[url('/public/assets/bodyImg__Seven.svg')] bg-center bg-cover bg-no-repeat  items-center justify-center w-[40%]">
              </div>
            <div className="w-[60%] bg-[#00095F]">
              <div className="flex flex-col text-[40px] -space-y-2 text-white px-20 py-10">
              <span>We Know</span>
              <span><span className="text-[#5ABAFF]">&amp; Understand</span> your</span>
              <span>great choice</span>
              </div>
              <p className="text-white text-[16px] font-light w-[40vw] px-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem gravida dui molestie consectetur id pulvinar elit. Nisl etiam dictum nunc ante. Nunc tortor massa nunc risus nec quam. Sed in turpis proin integer justo sit vitae quam. Praesent augue in odio tristique cursus mattis sapien. Eu quis nisi euismod porttitor 
              </p>

              <div className="mt-14 flex space-x-10 px-20 mb-[10vh]">
                <img src="/assets/roundArrow__Left.svg" alt="img" />
                <img src="/assets/bodyImg__Eight.svg" alt="img" />
                <img src="/assets/bodyImg__Nine.svg" alt="img" />
                <img src="/assets/bodyImg__Ten.svg" alt="img" />
                <img src="/assets/roundArrow__Right.svg" alt="img" />
              </div>
            </div>
           </div>
      </div>
  )
}

export default Body
