import Image from 'next/image'
import React from 'react'

const Worlflow = () => {
  return (
    <div>
      {/* <div>
      <div className='flex max-[376px]:flex-row-reverse  '>
        <div className='flex-[40%] border-2'>
           <Image
                  src="/Images/Group 681.png"
                  alt="cureveLine"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto"
                  priority
                />
        </div>
        <div
          className='flex-[60%] border-2'
        >
           <Image
                  src="/Images/Group 669.png"
                  alt="cureveLine"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto"
                  priority
                />
          
        </div>
      </div>
      <div className='flex max-[376px]:flex-row-reverse'>
       <div className='flex-[60%] border-2'>
          <Image
                  src="/Images/Group 212.png"
                  alt="cureveLine"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto"
                  priority
                />
        </div>
        <div
          className='flex-[40%] border-2'
        >
           <Image
                  src="/Images/Group 679.png"
                  alt="cureveLine"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto"
                  priority
                />
        </div>
      </div>

    </div> */}

      <div>
        <div
          className="relative  border-gray-800 border-2 mx-5 rounded-3xl flex flex-col justify-center mt-6 items-start p-6 text-white bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(33,164,164,0.6), rgba(0,0,0,0.2)), url('/Images/Group 669.png')`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            height: "200px",
          }}
        >
          <div className="w-60 flex flex-col ml-20 -mt-20 md:w-80 md:ml-70">
            <h1 className="text-sm font-bold md:text-3xl">Analytics & Reporting</h1>
            <p className="mt-2 max-w-md text-xs md:text-sm">
              Generate real-time reports, identify key performance indicators, and make
              data-driven decisions for continuous improvement.
            </p>
          </div>
        </div>


        <div className='flex mt-6 mx-2 '>
          <div
            className="  border-gray-800 border-2 w-40 rounded-3xl ml-2 text-white sm:w-72 md:w-90 "
            style={{ 
              backgroundImage: `url('/Images/Group 681.png'), url('/Images/Mask group.png') `,
              backgroundPosition: "bottom,bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%,100%",
              height: "200px",
            }}
          >
            <div className="w-35 sm:w-60  p-3 flex flex-col ">
              <h1 className="text-sm font-bold md:text-3xl">Project</h1>
              <p className="mt-2 max-w-md text-xs md:text-sm">
               Easily organize tasks, set deadlines, and track progress in real-time with Ease.
              </p>
            </div>
          </div>

          <div
            className=" relative  border-gray-800 border-2 w-40  rounded-3xl ml-5 text-white sm:w-72 md:w-90"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(33,164,164,0.6), rgba(0,0,0,0.2)), url('/Images/Group 679.png'),url('/Images/Mask group1.png')`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%,100%",
              height: "200px,200px",
            }}
          >
            <div className="w-35 sm:w-40 md:w-70   p-3 flex flex-col mt-13 ">
              <h1 className="text-sm font-bold md:text-3xl">Developer Mindset</h1>
              <p className="mt-2 max-w-md text-xs md:text-sm">
               Stay curious embrace challenges, and keep learning to grow as a developer
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative border-gray-800 border-2 mx-5 rounded-3xl flex flex-col justify-center mt-6 mb-7 items-start p-6 text-white bg-cover bg-center"
          style={{
            backgroundImage: `radial-gradient(circle at bottom, rgba(33,164,164,0.6), rgba(0,0,0,0.2)), url('/Images/Group 212.png')`,
            backgroundPosition: "bottom,right bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%,80%",
            height: "200px",
          }}
        >
          <div className="w-60 flex flex-col  -mt-20 md:w-80 md:ml-70">
            <h1 className="text-sm font-bold md:text-3xl">Your Workflow</h1>
            <p className="mt-2 max-w-md text-xs md:text-sm">
              Automate repetitive tasks and streamline your workflow with our powerful automation features. Reduce manual effort, eliminate error
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Worlflow