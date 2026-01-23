import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ServicesSwiper from "./components/Home/Swiper";
import Implement from "./components/Home/Implement";
import Worlflow from "./components/Home/Worlflow";
import Review from "./components/Home/Review";
import Help from "./components/Home/Help";
import Technologies from "./components/Home/Technologies";
import { ArrowRight } from "lucide-react";
import { HERO_TEXTS } from "../constants/heroSection.constants.ts";

const page = () => {
  return (
    <div className="bg-white text-black dark:bg-black  dark:text-white min-h-screen border-4 border-white dark:border-hidden ">
      {/* was bg-black; now adapts */}
      <div className="bg-white dark:bg-black items-center ">
        {/* Container with multiple backgrounds */}
        <div
          className="relative flex flex-col"
          style={{
            backgroundImage: `url('/Images/Glow.png'), url('/Images/Vector.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 80%",
            height: "600px, 600px",
          }}
        >
          {/* Navigation Bar */}
          <Navbar />

          {/* chip: readable in both modes */}
          <div className=" mx-auto mt-[74px]  w-[285px] h-[30px]  rounded-[100px] px-[20px] py-[5px] border-2 border-green-600 dark:border-gray-700 bg-gray-100/60 dark:bg-gray-400/20  text-gray-800 dark:text-gray-200
              sm:w-[302px] sm:h-[40px] sm:rounded-[100px] sm:border-[1px] sm:px-[20px] sm:py-[10px]
              md:w-[320px] md:h-[42px] md:rounded-[100px] md:border-[1px] md:px-[20px] md:py-[10px]
              lg:w-[355px] lg:h-[45px] lg:py-[10px] lg:px-[20px] lg:gap-[10px]
              xl:w-[390px] xl:h-[48px] xl:py-[10px] xl:px-[20px] xl:gap-[10px]
              2xl:w-[425px] 2xl:h-[50px] 2xl:py-[10px] 2xl:px-[20px] 2xl:gap-[10px]
            ">
            <p className="text-[14px] font-[400] leading-[20px] tracking-normal text-center
                sm:text-[15px] sm:font-[400] sm:leading-[20px] 
                md:text-[16px] md:font-[400] md:leading-[22px] md:w-[280px] md:h-[22px]
                lg:w-[315px] lg:h-[25px] lg:text-[18px] lg:font-[400] lg:leading-[25px] 
                xl:w-[350px] xl:h-[28px] xl:text-[20px] xl:leading-[28px] 
                2xl:w-[385px] 2xl:h-[30px] 2xl:text-[23px] 2xl:leading-[30px] 
              ">{HERO_TEXTS.bubble}
            </p>
          </div> 
          
          <div
            className="text-center mt-6 w-[297px] h-[90px] mx-auto 
            sm:w-[500px] sm:h-[165px]
            md:w-[606px] md:h-[96px]
            xl:w-[851px] xl:h-[150px]
            2xl:w-[851px] 2xl:h-[185px]
            "
          >
            <h1
              className="text-[40px] font-[600] leading-[45px]
              sm:font-[600] sm:text-[40px] sm:leading-[100%]
              md:text-[48px] md:mx-auto
              lg:text-[64px] lg:font-[600] lg:leading-[100%]
              xl:text-[80px] xl:leading-[100%] 
              2xl:text-[96px] 2xl:leading-[100%] 
              "
            >
              Crafting <span className="custom-cyan px-1">Digital</span>
              <br />
              Excellence
            </h1>
          </div>

          <h1
            className="mt-10 text-[14px] font-[400] leading-[20px] mx-auto text-center w-[297px] h-[90px]
            sm:font-[400] sm:text-[15px] sm:leading-[25px] sm:text-center sm:-mt-10
            md:w-[402px] md:h-[66px] md:font-[400] md:leading-[22px]  md:mt-10 md:text-[16px]
            lg:w-[670px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-15
            xl:w-[670px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px] 
            2xl:w-[670px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]  
            "
          >
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </h1>

          {/* Buttons + Users */}
          <div
            className="flex flex-col-reverse items-center mt-10 space-y-3  mx-auto
            sm:w-[491px] sm:h-[46px] sm:gap-[41px] sm:flex sm:flex-row
            md:w-[496px] md:h-[48px] md:gap-[41px]
            xl:w-[516px] xl:h-[56px] xl:gap-[41px]
            2xl:w-[529px] 2xl:h-[60px] 2xl:gap-[41px]
            "
          >
            <div
              className="bg-custom-cyan text-black  rounded-sm text-center mt-5 cursor-pointer
              sm:w-[131px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]  
              md:w-[136px] md:h-[48px] md:rounded-[10px] md:px-[25px] md:py-[13px]
              lg:w-[147px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
              xl:w-[158px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
              2xl:w-[169px] 2xl:h-[56px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px]
              "
            >
              <button
                type="submit"
                className="font-semibold cursor-pointer text-[14px]  py-[9px] px-[18px] w-[122px] h-[38px] 
                  sm:text-[15px] sm:font-[400] sm:leading-[20px] sm:w-[110px] whitespace-nowrap  sm:-mt-[8px] sm:-ml-[15px]
                  md:text-[16px] md:font-[400] md:leading-[22px] md:w-[86px] md:h-[22px] md:-ml-8
                  lg:text-[18px] lg:font-[400] lg:leading-[25px]
                  xl:text-[20px] xl:font-[400] xl:leading-[28px] xl:-ml-12
                  2xl:w-[119px] 2xl:h-[30px] 2xl:text-[22px] 2xl:font-[400] 2xl:leading-[30px] 2xl:-ml-12
                "
              >
                Learn More
              </button>
            </div>

            <div
              className="flex  items-center flex-row gap-3 sm:mt-1
              sm:w-[319px] sm:h-[40px] sm:gap-[12px]
              md:w-[319px] md:h-[44px]
              lg:w-[319px] lg:h-[50px] lg:gap-[12px]
              xl:w-[319px] xl:h-[56px] xl:gap-[12px]
              2xl:w-[319px] 2xl:h-[60px] 2xl:gap-[12px]
              "
            >
              <Image
                src="/Images/Group 31.png"
                alt="users"
                width={90}
                height={90}
                priority
                className="w-[49px] h-[24.5px] sm:w-[72px] sm:h-[36px] sm:border-[2px]
                  md:w-[72px] md:h-[36px] md:border-[2px]
                  lg:w-[72px] lg:h-[36px] lg:border-[2px]
                  xl:w-[72px] xl:h-[36px] xl:border-[2px]
                  2xl:w-[72px] 2xl:h-[36px] 2xl:border-[2px] 2xl:mt-2
                  "
              />
              <p
                className="text-[14px] font-[400] leading-[20px] w-[149px] h-[40px]
                sm:w-[235px] sm:h-[40px] sm:font-[400] sm:text-[15px]  sm:leading-[20px]
                md:w-[235px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                lg:w-[235px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                xl:w-[235px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                2xl:w-[235px] 2xl:h-[56px] 2xl:font-[400] 2xl:text-[20px] 2xl:leading-[28px]

                "
              >
                Trusted by over +20K people in the World
              </p>
            </div>
          </div>

          <Image
            src="/Images/Line 4.png"
            alt="Horizontal Line"
            width={200}
            height={200}
            priority
            className="mx-auto mt-10 w[450px] h-4"
          />
        </div>

        {/* Starting body section  */}

        <div className="min-h-screen bg-white dark:bg-black flex justify-center">
          <div className="w-full max-w-[1440px] px-4">
            <ServicesSwiper />

            {/* Activities */}

            <div
              className="relative mx-auto px-4 2xl:mt-10 2xl:px-10  2xl:h-[583px]
           
          "
            >
              <Image
                src="/Images/Vector.png"
                alt="vector"
                width={1000}
                height={1000}
                className="absolute top-0 right-0 z-30 opacity-90 pointer-events-none hidden md:block"
              />

              <div
                className="lg:flex lg:flex-row max-w-[1280px] mx-auto 2xl:mx-30 lg:mx-15   2xl:w-[1150px] h-[600px] sm:h-[700px] lg:h-[400px]
            xl:h-[540px]
            "
              >
                {/* left content */}
                <div className="lg:w-[425px] lg:h-[468px] mx-auto ">
                  <div className="text-center  ">
                    <h1
                      className="leading-[35px] text-[36px] font-medium  w-[335px] h-[105px] 
                  sm:w-[427px] sm:h-[80px] sm:text-[36px] sm:font-[500] sm:leading-[40px]  sm:mx-auto 
                  md:w-[590px] md:h-[100px] md:font-[500] md:text-[40px] md:leading-[50px]
                  lg:w-[496px] lg:h-[165px] lg:font-[500] lg:text-[48px] lg:leading-[55px] lg:text-start
                  xl:w-[535px] xl:h-[180px] xl:font-[500] xl:text-[64px] xl:leading-[60px]
                  2xl:w-[576px] 2xl:h-[210px] 2xl:font-[500] 2xl:text-[72px] 2xl:leading-[70px]
                  "
                    >
                      To upscale your
                      <span className="[font-family:var(--font-kaushan)] ">
                        {" "}
                        business{" "}
                      </span>
                      to the next level{" "}
                    </h1>
                  </div>

                  <div className="mt-5  w-[335px]  md:w-[673px] md:h-[44px]   mx-auto sm:w-[513px] sm:h-[60px]">
                    <p
                      className="text-center font-[400] text-[14px] lg:text-start my-5
                  sm:font-[400] sm:text-[15px] sm:text-start sm:pr-10
                  md:pr-0 md:text-[16px] md:leading-[22px] 
                  lg:w-[425px] lg:h-[100px] lg:font-[400] lg:text-[18px] lg:leading-[25px] 
                  xl:w-[535px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px] 
                  2xl:w-[576px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 
                
                  "
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua invidunt ut labore.
                    </p>

                    <p
                      className="flex sm:w-[513px] sm:gap-[16px] sm:text-[15px] mb-3 item-start gap-[5px]
                      md:w-[527px] md:h-[30px] md:text-[16px] md:gap-[16px]
                      lg:w-[423px]
                      xl:text-[20px] xl:leading-[28px]
                      2xl:text-[22px] 2xl:leading-[30px]  2xl:mb-10
                      "
                    >
                      <Image
                        src="/Images/TikButton.png"
                        alt="Tick icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] 2xl:w-[16px] 2xl:h-[16px] 2xl:mt-2"
                      />
                      Project template to kick-start a new project
                    </p>

                    <p
                      className="flex sm:w-[513px] sm:gap-[16px] sm:text-[15px] mb-3 item-start gap-[5px]
                    md:w-[527px] md:h-[30px] md:text-[16px] md:gap-[16px]
                    lg:w-[423px]
                    xl:text-[20px] xl:leading-[28px]
                    2xl:text-[22px] 2xl:leading-[30px] 
                    "
                    >
                      <Image
                        src="/Images/TikButton.png"
                        alt="Tick icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] 2xl:w-[16px] 2xl:h-[16px] 2xl:mt-3"
                      />
                      Clone task to speed your time to action
                    </p>

                    <p
                      className="flex sm:w-[513px] sm:gap-[16px] sm:text-[15px]  item-start gap-[5px]
                      md:w-[527px] md:h-[30px] md:text-[16px] md:gap-[16px] 
                      lg:w-[423px]
                      xl:text-[20px] xl:leading-[28px] md:mb-7
                      2xl:text-[22px] 2xl:leading-[30px]  2xl:mb-10
                      "
                    >
                      <Image
                        src="/Images/TikButton.png"
                        alt="Tick icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] 2xl:w-[16px] 2xl:h-[16px] 2xl:mt-2 mt-1"
                      />
                      Communication and collaborate with your team and clients
                    </p>

                    <p
                      className="flex sm:w-[513px] sm:gap-[16px] sm:text-[15px] mb-3 item-start gap-[5px] 
                      md:w-[527px] md:h-[30px] md:text-[16px] md:gap-[16px]
                      lg:w-[423px]
                      xl:text-[20px] xl:leading-[28px]
                      2xl:text-[22px] 2xl:leading-[30px] 
                      "
                    >
                      <Image
                        src="/Images/TikButton.png"
                        alt="Tick icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-[20px] mt-1 sm:h-[20px] md:w-[20px] md:h-[20px] xl:mt-1 2xl:w-[16px] 2xl:h-[16px] 2xl:mt-2"
                      />
                      Time tracking for the whole team
                    </p>
                  </div>
                </div>

                {/* right content */}
                <div className=" flex justify-center lg:justify-end mt-6 sm:mt-40 lg:-mt-[0.1px]   ">
                  <div className="">
                    <Image
                      src="/Images/Activities.svg"
                      alt="Activities"
                      width={800}
                      height={600}
                      className="hidden dark:block w-[335.47px] h-[237.88px]  sm:w-[587px] sm:h-[424px]  sm:ml-10 lg:w-[600px] xl:w-[663px] xl:h-[500px]
                    xl:top-[50px] xl:left-[570px]
                    md:w-[673px] md:h-[424px] 
                    2xl:w-[643.37px] 2xl:h-[487px] 2xl:left-[596px] 2xl:top-[48px] 2xl:ml-50
                    "
                    />
                    <Image
                      src="/Images/DarkMode-action-section.png"
                      alt="Activities"
                      width={800}
                      height={600}
                      className="block dark:hidden  w-[335.47px] h-[237.88px] sm:w-[587px] sm:h-[424px] sm:ml-10 lg:w-[455.66px] 
                    xl:w-[563px] xl:h-[500px]
                    xl:top-[50px] xl:left-[570px]
                    md:w-[673px] md:h-[424px]
                    2xl:w-[643.37px] 2xl:h-[487px] 2xl:left-[596px] 2xl:top-[48px]
                    "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="h-[1500px] sm:h-[1570px] lg:h-[800px]">
              <h1
                className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl mt-20 text-center
            "
              >
                Our{" "}
                <span className="[font-family:var(--font-kaushan)]">
                  design
                </span>{" "}
                and <br />
                <span className="[font-family:var(--font-kaushan)]">
                  development
                </span>{" "}
                approach
              </h1>

              <div className="mx-auto mt-6  w-full max-w-[1000px] 2xl:-mt-5 lg:-mt-10">
                {/* Light mode (large screens only) */}
                <Image
                  src="/Images/desktop-dark-roadmap.png"
                  alt="Roadmap Light"
                  width={1000}
                  height={1000}
                  className="hidden lg:block dark:hidden lg:-mt-25 "
                  priority
                />

                {/* Dark mode (large screens only) */}
                <Image
                  src="/Images/roadmap.png"
                  alt="Roadmap Dark"
                  width={1000}
                  height={1000}
                  className="hidden lg:dark:block lg:-mt-25 "
                  priority
                />
                {/* -------------------------------------------------- */}
                {/* Light mode (medium screens only) */}
                <Image
                  src="/Images/md-dark-roadmap.png"
                  alt="Roadmap 2 Light"
                  width={1000}
                  height={1000}
                  className="hidden md:block lg:hidden dark:hidden md:-mt-40"
                  priority
                />

                {/* Dark mode (medium screens only) */}
                <Image
                  src="/Images/roadmap2.png"
                  alt="Roadmap 2 Dark"
                  width={1000}
                  height={1000}
                  className="hidden md:dark:block lg:dark:hidden md:-mt-40  "
                  priority
                />

                {/* Light mode (small screens only) */}
                <Image
                  src="/Images/sm-dark-roadmap.png"
                  alt="Roadmap 1 Light"
                  width={1000}
                  height={1000}
                  className="hidden sm:block md:hidden dark:hidden"
                  priority
                />

                {/* Dark mode (small screens only) */}
                <Image
                  src="/Images/roadmap1.png"
                  alt="Roadmap 1 Dark"
                  width={1000}
                  height={1000}
                  className="hidden sm:dark:block  md:dark:hidden md:hidden"
                  priority
                />
                {/* Light mode (mobile only) */}
                <Image
                  src="/Images/mobile-dark-roadmap.png"
                  alt="Roadmap 3 Light"
                  width={1000}
                  height={1000}
                  className="block sm:hidden dark:hidden"
                  priority
                />

                {/* Dark mode (mobile only) */}
                <Image
                  src="/Images/roadmap3.png"
                  alt="Roadmap 3 Dark"
                  width={1000}
                  height={1000}
                  className="hidden dark:block  sm:dark:hidden sm:hidden"
                  priority
                />
              </div>
            </div>

            <Implement />

            {/* line */}
            <Image
              src="/Images/cureveLine.png"
              alt="cureveLine"
              width={1000}
              height={1000}
              className="w-[2000px] mx-auto"
              priority
            />

            <Worlflow />

            {/* line */}
            <Image
              src="/Images/cureveLine.png"
              alt="cureveLine"
              width={1000}
              height={1000}
              className="w-[2000px] mx-auto mb-10 lg:mt-10 "
              priority
            />

            <Technologies />

            <div className="mt-10 md:mx-5 xl:mt-15 lg:block w-[345px] h-[825px]  mx-auto sm:hidden lg:flex">
              <div className="flex flex-col lg:flex-row gap-10 xl:gap-0 xl:mx-30 2xl:mx-auto  2xl:h-[700px] xl:h-[700px]  2xl:left-[121px] 2xl:top-[5747px] 2xl:ml-20">
                {/* Left section */}
                <div className="lg:w-[40%]  xl:w-[562px] xl:h-[455px] ">
                  <h1
                    className="text-center w-[286px] h-[35px] font-medium text-[36px] leading-[35px] mx-auto
                lg:w-[375px] lg:h-[55px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
                xl:w-[562px] xl:h-[70px] xl:text-[72px] xl:leading-[70px] xl:text-start
                2xl:w-[562px] 2xl:h-[70px] 2xl:text-[72px] 2xl:leading-[70px] 2xl:text-start 
                "
                  >
                    Get in{" "}
                    <span className="[font-family:var(--font-kaushan)] pr-2">
                      Touch
                    </span>
                  </h1>
                  <p
                    className="mx-auto text-center text-[14px] leading-[25px] font-[400] w-[280px] h-[60px] xl:text-xl xl:text-start mt-5 
                lg:w-[367px] lg:h-[75px] lg:text-[18px] lg:leading-[25px]
                xl:w-[562px] xl:[60px] xl:font-[400] xl:text-[22px] xl:leading-[30px]
                "
                  >
                    We&apos;re here to support you! Feel free to reach out for
                    assistance, feedback, or any questions.
                  </p>
                  <h1
                    className="mt-7 text-[20px] w-[156px] h-[25px] leading-[25px] font-[400]
                lg:w-[289.37px] lg:h-[45px] lg:text-[26px] lg:leading-[32px] lg:font-[400]
                xl:w-[289.37px] xl:h-[45px] xl:top-[-0.21px] xl:font-[400] xl:text-[30px] xl:leading-[36px]
                "
                  >
                    Let&apos;s Talk About:
                  </h1>

                  {/* tags: readable in light & dark */}
                  <div className="space-y-5 mt-7 ">
                    <div
                      className="flex flex-row  items-center bg-gray-200 dark:bg-gray-700 w-[201px] h-[34px] rounded-[32px] py-[5px] px-[10px] 
                  lg:w-[241px] lg:h-[45px] lg:rounded-[35px] lg:py-[8px] lg:px-[10px] lg:gap-[10px]
                  xl:w-[285px] xl:h-[49px] xl:top-[-0.21px] xl:rounded-[32px] xl:py-[8px] xl:px-[10px] 
                  "
                    >
                      <div
                        className="rounded-full w-[24px] h-[24px] bg-custom-cyan flex items-center justify-center lg:w-[32px] lg:h-[33px]
                    xl:w-[32px] xl:h-[32px] xl:rounded-[100px] xl:gap-[10px]
                    "
                      >
                        <ArrowRight
                          color="black"
                          className="w-[10.79px] h-[10.34px] top-[6.58px] left-[6.75px]
                      lg:w-[14.22px] lg:h-[14.22px] lg:top-[9.05] lg:left-[8.89px]
                      xl:w-[14.22px] xl:h-[14.22px] xl:top-[9.05px] xl:left-[8.89px]
                      "
                        />
                      </div>
                      <p
                        className="pl-3 text-[14px] font-[400] leading-[20px]
                    lg:w-[183px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                    xl:w-[223px] xl:h-[30px] xl:text-[22px] xl:leading-[30px]
                    "
                      >
                        Customer Experience
                      </p>
                    </div>

                    <div
                      className="flex flex-row items-center bg-gray-200 dark:bg-gray-700 w-[201px] h-[34px] rounded-[32px] py-[5px] px-[10px]
                  lg:w-[241px] lg:h-[45px] lg:rounded-[35px] lg:py-[8px] lg:px-[10px] lg:gap-[10px]
                  xl:w-[285px] xl:h-[49px] xl:top-[-0.21px] xl:rounded-[32px] xl:py-[8px] xl:px-[10px] 

                  "
                    >
                      <div
                        className="rounded-full w-[24px] h-[24px] bg-custom-cyan flex items-center justify-center
                    lg:w-[32px] lg:h-[33px]
                      xl:w-[32px] xl:h-[32px] xl:rounded-[100px] xl:gap-[10px]
                    "
                      >
                        <ArrowRight
                          color="black"
                          className="w-[10.79px] h-[10.34px] top-[6.58px] left-[6.75px]
                      lg:w-[14.22px] lg:h-[14.22px] lg:top-[9.05] lg:left-[8.89px]
                      xl:w-[14.22px] xl:h-[14.22px] xl:top-[9.05px] xl:left-[8.89px]

                      "
                        />
                      </div>
                      <p
                        className="pl-3 text-[14px] font-[400] leading-[20px]
                    lg:w-[183px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                    xl:w-[223px] xl:h-[30px] xl:text-[22px] xl:leading-[30px]
                    "
                      >
                        Quality and Trust
                      </p>
                    </div>

                    <div
                      className="flex flex-row items-center bg-gray-200 dark:bg-gray-700 w-[201px] h-[34px] rounded-[32px] py-[5px] px-[10px]
                  lg:w-[241px] lg:h-[45px] lg:rounded-[35px] lg:py-[8px] lg:px-[10px] lg:gap-[10px]
                  xl:w-[285px] xl:h-[49px] xl:top-[-0.21px] xl:rounded-[32px] xl:py-[8px] xl:px-[10px] 
                  "
                    >
                      <div
                        className="rounded-full w-[24px] h-[24px] bg-custom-cyan flex items-center justify-center  lg:w-[32px] lg:h-[33px]
                      xl:w-[32px] xl:h-[32px] xl:rounded-[100px] xl:gap-[10px]
                    "
                      >
                        <ArrowRight
                          color="black"
                          className="w-[10.79px] h-[10.34px] top-[6.58px] left-[6.75px]
                      lg:w-[14.22px] lg:h-[14.22px] lg:top-[9.05] lg:left-[8.89px]
                      xl:w-[14.22px] xl:h-[14.22px] xl:top-[9.05px] xl:left-[8.89px]

                      "
                        />
                      </div>
                      <p
                        className="pl-3 text-[14px] font-[400] leading-[20px]
                    lg:w-[183px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]\
                      xl:w-[223px] xl:h-[30px] xl:text-[22px] xl:leading-[30px]
                    "
                      >
                        Dependable Service
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right section (form) */}
                <div
                  className="border-[1px] border-custom-cyan/60 w-[345px] h-[423px] rounded-[25px] py-[20px] px-[15px]
              lg:w-[515px] lg:h-[575px] lg:rounded-[25px] lg:border-[1px] lg:p-[25px]
              xl:w-[635px] xl:h-[605px] xl:rounded-[25px] xl:border-[1px] xl:p-[25px] xl:gap-[10px]
              "
                >
                  <h1
                    className="text-[20px] font-[400] leading-[25px]
                lg:w-[465px] lg:h-[45px] lg:font-[400] lg:text-[26px] lg:leading-[32px]
                xl:w-[585px] xl:h-[45px] xl:font-[400] xl:text-[30px] xl:leading-[36px]
                "
                  >
                    Get a quote
                  </h1>

                  {/* helper text contrast */}
                  <p
                    className="text-[14px] leading-[20px] text-gray-700 dark:text-gray-300
                lg:w-[465px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                xl:w-[585px] xl:h-[60px] xl:text-[22px] xl:leading-[30px]
                "
                  >
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </p>

                  <form className="mt-5 space-y-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-200 dark:bg-gray-900 w-[315px] h-[40px] rounded-[12px] py-[10px] px-[20px]
                  lg:w-[465px] lg:h-[57px] lg:rounded-[12px] lg:py-[16px] lg:px-[20px]
                  xl:w-[584px] xl:h-[62px] xl:rounded-[12px] xl:py-[16px] xl:px-[16px]
                  "
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-200 dark:bg-gray-900 w-[315px] h-[40px] rounded-[12px] py-[10px] px-[20px]
                  lg:w-[465px] lg:h-[57px] lg:rounded-[12px] lg:py-[16px] lg:px-[20px]
                    xl:w-[584px] xl:h-[62px] xl:rounded-[12px] xl:py-[16px] xl:px-[16px]
                  "
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="bg-gray-200 dark:bg-gray-900 w-[315px] h-[40px] rounded-[12px] py-[10px] px-[20px]
                  lg:w-[465px] lg:h-[57px] lg:rounded-[12px] lg:py-[16px] lg:px-[20px]
                    xl:w-[584px] xl:h-[62px] xl:rounded-[12px] xl:py-[16px] xl:px-[16px]
                  "
                    />
                    <textarea
                      placeholder="Your message"
                      className="bg-gray-200 dark:bg-gray-900 w-[315px] h-[40px] rounded-[12px] py-[10px] px-[20px]
                  lg:w-[465px] lg:h-[94px] lg:rounded-[12px] lg:py-[15px] lg:px-[20px]
                  xl:w-[584px] xl:h-[94px] xl:rounded-[12px] xl:py-[15px] xl:px-[20px]
                  "
                    />

                    <button
                      type="submit"
                      className="w-[314px] h-[38px] rounded-[10px] py-[9px] px-[108px] text-center bg-custom-cyan text-black hover:bg-custom-cyan/80 transition 
                    text-[14px] font-[400] leading-[20px]
                    lg:w-[466px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[170px]
                    xl:w-[584px] xl:h-[56px] xl:py-[13px] xl:px-[229px] items-center
                    "
                    >
                      <p
                        className="xl-text-[22px]  w-[98px] h-[20px] leading-[20px]
                    xl:w-[140px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                    2xl:w-[154px] 2xl:h-[30px] 2xl:text-[22px] 2xl:leading-[30px]
                    "
                      >
                        Send Message
                      </p>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Review />
            <Help />

            {/* footer block: gradient adapts */}
            <div
              className="bg-gradient-to-b from-gray-100 to-gray-300   dark:from-[rgba(24,24,24,0.35)]
          dark:via-[rgba(255,255,255,0.2)]
          dark:to-[rgba(24,24,24,0.35)]
          py-6 px-4  mt-10  sm:w-[520px] sm:mx-auto
          w-[345px] h-[333px] rounded-[20px] mx-auto
          md:w-[573px] md:h-[353px]
          lg:w-[716px] lg:h-[355px] lg:top-[7781px] lg:left-[123px] lg:rounded-[20px] lg:py-[42px] lg:px-[70px]
          xl:w-[913px] xl:h-[384px] xl:top-[8140px] xl:left-[184px] xl:rounded-[20px] xl:py-[42px] xl:px-[70px] 
          2xl:w-[984px] 2xl:h-[410px] 
          lg transition-colors duration-300"
            >
              <h1
                className="text-center text-[36px] leading-[35px] font-[500] text-gray-800 dark:text-white
            sm:text-[36px] sm:w-[359px] sm:h-[80px] sm:font-[500] sm:leading-[40px] sm:mx-auto
            md:text-[40px] md:w-[533px] md:h-[100px] md:font-[500] md:leading-[50px] md:mx-auto
            lg:w-[639px] lg:h-[110px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
            xl:w-[773px] xl:h-[120px] xl:text-[64px] xl:leading-[60px] xl:font-[500]
            2xl:w-[844px] 2xl:h-[140px] 2xl:text-[72px] 2xl:leading-[70px] 2xl:font-[500] 2xl:mx-auto
            "
              >
                Ready to{" "}
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Manage
                </span>{" "}
                your team like a pro?
              </h1>

              <p
                className="text-center mt-5 w-[317px] h-[60px] ext-[14px] fount-[400] leading-[25px]  text-gray-700 dark:text-gray-300  mx-auto 
            sm:w-[359px] sm:h-[60px] sm:text-[15px] sm:font-[400] sm:leading-[20px]
            md:w-[433px] md:h-[66px] md:text-[16px] md:font-[400] md:leading-[22px]
            lg:w-[639px] lg:h-[50px] lg:text-[18px] lg:font-[400] lg:leading-[25px] 
            xl:w-[700px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
            2xl:w-[844px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 
            "
              >
                Pushing the boundaries of what&apos;s possible in the digital
                real. Join us this journey into the future of technology
              </p>

              <div
                className="mt-10 mx-auto bg-custom-cyan text-black dark:text-gray-900 text-center hover:opacity-90 transition w-[114px] h-[38px] rounded-[4.76px] py-[9px] px-[18px]
            sm:w-[133px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]
            md:w-[139px] md:h-[48px] md:rounded-[10px] md:py-[13px] md:px-[25px]
            lg:w-[150px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
            xl:w-[161px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
            2xl:w-[170px] 2xl:h-[56px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px] 
            "
              >
                <button
                  type="button"
                  className="text-[14px] leading-[20px] font-[400] w-[78px] h-[20px]
                sm:w-[83px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                md:w-[89px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                lg:w-[100px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                xl:w-[111px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px] 
                2xl:w-[122px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
              "
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
