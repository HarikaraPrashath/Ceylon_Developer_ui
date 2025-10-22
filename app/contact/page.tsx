import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Building2 } from 'lucide-react';


const page = () => {
  return (
    <div>
      <div
        className="relative  flex flex-col h-[30%] text-white"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "500px, 600px mt-20",
        }}
      >
        <Navbar />

        <h1 className="text-4xl mt-10 text-center font-semibold sm:mt-15 ">Contact Us</h1>
      </div>
      <div className="px-5 sm:mx-[2rem] mx-5 xl:mx-[10rem]">
        <p className=" text-center w-80 mx-auto mt-5 sm:w-120">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>

        {/* main content  */}
        <div className="mt-10 mx-1 sm:mx-[1rem] md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] ">
          <h1 className=" text-center  text-2xl sm:text-[1.8rem]">
            We&apos;re Here to
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Help
            </span>{" "}
          </h1>
          <p className="mt-5 text-center">
            Our team is ready to support you with expert advice & solutions.
          </p>

          <div className="rounded-2xl border p-5 border-gray-700 bg-gradient-to-tr from-gray-900 to-gray-950 mt-10  sm:mx-[0.2rem] xl:p-[4rem] ">
            <form>
              <div>
                <div className="md:flex md:flex-row md:justify-between ">
                  {/* name */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Name *</label>
                    <input type="text" placeholder="David Johanson" className="pb-1 bg-transparent border-b border-gray-700 focus:outline-none text-sm" />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col mb-4  md:w-[48%]">
                    <label className="py-1">Email *</label>
                    <input type="email" placeholder="example@gmail.com" className="pb-1 bg-transparent border-b border-gray-700 focus:outline-none text-sm" />
                  </div>

                </div>
                {/* Company Name */}
                <div className="flex flex-col mb-4">
                  <label className="py-1">Company Name  *</label>
                  <input type="text" placeholder="Ex: StaticMania" className="pb-1 bg-transparent border-b border-gray-700 focus:outline-none text-sm" />
                </div>
              </div>
              <div>
                <div className="md:flex md:flex-row md:justify-between">
                  {/* Select Service */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Select Service *</label>
                    <select className="pb-1 bg-transparent border-b border-gray-700 focus:outline-none text-sm">
                      <option value="" disabled selected>
                        Select a Service
                      </option>
                      <option value="haircut" className="text-black">Haircut</option>
                      <option value="facial" className="text-black">Facial</option>
                      <option value="massage" className="text-black">Massage</option>
                      <option value="manicure" className="text-black">Manicure</option>
                      <option value="pedicure" className="text-black">Pedicure</option>
                    </select>
                  </div>


                  {/* Project Budget */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Project Budget *</label>
                    <select className="pb-1 bg-transparent border-b border-gray-700 focus:outline-none text-sm">
                      <option value="" disabled selected>
                        Select a Service
                      </option>
                      <option value="haircut" className="text-black">Haircut</option>
                      <option value="facial" className="text-black">Facial</option>
                      <option value="massage" className="text-black">Massage</option>
                      <option value="manicure" className="text-black">Manicure</option>
                      <option value="pedicure" className="text-black">Pedicure</option>
                    </select>
                  </div>


                </div>
                {/* Project Details */}
                <div className="flex flex-col mb-4">
                  <label className="py-1">Project Details *</label>
                  <input type="text" placeholder="Tell us more about your project " className="pb-1 text-sm bg-transparent border-b border-gray-700 focus:outline-none" />
                </div>
              </div>

              <div className="sm:flex sm:flex-row sm:justify-between">
                <div className="bg-custom-cyan text-black w-30  text-center mx-auto m-5 sm:m-[0.6rem] rounded-lg py-1 font-semibold ">
                  <button type="button" className="sm:text-sm">
                    Get Started
                  </button>
                </div>

                <p className="mt-5 text-center text-xs">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>

          {/* contact info */}
          <div className="sm:flex sm:flex-row sm:justify-between">
            <div className="text-center mt-10">
              <div className="h-15 w-15 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-950 mx-auto rounded-full flex items-center justify-center">
                <Mail className="text-gray-300" size={20} />
              </div>
              <div className="text-xs mt-2">
                <h1 className="font-semibold text-gray-200">Email</h1>
                <p className="text-gray-400">customer@gmail.com</p>
                <p className="text-gray-400">client@automx.com</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="h-15 w-15 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-950 mx-auto rounded-full flex items-center justify-center">
                <Phone className="text-gray-300" size={20} />
              </div>
              <div className="text-xs mt-2">
                <h1 className="font-semibold text-gray-200">Phone</h1>
                <p className="text-gray-400">+94 71 5672 890</p>
                <p className="text-gray-400">+94 71 5672 890</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="h-15 w-15 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-950 mx-auto rounded-full flex items-center justify-center">
                <Building2 className="text-gray-300" size={20} />
              </div>
              <div className="text-xs mt-2">
                <h1 className="font-semibold text-gray-200">Head Office</h1>
                <p className="text-gray-400">5899 Alexys Highway Suite  </p>
                <p className="text-gray-400">678, NR, Nevada, USA</p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2  pt-5 px-4 mx-3 mt-15 rounded-2xl sm:w-100 sm:mx-auto lg:w-160 xl:w-190">
            <h1 className=" text-center  text-2xl lg:text-3xl">
              Let&apos;s Turn Your
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Dream
              </span>{" "}
              into
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Reality
              </span>{" "}
            </h1>

            <p className="text-center mt-6 w-59 text-xs sm:mx-auto sm:w-70">
              Pushing the boundaries of what&apos;s possible in the digital real.
              Join us this journey into the future of technology
            </p>

            <div className="bg-custom-cyan text-black w-30  text-center mx-auto m-5 rounded-sm py-1 font-semibold ">
              <button type="button" className="sm:text-sm">
                Booking us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
