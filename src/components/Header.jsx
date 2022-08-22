import React from 'react'

const Header = () => {
  return (
    <div className="flex w-screen">

      {/**Section One */}
      <div className="bg-[#00095F] w-[60%] h-auto px-[6vw] py-6">
        <img src="/assets/template__logo.svg" alt="logo" className='w-[12rem]' />
        <div className="mt-[15vh] text-white">
          <h2 className="text-[60px] w-[35vw]">
            Now It&apos;s Time To Find 
            <span className="text-[#5ABAFF]"> Your Home</span> 
          </h2>
          <p className="text-[20px] w-[45vw] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, ultricies viverra faucibus eget senectus pellentesque. Mauris, platea cras libero lorem eget turpis ullamcorper aliquet nisi. Varius duis nunc, pellentesque amet, natoque ultrices accumsan. Fermentum eu mattis dolor, sagittis velit int</p>
          <button className="flex items-center px-10 py-4 text-[18px] mt-14 bg-[#5ABAFF] space-x-6">
              <span>Get Started</span>
              <img src="/assets/arrow__Vector.svg" alt="arrow vector" className="w-[1.5rem]" />
          </button>

          <div className="flex space-x-4 mt-[10vh] items-center">
            <img src="/assets/headerImg__Two.svg" alt="headerImg__Two" className="w-[2.5rem]" />
            <span className="uppercase text-[22px] whitespace-pre tracking-wide">Your     House     Colony</span>
          </div>
        </div>
      </div>

      {/**Section Two */}
      <div className="bg-[url('/public/assets/headerImg__One.svg')] bg-center bg-cover bg-no-repeat h-screen items-center justify-center w-[40%]">
        <div className="flex space-x-8 text-white px-14 py-6 text-[16px] tracking-wide">
          <span>Home</span>
          <span>New Estate</span>
          <span>Tops</span>
          <span>Latest</span>
        </div>
      </div>
    </div>
  )
}

export default Header
