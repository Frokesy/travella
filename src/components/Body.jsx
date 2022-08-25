import React from 'react'

const Body = () => {
  return (
      <div>
            <div className="flex flex-col lg:flex-row justify-between w-[90vw] mx-auto">
      <div className=" lg:mt-[15vh] mt-[10vh]">
        <h2 className="text-[26px] font-bold">Collection in 2022</h2>
        <div className="flex flex-col -space-y-2 mt-10 font-semibold text-[36px] lg:text-[40px]">
            <p>Rich Home</p>
            <p className="text-[#00095F]">Your First Choice</p>
            <p>From $150K</p>
        </div>
        <p className="mt-6 lg:w-[25vw] w-full text-[15px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, ultricies viverra faucibus eget senectus pellentesque. Mauris, platea cras liberormentum eu mattis dolor, sagittis velit int
        </p>

        <button className="flex items-center px-10 py-4 text-[13px] lg:text-[18px] mt-14 bg-[#5ABAFF] text-white space-x-6">
              <span>Get Started</span>
              <img src="/assets/arrow__Vector.svg" alt="arrow vector" className="w-[1.5rem]" />
          </button>
      </div>
            <div className="lg:mt-6 lg:mb-0 mb-10">
            <div className="relative flex ml-[20vw] lg:ml-0 lg:w-auto w-[90vw] mx-auto lg:mt-[6vh]">
                <div className="">
                 <img src="/assets/bodyImg__Two.svg" alt="img" className="absolute lg:top-20 top-[10vh] right-[35vw] lg:w-auto w-[80%] lg:h-[60vh] lg:right-[10vw]" /> 
                 <img src="/assets/bodyImg__One.svg" alt="" className="absolute lg:top-[35vh] top-[18vh] lg:right-[26vw] right-[53vw] lg:h-[45vh] lg:w-auto w-[75%]" />

                </div>
                 <img src="/assets/bodyImg__Three.svg" alt="img" className="lg:h-[80vh] lg:w-auto w-[75vw] w-auto" />
                </div>
            </div>
           </div>



           {/**About Section*/}
           <div className="lg:mt-[8vh] mt-20 lg:flex w-[90vw] mx-auto lg:justify-center">
              <div className="flex lg:flex-row flex-col lg:space-x-6 lg:mr-[3vw]">
                <div className="lg:mt-[6vh] lg:flex hidden flex-col space-y-4">
                    <img src="/assets/bodyImg__Four.svg" alt="img" className="" />
                    <img src="/assets/bodyImg__Five.svg" alt="img" className="" />
                </div>
                <div className="bg-[#00095F] lg:w-[auto] w-[90vw]">
                  <div className="pt-16 pb-[12vh] lg:px-10 px-6 text-white">
                    <h2 className="text-[24px]">About Us</h2>
                    <div className="flex flex-col space-y-8 lg:w-[20vw] pt-10">
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
                    <button className="flex items-center px-10 py-2 uppercase text-[18px] mt-16 bg-[#5ABAFF] text-white space-x-6">
                        Read More
                    </button>
                  </div>
                </div>
                <div className="mt-[6vh]">
                  <img src="/assets/bodyImg__Six.svg" alt="img" className="h-[40vh] object-cover w-full"/>
                  <div className="flex flex-col -space-y-2 font-bold">
                    <span className="text-[24px]">Soft and cozy</span>
                    <span className="text-[#5ABAFF] text-[24px]">Estate Awesome</span>
                  </div>
                  <div className="lg:w-[20vw]">
                    <span className="text-[16px] font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit egestas dignissim pellentesque feugiat etiam donec vivamus. Diam et aliquet f
                    </span>
                  </div>
                </div>
              </div>
           </div>


           {/**Section Three */}
           <div className="lg:flex hidden w-screen mt-[10vh]">
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


          {/**Section Three -- Mobile */}
          <div className="lg:hidden w-screen mt-[10vh]">
           <div className="bg-[url('/public/assets/bodyImg__Seven.svg')] bg-center bg-cover bg-no-repeat  items-center justify-center">
              <div className="flex flex-col lg:text-[40px] text-[30px] -space-y-2 text-white lg:px-20 px-10 py-10">
              <span>We Know</span>
              <span><span className="text-[#5ABAFF]">&amp; Understand</span> your</span>
              <span>great choice</span>
              </div>
              <p className="text-white text-[16px] font-light lg:w-[40vw] lg:px-20 px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem gravida dui molestie consectetur id pulvinar elit. Nisl etiam dictum nunc ante. Nunc tortor massa nunc risus nec quam. Sed in turpis proin integer justo sit vitae quam. Praesent augue in odio tristique cursus mattis sapien. Eu quis nisi euismod porttitor 
              </p>

              <div className="mt-14 flex space-x-4 px-2 pb-20 ">
                <img src="/assets/roundArrow__Left.svg" alt="img" />
                <img src="/assets/bodyImg__Eight.svg" alt="img" className="lg:block hidden" />
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
