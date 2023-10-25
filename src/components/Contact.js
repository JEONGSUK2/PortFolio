import React from 'react'


// 피시버전에서 쓰기 relative right-[65%]   animate-spin-slow
function Contact() {
  return (
    <>
    <div className="mt-20 -skew-y-6">
      <div className="bg-white w-[70%] h-[250px] mx-auto flex items-center justify-center shadow-lg shadow-black">
        <div className="w-[90%] h-[65%] border border-black">
          <div className="flex p-2 -skew-y-1">
          <span className='font-bold text-6xl block'>C</span>
          <span className='block mt-7 font-bold text-2xl'>ON</span>
          <span className='block mt-7 font-bold text-2xl'>TACT</span>
          </div>
          <div className="div">
            <p>Eamil : dlwjdtjr3088@naver.com</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact