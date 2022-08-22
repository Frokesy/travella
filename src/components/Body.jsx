import React from 'react'

const Body = () => {
  return (
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
      </div>
            <div className="w-[60%]">
            <div className="relative flex w-[50vw] mt-[6vh] justify-end">
                <div className="">
                 <img src="/assets/bodyImg__Two.svg" alt="img" className="absolute top-20 h-[60vh] right-[10vw]" /> 
                 <img src="/assets/bodyImg__One.svg" alt="" className="absolute top-[35vh] right-[26vw] h-[45vh]" />

                </div>
                 <img src="/assets/bodyImg__Three.svg" alt="img" className="h-[80vh] w-auto" />
                </div>
            </div>
           </div>
  )
}

export default Body
