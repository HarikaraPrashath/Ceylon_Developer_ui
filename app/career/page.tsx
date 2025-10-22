import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Podcast } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock12 } from 'lucide-react';
import { ChartSpline } from 'lucide-react';
import { ChartArea } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';



const page = () => {
  return (
    <div className="">
      <div
        className="relative  flex flex-col h-[30%] text-white "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "200px",
        }}
      >
        <Navbar />

        <h1 className=" text-4xl font-semibold  text-center mt-20 ">
          Career
        </h1>
      </div>
      <div className="px-5 xl:mt-20  ">
        <p className=" text-center text-xs mx-auto w-80 sm:mt-10   max-w-[1440px] ">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>

        {/* main content */}
        <div className="mt-10 mx-4 md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] ">
          <div className="text-center mt-8   ">
            <h1 className="text-2xl">
              <span className="">
                Discover Why
                <span className="[font-family:var(--font-kaushan)] px-2">
                  Ceylon Developers
                </span>
              </span>
              <span className="">is the Premier Destination for Advancing Your</span>
              <span className="[font-family:var(--font-kaushan)] px-2">Career
              </span>
            </h1>
          </div>


          <div>
            <ul className="mt-6">
              <li className="my-2 text-lg">We are growing fast</li>
              <li className="my-2 text-lg">Flexible hours</li>
              <li className="my-2 text-lg">Work from anywhere.</li>
              <li className="my-2 text-lg">Paid vacations</li>
            </ul>

            <p className="text-xs mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. </p>

            <div className="mt-2 text-center">
              <button type="button" className="bg-custom-cyan cursor-pointer text-black py-2 px-3 rounded-lg ">About Company</button>
            </div>
          </div>

          <div className="text-center mt-8 mb-3  ">
            <h1 className="text-3xl">
              <span className="">
                Our
                <span className="[font-family:var(--font-kaushan)] px-2">
                  Streamlined
                </span>
              </span>
              <span className="">Hiring Process</span>
            </h1>
          </div>

          {/* steps showcase */}
          <div className="flex">
            <div className="flex flex-col justify-start  mt-25  mr-4 gap-8">
              <div className="rounded-full w-3 h-3 bg-cyan-300 "></div>
              <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto"></div>
              <div className="rounded-full w-3 h-3 bg-cyan-300 "></div>
                <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto"></div>
              <div className="rounded-full w-3 h-3 bg-cyan-300 "></div>
                <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto"></div>
              <div className="rounded-full w-3 h-3 bg-cyan-300 "></div>
                <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto"></div>
              <div className="rounded-full w-3 h-3 bg-cyan-300 "></div>
            </div>

            <div className="">
              <div className="mt-3 mb-10 ">
                {/*outer-line*/}
                <div className="rounded-xl w-70  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-center">
                    <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                      <Podcast className="text-custom-cyan w-6 h-6" />
                    </div>
                    <h1 className="text-xl my-3">Apply with Your CV</h1>
                    <p className="text-sm my-3">We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 ">
                {/*outer-line*/}
                <div className="rounded-xl w-70  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-center">
                    <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                      <ChartSpline className="text-custom-cyan w-6 h-6" />
                    </div>
                    <h1 className="text-xl my-3">Initial Screen</h1>
                    <p className="text-sm my-3">We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 ">
                {/*outer-line*/}
                <div className="rounded-xl w-70  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-center">
                    <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                      <ChartArea className="text-custom-cyan w-6 h-6" />
                    </div>
                    <h1 className="text-xl my-3">Skills Assessment</h1>
                    <p className="text-sm my-3">We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className=" mb-10">
                {/*outer-line*/}
                <div className="rounded-xl w-70  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-center">
                    <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                      <Podcast className="text-custom-cyan w-6 h-6" />
                    </div>
                    <h1 className="text-xl my-3">Interview Process</h1>
                    <p className="text-sm my-3">We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
               <div className=" mb-10">
                {/*outer-line*/}
                <div className="rounded-xl w-70  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-center">
                    <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                      <BriefcaseBusiness className="text-custom-cyan w-6 h-6" />
                    </div>
                    <h1 className="text-xl my-3">Final Decision</h1>
                    <p className="text-sm my-3">We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* show case the role of position */}
            <div className="text-center mt-8 mb-6  ">
            <h1 className="text-3xl">
              <span className="">
                Find the
                <span className="[font-family:var(--font-kaushan)] px-2">
                  Best Role
                </span>
              </span>
              <span className="">for you</span>
            </h1>
          </div>

          <div className="">
            <div className="">
                {/*outer-line*/}
                <div className="rounded-xl w-80  p-[1px] bg-gradient-to-t from-gray-600 to-gray-200 ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-start px-5">
                    <h1 className="text-xl my-3">Software Developer</h1>
                    <p className="text-sm my-3 ">We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.</p>

                    <div className="flex flex-row mb-3 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1"><MapPin className="text-custom-cyan w-5" /> <p className="text-sm">Remote</p></div>
                        <div className="flex gap-1"><Clock12 className="text-custom-cyan w-5"/><p className="text-sm ">Full-Time</p></div>
                      </div>
                      <div>
                        <button type="button" className="bg-custom-cyan px-2 py-2 rounded-2xl mt-2 text-black font-semibold cursor-pointer">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                {/*outer-line*/}
                <div className="rounded-xl w-80  p-[1px] bg-gradient-to-t from-gray-600 to-gray-200 ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-start px-5">
                    <h1 className="text-xl my-3">Software Developer</h1>
                    <p className="text-sm my-3 ">We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.</p>

                    <div className="flex flex-row mb-3 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1"><MapPin className="text-custom-cyan w-5" /> <p className="text-sm">Remote</p></div>
                        <div className="flex gap-1"><Clock12 className="text-custom-cyan w-5"/><p className="text-sm ">Full-Time</p></div>
                      </div>
                      <div>
                        <button type="button" className="bg-custom-cyan px-2 py-2 rounded-2xl mt-2 text-black font-semibold cursor-pointer">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="mt-7">
                {/*outer-line*/}
                <div className="rounded-xl w-80  p-[1px] bg-gradient-to-t from-gray-600 to-gray-200 ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-start px-5">
                    <h1 className="text-xl my-3">Software Developer</h1>
                    <p className="text-sm my-3 ">We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.</p>

                    <div className="flex flex-row mb-3 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1"><MapPin className="text-custom-cyan w-5" /> <p className="text-sm">Remote</p></div>
                        <div className="flex gap-1"><Clock12 className="text-custom-cyan w-5"/><p className="text-sm ">Full-Time</p></div>
                      </div>
                      <div>
                        <button type="button" className="bg-custom-cyan px-2 py-2 rounded-2xl mt-2 text-black font-semibold cursor-pointer">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="mt-7">
                {/*outer-line*/}
                <div className="rounded-xl w-80  p-[1px] bg-gradient-to-t from-gray-600 to-gray-200 ">
                  <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-black text-start px-5">
                    <h1 className="text-xl my-3">Software Developer</h1>
                    <p className="text-sm my-3 ">We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.</p>

                    <div className="flex flex-row mb-3 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1"><MapPin className="text-custom-cyan w-5" /> <p className="text-sm">Remote</p></div>
                        <div className="flex gap-1"><Clock12 className="text-custom-cyan w-5"/><p className="text-sm ">Full-Time</p></div>
                      </div>
                      <div>
                        <button type="button" className="bg-custom-cyan px-2 py-2 rounded-2xl mt-2 text-black font-semibold cursor-pointer">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="text-center mt-4">  <button type="button" className="bg-custom-cyan px-4 py-2 rounded-lg mt-2 text-black font-semibold cursor-pointer">Explore More</button></div>
          </div>
      
       <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-4 px-2 mt-15 rounded-2xl">
       <h1 className="text-center mx-5 text-2xl">
          Take the
            <span className="[font-family:var(--font-kaushan)] pl-2">
              Next Step
            </span>{" "}
           in Your Career
          </h1>
          <p className="text-center mt-6 text-sm  mx-3 ">
            Pushing the boundaries of what&apos;s possible in the digital real.
            Join us this journey into the future of technology
          </p>
          <div className="bg-custom-cyan w-35 sm:w-45 flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10 text-lg">
            {/* Visible only on mobile (<640px) */}
            <button type="button" className="block sm:hidden">
              Book a call
            </button>

           
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
