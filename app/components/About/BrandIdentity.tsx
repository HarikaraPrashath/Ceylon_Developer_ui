import Image from "next/image";
import { Star } from "lucide-react";
import React from "react";

const BrandIdentity = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <div className="lg:hidden">
        {/* mobile and tab view */}
        <div>
          <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center mt-10">
            The identity of{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              our brand
            </span>{" "}
          </h1>
          <p className=" text-center sm:w-120 sm:mx-auto mt-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            nihil. Esse ut aperiam officia iure. Blanditiis incidunt.
          </p>

          <div>
            <div
              className="border-1 rounded-xl w-80 h-40 mx-auto mt-8 border-custom-cyan sm:w-120 sm:py-3 sm:h-50 px-3 "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="flex flex-row w-75 sm:w-120 ml-1">
                <div className="px-3 sm:py-5">
                  <h1 className="text-4xl text-custom-cyan font-semibold mb-3">
                    250+
                  </h1>

                  <p className="mb-3 text-xs">Experienced IT Experts</p>
                  <p className="mb-3 text-xs sm:w-25">
                    “Reduce operational costs while accessing”
                  </p>
                </div>
                <div className="py-2 sm:py-5 ">
                  <h1 className="text-xl  font-semibold mb-3  sm:ml-3">
                    Cost Efficiency
                  </h1>
                  <p className="mb-3 text-xs sm:w-60 sm:mb-4  sm:ml-3">
                    Requires less upfront investment than traditional CRM
                    systems.
                  </p>
                  <div className="flex flex-row">
                    <Image
                      src="/Images/BoxUser.png"
                      alt="img"
                      width={1020}
                      height={120}
                      priority
                      className="w-15 h-8 sm:w-20 sm:h-10 sm:ml-3 "
                    />
                    <div className=" text-xs w-20 ml-2 pt-2 bg-custom-cyan text-black mx-auto px-1 sm:pt-1 rounded-sm sm:w-40 sm:ml-5 sm:text-center sm:text-lg">
                      <button type="button" className="">
                        Get Proposal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* split container */}
        <div className="flex flex-row sm:gap-3 gap-4 sm:mx-auto md:mx-10 sm:-mr-10  ">
          <div
            className="border-1 rounded-xl w-38 h-55 sm:w-78 sm:h-75 mx-auto mt-8 border-custom-cyan md:w-60"
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2 sm:py-3 sm:px-3">
              <h1 className="pl-1">Our work area:</h1>
              <Image
                src="/Images/workArea.png"
                alt="workarea"
                width={1000}
                height={120}
                priority
                className="pt-5 ml"
              />
            </div>
          </div>

          <div
            className="border-1 rounded-xl w-38 h-55 mx-auto mt-8 border-custom-cyan sm:w-78 sm:h-75 md:w-60"
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2  md:ml-5">
              <h1 className="pl-1  text-lg pt-10 sm:pl-3">Reviewed on:</h1>
              <Image
                src="/Images/Search Engine.png"
                alt="Search Engine"
                width={50}
                height={120}
                priority
                className="pt-3 w-27 pl-1 sm:w-37 sm:pl-7"
              />
              <div className="flex flex-row pt-3 pl-1 w-30  sm:bg-gray-900 sm:ml-5 sm:w-35 sm:px-3 sm:pt-1 sm:rounded-xl sm:mt-5 sm:justify-center ">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
              </div>

              <div className="bg-custom-cyan text-black mt-3 text-center rounded-sm mx-1 py-0.5 sm:w-32 sm:ml-6">
                <button type="button">Get start Free</button>
              </div>
            </div>
          </div>
        </div>

        {/* final container */}

        <div>
          <div
            className="border-1 rounded-xl w-80 h-40 mx-auto mt-8 border-custom-cyan sm:w-120 sm:py-3 sm:h-50"
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-3 py-2 mx-2 sm:py-5 sm:px-5">
              <div className="flex flex-row ">
                <div className="w-35 sm:w-50 ">
                  <Image
                    src="/Images/clock.png"
                    alt="clock"
                    width={50}
                    height={120}
                    priority
                    className="pt-3 w-8 pl-1"
                  />
                  <h1 className="text-sm pt-1">24/7</h1>
                  <p className="text-xs pt-1 font-semibold">Support</p>
                  <p className="text-xs pt-1 sm:w-40">
                    Always available assistance fo customer inquiries anytime.{" "}
                  </p>
                </div>
                <div className="w-35 border-l-[0.5px]  border-dashed border-purple-600  pl-5 sm:w-50 ">
                  <Image
                    src="/Images/thumb.png"
                    alt="thumb"
                    width={50}
                    height={120}
                    priority
                    className="pt-3 w-8 pl-1"
                  />
                  <h1 className="text-sm pt-1">100%</h1>
                  <p className="text-xs pt-1 font-semibold">Scalability</p>
                  <p className="text-xs pt-1 sm:w-40">
                    Effortless grows with increasing demands and needs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for desktop view */}
      <div className="xl:hidden lg:block max-w-[1440px]  ">
        <div>
          <h1 className=" text-4xl text-center mt-10">
            The identity of{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              our brand
            </span>{" "}
          </h1>
          <p className=" text-center  mt-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            nihil. Esse ut aperiam officia iure. Blanditiis incidunt.
          </p>

          {/* container starting */}
          <div className="lg:flex lg:flex-row lg:gap-10">
            {/* cost efficiency container */}

            <div
              className="border-1 rounded-xl w-120 h-82  mt-8 border-custom-cyan  px-3 "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="flex flex-row ">
                <div className=" pl-2 pt-10 ">
                  <h1 className="text-6xl text-custom-cyan font-semibold mb-3">
                    250+
                  </h1>

                  <p className="mb-3 text-lg">Experienced IT Experts</p>
                  <p className="mb-3 text-lg w-40">
                    “Reduce operational costs while accessing”
                  </p>
                </div>
                <div className="py-2 pt-14 ">
                  <h1 className="text-2xl  font-semibold mb-3 ">
                    Cost Efficiency
                  </h1>
                  <p className="mb-3 text-lg w-70 pt-2 ">
                    Requires less upfront investment than traditional CRM
                    systems.
                  </p>
                  <div className="flex flex-row pt-8">
                    <Image
                      src="/Images/BoxUser.png"
                      alt="img"
                      width={1020}
                      height={120}
                      priority
                      className="w-17 h-8  "
                    />
                    <div className=" text-xs w-35 ml-2 pt-1 bg-custom-cyan text-black mx-auto px-1 rounded-sm text-center ">
                      <button type="button" className="text-lg  font-semibold">
                        Get Proposal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* work area container */}
            <div
              className="border-1 rounded-xl w-80  h-82  mt-8 border-custom-cyan "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className=" px-2 py-2 lg:w-200  ">
                <h1 className="pl-3 ">Our work area:</h1>
                <Image
                  src="/Images/workArea.png"
                  alt="workarea"
                  width={1000}
                  height={120}
                  priority
                  className="pt-2 w-60 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-10">
          <div
            className="border-1 rounded-xl w-80 h-82 mx-auto mt-8 border-custom-cyan "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2  ">
              <h1 className="text-center  text-xl pt-10 ">Reviewed on:</h1>
              <Image
                src="/Images/Search Engine.png"
                alt="Search Engine"
                width={50}
                height={120}
                priority
                className="pt-3 w-37 pl-1 text-center mx-auto"
              />
              <div className="flex flex-row py-2  pl-1  bg-gray-900  w-45 px-4 ml-15 rounded-xl mt-5 justify-center ">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
              </div>

              <div className="bg-custom-cyan text-black mt-10 text-center mx-auto w-50 font-semibold rounded-sm  py-0.5 ">
                <button type="button">Get start Free</button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="border-1 rounded-xl  mx-auto mt-8 border-custom-cyan w-120 h-82"
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className=" px-3 py-2 ml-5">
                <div className="flex flex-row pt-10 ">
                  <div className="w-50">
                    <Image
                      src="/Images/clock.png"
                      alt="clock"
                      width={50}
                      height={120}
                      priority
                      className="pt-3 w-15 pl-1"
                    />
                    <h1 className="text-xl pt-1">24/7</h1>
                    <p className="text-lg pt-1 font-semibold">Support</p>
                    <p className="text-lg pt-1 ">
                      Always available assistance fo customer inquiries anytime.{" "}
                    </p>
                  </div>
                  <div className="w-60 border-l-[0.5px]  border-dashed border-purple-600  pl-5 ">
                    <Image
                      src="/Images/thumb.png"
                      alt="thumb"
                      width={50}
                      height={120}
                      priority
                      className="pt-3 w-15 pl-1"
                    />
                    <h1 className="text-xl pt-1">100%</h1>
                    <p className="text-lg pt-1 font-semibold">Scalability</p>
                    <p className="text-lg pt-1 w-50">
                      Effortless grows with increasing demands and needs.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* xl screen size show */}
      <div className="hidden xl:block max-w-[1440px]  ">

        <div className="flex flex-row gap-2 justify-center  ">
          <div className=" w-160 mt-10">
            <h1 className=" text-4xl  mt-10 text-start 2xl:text-5xl ">
              The identity of{" "}
              <span className="[font-family:var(--font-kaushan)] pr-2">
                our brand
              </span>{" "}
            </h1>
            <p className="  text-start  mt-3 text-lg w-110 2xl:ml-210 2xl:w-70 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<span className="2xl:hidden"> Earum,
                nihil. Esse ut aperiam officia iure. Blanditiis incidunt.</span>
            </p>
          </div>

          {/* cost efficiency container */}
          <div
            className="border-1 rounded-xl w-120 h-70 mt-8 border-custom-cyan"
            style={{ boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)" }}
          >
            <div className="flex flex-row  ">
              <div className=" pl-2 pt-10 ">
                <h1 className="body xl:body-xl 2xl:body-xl text-custom-cyan font-semibold mb-3">
                  250+
                </h1>

                <p className="mb-3 body xl:body-xl 2xl:body-xl">Experienced IT Experts</p>
                <p className="mb-3 body xl:body-xl 2xl:body-xl w-40">
                  “Reduce operational costs while accessing”
                </p>
              </div>
              <div className="py-2 pt-14 ">
                <h1 className="body xl:body-xl 2xl:body-xl font-semibold mb-3 ">
                  Cost Efficiency
                </h1>
                <p className="mb-3 body xl:body-xl 2xl:body-xl w-70 pt-2 ">
                  Requires less upfront investment than traditional CRM
                  systems.
                </p>
                <div className="flex flex-row pt-8 ">
                  <Image
                    src="/Images/BoxUser.png"
                    alt="img"
                    width={1020}
                    height={120}
                    priority
                    className="w-17 h-8 2xl:mt-13 "
                  />
                  <div className=" text-xs w-35 ml-2 pt-1 bg-custom-cyan text-black mx-auto px-1 rounded-sm text-center 2xl:mt-13 ">
                    <button type="button" className="text-lg  font-semibold">
                      Get Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="flex flex-row gap-3 justify-center xl:w-[900px] mx-auto -ml-24">          {/* work area container */}
          <div
            className="border-1 rounded-xl w-120 h-70 mt-8 body xl:body-xl 2xl:body-xl border-custom-cyan"
            style={{ boxShadow: "inset 0 0 15px rgba(0,255,255,0.6)" }}
          >
            <div className="px-2 py-2 flex flex-col items-center justify-center h-full">
              <h1 className="text-xl font-semibold mb-4">Our work area</h1>

              <Image
                src="/Images/workArea.png"
                alt="workarea"
                width={600}
                height={300}
                className="w-80 max-w-full"
              />
            </div>
          </div>




          <div
            className="border-1 rounded-xl w-80 h-70 body xl:body-xl 2xl:body-xl mt-8 border-custom-cyan "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2  ">
              <h1 className="text-center  text-xl pt-10 ">Reviewed on:</h1>
              <Image
                src="/Images/Search Engine.png"
                alt="Search Engine"
                width={50}
                height={120}
                priority
                className="pt-3 w-37 pl-1 text-center mx-auto"
              />
              <div className="flex flex-row py-2  pl-1  bg-gray-900  w-45 px-4 ml-15 rounded-xl mt-5 justify-center ">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
              </div>

              <div className="bg-custom-cyan text-black mt-10 text-center mx-auto w-50 font-semibold rounded-sm  py-0.5 ">
                <button type="button">Get start Free</button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="border-1 rounded-xl  mx-auto xl:w-100 mt-8 border-custom-cyan w-120 h-70"
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className=" px-3 py-2 ml-5">
                <div className="flex flex-row pt-10 ">
                  <div className="w-50">
                    <Image
                      src="/Images/clock.png"
                      alt="clock"
                      width={50}
                      height={120}
                      priority
                      className="pt-3 w-15 pl-1"
                    />
                    <h1 className="body xl:body-xl 2xl:body-xl pt-1">24/7</h1>
                    <p className=" pt-1 font-semibold body xl:body-xl 2xl:body-xl">Support</p>
                    <p className=" pt-1 body xl:body-xl 2xl:body-xl">
                      Always available assistance fo customer inquiries anytime.{" "}
                    </p>
                  </div>
                  <div className="w-60 border-l-[0.5px]  border-dashed border-purple-600  pl-5 ">
                    <Image
                      src="/Images/thumb.png"
                      alt="thumb"
                      width={50}
                      height={120}
                      priority
                      className="pt-3 w-15 pl-1"
                    />
                    <h1 className="body xl:body-xl 2xl:body-xl pt-1">100%</h1>
                    <p className="body xl:body-xl 2xl:body-xl pt-1 font-semibold">Scalability</p>
                    <p className="body xl:body-xl 2xl:body-xlpt-1 w-50">
                      Effortless grows with increasing demands and needs.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrandIdentity;
