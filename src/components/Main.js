import React from 'react'

function Main() {


    return (
        <>
            <div className="Logo font-bold text-2xl text-center relative">LEE JEONG SEOK</div>
            <div className="flex mt-44">
                <div className='h-96 w-full mx-auto' style={{
                    backgroundImage: `url(/assets/title_images.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "500px",
                    height: "500px",
                    opacity: 0.7,
                }}>
                </div>
                <div className="absolute top-[40%] w-full ">
                   <ul className="w-full">
                    <li className='backdrop-filter backdrop-blur-md backdrop-contrast-[1.1] w-40  h-40 flex flex-col justify-between absolute bottom-[90%] left-4 z-20 '>
                        <span className='block text-center font-bold text-xl mt-3'>About</span>
                        <p className='px-2'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-right bg-black text-white opacity-[0.8] py-1 text-sm'>Read More <span>👀</span></p>
                        </li>
                    <li className=' backdrop-filter backdrop-blur-md backdrop-contrast-[1.8]  w-40 h-40 flex flex-col justify-between absolute top-[-20px] left-10'>
                        <span className='block text-center font-bold text-xl mt-6'>SKILL</span>
                        <p className='px-2'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-right bg-black text-white opacity-[0.8] py-1 text-sm'>Read More <span>👀</span></p>
                        </li>
                    <li className=' backdrop-filter backdrop-blur-md backdrop-contrast-[1.8]  h-40 w-44 flex flex-col justify-between absolute left-[66%] z-10 '>
                        <span className='block text-center font-bold text-xl mt-3 '>ProJect</span>
                        <p className='px-2'>Lorem ipsum dolor sit amet.</p>
                        <p className=' text-right bg-black text-white opacity-[0.8] py-1 text-sm'>Read More <span>👀</span></p>
                        </li>
                    <li className=' absolute top-[100px] left-[50%] opacity-[0.8]'><img src="/assets/nature_images.png " alt="images"
                    className='w-56 h-89 border-l-neutral-800'
                    /></li>
                    <li><img src="/assets/profile_images.png" alt="" className='w-28 absolute right-10 bottom-9 border-1'/></li>
                   </ul>
                </div>
            </div>
        </>
    )
}

export default Main