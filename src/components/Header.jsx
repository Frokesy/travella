import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between w-screen">
      <div className="bg-[#00095F] w-[60%] h-screen px-[6vw] py-6">
        <img src="/assets/template__logo.svg" alt="logo" className='w-[12rem]' />
        <div className="mt-[15vh] text-white">
          <h2 className="text-[60px] w-[30vw]">
            Now It&apos;s Time To Find 
            <span className="text-[#5ABAFF]"> Your Home</span> 
          </h2>
          <p className="text-[20px] w-[45vw] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sagittis, ultricies viverra faucibus eget senectus pellentesque. Mauris, platea cras libero lorem eget turpis ullamcorper aliquet nisi. Varius duis nunc, pellentesque amet, natoque ultrices accumsan. Fermentum eu mattis dolor, sagittis velit int</p>
        </div>
      </div>
      <div className="bg-[url('/public/assets/headerImg__One.svg')] bg-center bg-cover bg-no-repeat h-screen items-center justify-center w-[40%]">
        <div className="flex space-x-6 text-white px-20 py-6 text-[14px] tracking-wide">
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
