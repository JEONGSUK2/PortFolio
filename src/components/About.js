import React from 'react'

function About() {
  return (
    <>
    <div className="flex flex-col h-full ">
      <div className='w-full mx-auto mt-60 basis-[30%] flex items-center justify-center' style={{
                    backgroundImage: `url(/assets/developer_images.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center", 
                    opacity: "0.9"
                }}>
                <span className='text-white text-3xl'>About</span>
                </div>
                <div className="div"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, et! Dicta molestiae nesciunt, cum delectus facere illo natus nam animi, minima sint non autem ad, totam magnam a quas corrupti?</span></div>
            </div>
            
    </>
  )
}

export default About