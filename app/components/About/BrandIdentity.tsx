import Image from "next/image";
import { Star } from "lucide-react";
import React from "react";

const BrandIdentity = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <div className="lg:hidden">
        {/* mobile and tab view */}
        <div>
          <h1 className="text-center mt-10
          w-[343px] h-[70px] font-[500] text-[35px] leading-[35px]
          sm:w-[564px] sm:h-[40px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
          md:w-[564px] md:h-[50px] md:font-[500] md:text-[40px] md:leading-[50px] mx-auto
        
          ">
            The identity of{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              our brand
            </span>{" "}
          </h1>
          <p className="text-center mt-5 w-[317px] h-[60px] font-[400] text-[14px] leading-[20px]
          sm:w-[460px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px] mx-auto 
          md:w-[460px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mx-auto 
          
          ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            nihil. Esse ut aperiam officia iure. Blanditiis incidunt.
          </p>

          <div>
            <div
              className="mx-auto  border-custom-cyan -ml-3 mt-5
              w-[353px] h-[184px] rounded-[15px] py-[22px] px-[22px]
              sm:w-[556px] sm:h-[320px] sm:gap-[50px]
              md:w-[646px] md:h-[330px] md:rounded-[24px] md:py-[60px] md:px-[70px]
              
              "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="flex flex-row w-75  ml-1 ">
                <div className="md:-mt-10">
                  <h1 className=" text-custom-cyan
                  w-[77px] h-[35px] font-[500] text-[30px] leading-[35px]
                  sm:w-[128px] sm:h-[50px] sm:font-[500] sm:text-[40px] sm:leading-[50px] sm:mt-10
                  md:w-[128px] md:h-[50px] md:font-[500] md:text-[40px] md:leading-[50px] md:mt-10
                   
                  ">

                    250+
                  </h1>

                  <p className="mb-3 mt-3
                  w-[117px] h-[30px] font-[400] text-[12px] leading-[15px] 
                  sm:w-[184px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px] 
                  
                  ">Experienced IT Experts</p>
                  <p className="mb-3 
                  w-[110px] h-[45px] font-[400] text-[12px] leading-[15px]
                  sm:w-[184px] sm:h-[60px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[184px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                  
                  ">
                    “Reduce operational costs while accessing”
                  </p>
                </div>
                <div className="py-2 sm:ml-4 md:-mt-10">
                  <h1 className=" sm:mt-10
                  w-[189px] h-[25px] font-[400] text-[20px] leading-[25px]
                  sm:w-[292px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
                  md:w-[292px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px]
                 
                  ">
                    Cost Efficiency
                  </h1>
                  <p className="mb-3 mt-5
                  w-[189px] h-[30px] font-[400] text-[12px] leading-[15px]
                  sm:w-[292px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[292px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                 
                  ">
                    Requires less upfront investment than traditional CRM
                    systems.
                  </p>
                  <div className="flex flex-row sm:mt-5">
                    <Image
                      src="/Images/BoxUser.png"
                      alt="img"
                      width={1020}
                      height={120}
                      priority
                      className="mt-3 w-[67px] h-[28px] rounded-[28.13px] sm:w-[118px] sm:h-[50px] sm:rounded-[50px] md:w-[118px] md:h-[50px] md:rounded-[50px]
                     
                      "
                    />
                    <div className="  bg-custom-cyan text-black mx-auto mt-3
                    w-[114px] h-[30px] rounded-[4.45px] py-[5px] px-[14px]
                    sm:w-[142px] sm:h-[38px] sm:rounded-[7px] sm:py-[9px] sm:px-[25px] sm:mt-4
                    md:w-[179px] md:h-[40px] md:rounded-[7px] md:py-[9px] md:px-[26px] md:mt-4
                   
                    ">
                      <button type="button" className=" w-[86px] h-[20px] font-[400] text-[14px] leading-[20px]
                      sm:w-[92px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                      md:w-[127px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]

                      ">
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
        <div className="flex flex-row -ml-3 w-[353px] h-[228px] justify-between sm:gap-10 ">
          <div
            className="border-1  mx-auto mt-5 border-custom-cyan 
            w-[167px] h-[223px] rounded-[15px] py-[12px] px-[8px]
            sm:w-[271px] sm:h-[328px] sm:rounded-[24px] sm:py-[17px] sm:px-[25px]
            md:w-[301px] md:h-[330px] md:rounded-[24px] md:py-[17px] md:px-[24px]
            "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2 
            
            ">
              <h1 className="pl-1 
              w-[120px] h-[25px] text-[16px] leading-[25px]
              sm:w-[236px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
              md:w-[236px] md:h-[30px] md:text-[24px] md:leading-[30px]
              ">Our work area:</h1>
              <Image
                src="/Images/workArea.png"
                alt="workarea"
                width={1000}
                height={120}
                priority
                className=" w-[151px] h-[164px]  sm:h-[249px] sm:w-[221px] md:w-[252px] md:h-[249px]"
              />
            </div>
          </div>

          <div
            className="border-1 border-custom-cyan mt-5
              w-[167px] h-[223px] rounded-[15px] py-[36px] px-[18px]
              sm:w-[271px] sm:h-[326px] sm:rounded-[24px] sm:py-[46px] sm:px-[22px]
              md:w-[401px] md:h-[330px] md:rounded-[24px] md:py-[17px] md:px-[24px 
            "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className="">
              <h1 className="w-[114px] h-[25px] font-[400] text-[18px] leading-[25px]
              sm:w-[196px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px] sm:mt-4
              md:w-[196px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px] md:mt-4
              ">Reviewed on:</h1>
              <Image
                src="/Images/Search Engine.png"
                alt="Search Engine"
                width={50}
                height={120}
                priority
                className="pt-3 w-[95px] h-[40px] sm:w-[155px] sm:h-[55px] md:w-[155px] md:h-[50px]"
              />
              <div className="flex flex-row pt-3 pl-1 w-30  sm:bg-gray-900 sm:ml-5 sm:w-35 sm:px-3 sm:pt-1 sm:rounded-xl sm:mt-5 sm:justify-center ">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
              </div>

              <div className="bg-custom-cyan text-black mt-3 text-center 
              w-[131px] h-[30px] rounded-[4.12px] py-[5px] px-[10px]
              sm:w-[171px] sm:h-[38px] sm:rounded-[7px] sm:py-[9px] sm:px-[25px] sm:mt-10
              md:w-[179px] md:h-[40px] md:rounded-[7px] md:py-[9px] md:px-[26px] md:mt-10
              ">
                <button type="button" className="w-[111px] h-[20px] font-[400] text-[14px] leading-[20px]
                sm:w-[119px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                md:w-[126px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] md:-mt-1
                ">Get start Free</button>
              </div>
            </div>
          </div>
        </div>

        {/* final container */}

        <div>
          <div
            className="border-1 mx-auto border-custom-cyan mt-10 -ml-2 sm:mt-35
            w-[353px] h-[184px] rounded-[15px] py-[25px] px-[33px]
            sm:w-[566px] sm:h-[330px] sm:rounded-[24px]
            md:w-[646px] md:h-[330px] md:rounded-[24px] md:py-[60px] md:px-[70px]            "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" sm:mt-15">
              <div className="flex flex-row md:-mt-15 ">
                <div className="w-35 sm:w-50 ">
                  <Image
                    src="/Images/clock.png"
                    alt="clock"
                    width={50}
                    height={120}
                    priority
                    className="pt-3 w-8 pl-1"
                  />
                  <h1 className="pt-1
                  w-[43.03px] h-[25px] font-[400] text-[18px] leading-[25px]
                  sm:w-[69px] sm:h-[38px] sm:font-[400] sm:text-[24px] sm:leading-[30px]
                  md:w-[69px] md:h-[40px] md:font-[400] md:text-[24px] md:leading-[30px]
                  ">24/7</h1>
                  <p className="w-[109px] h-[15px] font-[700] text-[12px] leading-[15px] mt-1
                   sm:w-[219px] sm:h-[26px] sm:font-[700] sm:text-[20px] sm:leading-[24px] sm:mt-1
                   md:w-[219px] md:h-[26px] md:font-[700] md:text-[20px] md:leading-[24px] md:mt-1
                  ">Support</p>
                  <p className="w-[109px] h-[60px] font-[400] text-[12px] leading-[15px]
                  sm:w-[219px] sm:h-[26px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-3
                  md:w-[219px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-3
                  ">
                    Always available assistance fo customer inquiries anytime.{" "}
                  </p>
                </div>
                <div className="w-35 border-l-[0.5px]  border-dashed border-purple-600  pl-5 sm:w-50 sm:ml-5  ">
                  <Image
                    src="/Images/thumb.png"
                    alt="thumb"
                    width={50}
                    height={120}
                    priority
                    className="pt-3 w-8 pl-1"
                  />
                  <h1 className="
                  w-[48.01px] h-[25px] font-[400] text-[18px] leading-[25px]
                   sm:w-[69px] sm:h-[38px] sm:font-[400] sm:text-[24px] sm:leading-[30px]
                   md:w-[69px] md:h-[40px] md:font-[400] md:text-[24px] md:leading-[30px]
                  ">100%</h1>
                  <p className="w-[106px] h-[15px] font-[700] text-[12px] leading-[15px] mt-1
                  sm:w-[219px] sm:h-[26px] sm:font-[700] sm:text-[20px] sm:leading-[24px] sm:mt-1
                  md:w-[219px] md:h-[26px] md:font-[700] md:text-[20px] md:leading-[24px] md:mt-1
                  ">Scalability</p>
                  <p className="w-[107px] h-[60px] font-[400] text-[12px] leading-[15px]
                   sm:w-[219px] sm:h-[26px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-3
                   md:w-[219px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-3
                  ">
                    Effortless grows with increasing demands and needs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for desktop view */}
      <div className="xl:hidden lg:block max-w-[1440px] hidden ">
        <div>
          <h1 className=" text-center mt-10 mx-auto 
            lg:w-[564px] lg:h-[55px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
          ">
            The identity of{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              our brand
            </span>{" "}
          </h1>
          <p className=" text-center  mt-3  mx-auto
           lg:w-[460px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px] 
          ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            nihil. Esse ut aperiam officia iure. Blanditiis incidunt.
          </p>

          {/* container starting */}
          <div className="lg:flex lg:flex-row lg:gap-10 lg:w-[892px] lg:h-[352px] lg:-ml-20">
            {/* cost efficiency container */}

            <div
              className="border-1 rounded-xl w-120 h-82  mt-8 border-custom-cyan  px-3
               lg:w-[570px] lg:h-[352px] lg:rounded-[24px] lg:py-[30px] lg:px-[61px]
              "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="flex flex-row ">
                <div className=" pl-2 pt-10 ">
                  <h1 className="text-6xl text-custom-cyan font-semibold mb-3
                  lg:w-[128px] lg:h-[55px] lg:font-[500] lg:text-[45px] lg:leading-[55px]
                  ">
                    250+
                  </h1>

                  <p className="mb-3 text-lg
                  lg:w-[154px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px] 
                  ">Experienced IT Experts</p>
                  <p className="mb-3 text-lg w-40
                  lg:w-[154px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  ">
                    “Reduce operational costs while accessing”
                  </p>
                </div>
                <div className="py-2 pt-14 ">
                  <h1 className="text-2xl  font-semibold mb-3 
                   lg:w-[292px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px]
                  ">
                    Cost Efficiency
                  </h1>
                  <p className="mb-3 text-lg w-70 pt-2
                   lg:w-[292px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  ">
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
                      className="w-17 h-8  lg:w-[118px] lg:h-[50px] lg:rounded-[50px] "
                    />
                    <div className="  lg:w-[160px] lg:h-[43px] lg:rounded-[7px] lg:py-[9px] lg:px-[25px] lg:mt-1
                     bg-custom-cyan text-black mx-auto px-1 rounded-sm text-center 
                    
                    ">
                      <button type="button" className="lg:w-[110px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px] ">
                        Get Proposal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* work area container */}
            <div
              className="border-1 rounded-xl w-80  h-82  mt-8 border-custom-cyan
              lg:w-[287px] lg:h-[352px] lg:rounded-[24px] lg:py-[17px] lg:px-[18px]
              "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className=" px-2 py-2 ">
                <h1 className="pl-3
                lg:w-[238px] lg:h-[32px] lg:font[400] lg:text-[26px] lg:leading[32px]
                ">Our work area:</h1>
                <Image
                  src="/Images/workArea.png"
                  alt="workarea"
                  width={1000}
                  height={120}
                  priority
                  className="pt-2 w-60 mx-auto lg:w-[252px] lg:h-[271px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-10 lg:w-[892px] lg:h-[352px] lg:-ml-20 lg:mt-10">
          <div
            className="border-1 rounded-xl w-80 h-82 mx-auto mt-8 border-custom-cyan
            lg:w-[287px] lg:h-[352px] lg:rounded-[24px] lg:-[53px] lg:py-[53px] lg:px-[30px]  
            "
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className=" px-2 py-2  ">
              <h1 className="text-center 
              lg:w-[196px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] 
              ">Reviewed on:</h1>
              <Image
                src="/Images/Search Engine.png"
                alt="Search Engine"
                width={50}
                height={120}
                priority
                className="pt-3 w-37 pl-1 text-center mx-auto lg:w-[155px] lg:h-[50px]"
              />
              <div className="flex flex-row py-2  pl-1  bg-gray-900  w-45 px-4 ml-15 rounded-xl mt-5 justify-center lg:w-[197px] lg:h-[41px] lg:py-[8px] lg:px-[8px]
              lg:mx-auto
              ">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
              </div>

              <div className="bg-custom-cyan text-black mt-10 text-center mx-auto w-50 font-semibold rounded-sm  py-0.5
              lg:w-[194px] lg:h-[43px] lg:rounded-[7px] lg:py-[9x] lg:px-[26px]
              ">
                <button type="button"
                  className="lg:142px lg:h-[25px] lg:[18px] lg:leading-[25px] lg:pt-2"
                >Get start Free</button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="border-1 rounded-xl  mx-auto mt-8 border-custom-cyan
              lg:w-[570px] lg:h-[352px] lg:rounded-[24px] lg:py-[53px] lg:px-[45px]
              "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className=" px-3 py-2 ml-5">
                <div className="flex flex-row">
                  <div className="w-50">
                    <Image
                      src="/Images/clock.png"
                      alt="clock"
                      width={50}
                      height={120}
                      priority
                      className="pt-3 w-15 pl-1"
                    />
                    <h1 className="lg:w-[69px] lg:h-[38px] lg:top-[40px] lg:left-[0.31]
                    ">24/7</h1>
                    <p className="
                    lg:w-[219px] lg:h-[26px] lg:text-[22px] lg:leading-[26px] lg:font-[700] lg:mb-1
                    ">Support</p>
                    <p className="
                    lg:w-[205px] lg:h-[100px] lg:text-[18px] lg:leading-[25px]
                    ">
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
                    <h1 className="
                    lg:w-[69px] lg:h-[38px] lg:top-[40px] lg:left-[0.31]
                    ">100%</h1>
                    <p className="
                    lg:w-[219px] lg:h-[26px] lg:text-[22px] lg:leading-[26px] lg:font-[700] lg:mb-1
                    ">Scalability</p>
                    <p className="
                     lg:w-[205px] lg:h-[100px] lg:text-[18px] lg:leading-[25px]
                    ">
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
      <div className="hidden xl:block max-w-[1440px] xl:mt-20  ">

        <div className="flex flex-row gap-2 justify-center  ">
          <div className=" xl:w-[564px] xl:h-[239px] mt-10 xl:gap-[35px]">
            <h1 className=" mt-10 text-start
            xl:w-[564px] xl:h-[120px] xl:text-[64px] xl:leading-[60px]
            2xl:w-[574px] 2xl:h-[141px] 2xl:text-[72px] 2xl:leading-[70px]
            ">
              The identity of{" "}
              <span className="[font-family:var(--font-kaushan)] pr-2">
                our brand
              </span>{" "}
            </h1>
            <p className="  text-start  mt-3 
            xl:w-[490px] xl:h-[84px] xl:text-[20px] xl:leading-[28px] 
            2xl:w-[490px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px]
            ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* cost efficiency container */}
          <div
            className="border-1 border-custom-cyan xl:w-[570px] xl:h-[364px] xl:rounded-[24px]
             2xl:w-[610px] 2xl:h-[391px] 2xl:rounded-[24px] 2xl:py-[50px] 2xl:px-[40px] 
            "
            style={{ boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)" }}
          >
            <div className="flex flex-row  ">
              <div className="xl:mt-10 xl:pl-7">
                <h1 className=" text-custom-cyan mb-3
                xl:w-[128px] xl:h-[55px] xl:font-[500] xl:text-[45px]  xl:leading-[55px]
                2xl:w-[128px] 2xl:h-[60px] 2xl:font-[500] 2xl:text-[50px]  2xl:leading-[60px]
                ">
                  250+
                </h1>

                <p className="  
                xl:w-[184px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                2xl:w-[184px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                ">Experienced IT Experts</p>
                <p className="
                xl:w-[184px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                2xl:w-[184px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                ">
                  “Reduce operational costs while accessing”
                </p>
              </div>
              <div className="xl:mt-10 xl:pr-7">
                <h1 className=" mb-3
            xl:w-[292px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px]
            2xl:w-[292px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px]
            ">
                  Cost Efficiency
                </h1>
                <p className="mb-3 pt-2 
                xl:w-[292px] xl:h-[83px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                2xl:w-[292px] 2xl:h-[90px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                ">
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
                    className="xl:w-[118px] xl:h-[50px] xl:rounded-[50px] 2xl:w-[118px] 2xl:h-[50px] 2xl:rounded-[50px"
                  />
                  <div className=" text-xs w-35 ml-2 bg-custom-cyan text-black mx-auto px-1 
                  xl:w-[172px] xl:h-[46px] xl:rounded-[7px] xl:py-[9px] xl:px-[25px]
                  2xl:w-[184px] 2xl:h-[48px] 2xl:rounded-[7px] 2xl:py-[9px] 2xl:px-[25px]
                  ">
                    <button type="button" className="
                    xl:w-[122px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                    2xl:w-[134px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                    ">
                      Get Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center mx-auto ">          {/* work area container */}
          <div
            className="border-1 border-custom-cyan xl:mt-8
            xl:w-[287px] xl:h-[364px] xl:rounded-[24px] xl:py-[17px] xl:px-[18px]
            2xl:w-[297px] 2xl:h-[391px] 2xl:rounded-[24px] 2xl:p-[20px]
            "
            style={{ boxShadow: "inset 0 0 15px rgba(0,255,255,0.6)" }}
          >
            <div className="px-2 py-2 flex flex-col items-center justify-center h-full">
              <h1 className=" mb-4
              xl:w-[236px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px]
              2xl:w-[236px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px]
              ">Our work area</h1>

              <Image
                src="/Images/workArea.png"
                alt="workarea"
                width={600}
                height={300}
                className="
                xl:w-[252px] xl:h-[281px]
                2xl:w-[257px] 2xl:h-[250px]
                "
              />
            </div>
          </div>




          <div className="xl:flex xl:flex-row-reverse xl:gap-5
        
         ">
            <div
              className=" mt-8 border-custom-cyan
            xl:w-[287px] xl:h-[364px] xl:rounded-[24px] xl:px-[55px] xl:py-[30px]
            2xl:w-[297px] 2xl:h-[391px] 2xl:rounded-[24px]
            "
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="">
                <h1 className="text-center pt-10 
              xl:w-[196px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px]
              2xl:w-[196px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px]
              ">Reviewed on:</h1>
                <Image
                  src="/Images/Search Engine.png"
                  alt="Search Engine"
                  width={50}
                  height={120}
                  priority
                  className="pt-3 w-37 pl-1 text-center mx-auto
                xl:w-[155px] xl:h-[50px] xl:mt-10
                2xl:w-[160px] 2xl:h-[55px] 2xl:mt-10
                "
                />
                <div className="flex flex-row py-2  pl-1 
               bg-gray-900  w-45 px-4 ml-15 rounded-xl mt-5 justify-center 
               xl:w-[197px] xl:h-[44px] xl:rounded-[42px] xl:py-[8px] xl:px-[20px] xl:mx-auto
               2xl:w-[197px] 2xl:h-[48px] 2xl:rounded-[42px] 2xl:py-[9px] 2xl:px-[20px] 2xl:mx-auto
               ">
                  <Star className="text-yellow-400" fill="currentColor" />
                  <Star className="text-yellow-400" fill="currentColor" />
                  <Star className="text-yellow-400" fill="currentColor" />
                  <Star className="text-yellow-400" fill="currentColor" />
                  <Star className="text-yellow-400" fill="currentColor" />
                  <h1 className="pl-2 text-sm pt-0.5">4.8/5.0</h1>
                </div>

                <div
                  className="bg-custom-cyan text-black mt-10 mx-auto text-center
             flex items-center justify-center
             xl:w-[210px] xl:h-[46px] xl:rounded-[7px]
             2xl:w-[226px] 2xl:h-[48px] 2xl:rounded-[7px]">
                  <button
                    type="button"
                    className="xl:text-[20px] xl:leading-[28px]
               2xl:text-[24px] 2xl:leading-[30px]">
                    Get start Free
                  </button>
                </div>

              </div>
            </div>

            <div>
              <div
                className="mt-8 border-custom-cyan  ml-2
               xl:w-[570px] xl:h-[364px] xl:rounded-[24px] xl:py-[53px] xl:px-[45px]
               2xl:w-[616px] 2xl:h-[391px] 2xl:rounded-[24px] 2xl:py-[60px] 2xl:px-[50px]
              "
                style={{
                  boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
                }}
              >
                <div className=" px-3 py-2 ml-5 2xl:-mt-10">
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
                      <h1 className=" pt-1 
                    xl:w-[69px] xl:h-[38px] xl:top-[40px] xl:left-[0.31px] xl:text-[28px] xl:leading-[34px]
                    2xl:w-[69px] 2xl:h-[38px] 2xl:top-[40px] 2xl:left-[0.31px] 2xl:text-[30px] 2xl:leading-[36px] xl:mb-3
                    ">24/7</h1>
                      <p className=" 
                    xl:w-[219px] xl:h-[26px] xl:font-[700] xl:text-[24px] xl:leading-[28px]
                    2xl:w-[219px] 2xl:h-[26px] 2xl:font-[700] 2xl:text-[26px] 2xl:leading-[30px] 2xl:mb-1
                    ">Support</p>
                      <p className="  
                    xl:w-[205px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                    2xl:w-[220px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                    ">
                        Always available assistance fo customer inquiries anytime.{" "}
                      </p>
                    </div>
                    <div className="w-60 border-l-[0.5px]  border-dashed border-purple-600  pl-5 2xl:ml-10 ">
                      <Image
                        src="/Images/thumb.png"
                        alt="thumb"
                        width={50}
                        height={120}
                        priority
                        className="pt-3 w-15 pl-1 "
                      />
                      <h1 className="
                     xl:w-[69px] xl:h-[38px] xl:top-[40px] xl:left-[0.31px] xl:text-[28px] xl:leading-[34px] xl:mb-3
                     2xl:w-[69px] 2xl:h-[38px] 2xl:top-[40px] 2xl:left-[0.31px] 2xl:text-[30px] 2xl:leading-[36px]
                    ">100%</h1>
                      <p className="
                    xl:w-[219px] xl:h-[26px] xl:font-[700] xl:text-[24px] xl:leading-[28px]
                    2xl:w-[219px] 2xl:h-[26px] 2xl:font-[700] 2xl:text-[26px] 2xl:leading-[30px] 2xl:mb-1
                    ">Scalability</p>
                      <p className="
                    xl:w-[205px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                    2xl:w-[205px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                    ">
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
    </div>
  );
};

export default BrandIdentity;
