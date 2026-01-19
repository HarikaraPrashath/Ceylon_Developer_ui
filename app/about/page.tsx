"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Check } from "lucide-react";
import Image from "next/image";
import BrandIdentity from "../components/About/BrandIdentity";
import Card from "../components/About/Card";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  // wait until client to know actual theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Before mount we don't know light/dark for sure, so don't render hero yet.
    // You could return a skeleton if you want, but null = no double-banner flash.
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const content = {
    mission: {
      title: "Empowering Business to Build Lasting Relationships",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi "
    },
    vision: {
      title: "Shaping the Future of Business Innovation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi "
    },
    goal: {
      title: "Driving Success Through Innovation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi "
    },
  };
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {isDark ? (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-bottom"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom,bottom,center",
            backgroundSize: "cover,100%",
          }}
        >
          <Navbar />
          <h1 className=" text-white mx-auto mt-8 text-center
            w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] 
           sm:w-[435px] sm:h-[40px] sm:font-[600] sm:text-[40x] sm:leading-[100%] sm:text-center
           md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
           lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] le:font-[600]
           xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] xl:font-[600]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 2xl:font-[600]
          ">About</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-center bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className=" text-black mx-auto mt-8 text-center
            w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] 
           sm:w-[435px] sm:h-[40px] sm:font-[600] sm:text-[40x] sm:leading-[100%] sm:text-center
           md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
           lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] le:font-[600]
           xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] xl:font-[600]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 2xl:font-[600]
          ">About</h1>
        </div>
      )}

      <div className="sub-title-div">
        <p className="  text-center mx-auto
        w-[307px] h-[60px] font-[400] text-[14px] leading-[20px] mt-[25px]
        sm:w-[435px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
        md:h-[66px] md:text-[16px] md:leading-[22px]
        lg:w-[643px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
        xl:w-[643px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px] xl:-mt-10
        2xl:w-[647px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 2xl:-mt-10
        ">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>
        {/* main contain */}
        <div className="mt-10 mx-auto">
          <div className="mt-7 flex flex-col lg:flex-row-reverse lg:justify-center lg:w-[949px] lg:h-[375px] lg:top-[386px] lg:left-[38px] lg:gap-[40px]
           lg:-ml-20 xl:mx-auto 2xl:w-[1198px] 2xl:h-[445px] 2xl:top-[500px] 2xl:left-[121px] 2xl:gap-[85px]
          ">
            {/* flex content place */}
            <div className="">
              <h1 className="text-center
              w-[322px] h-[35px] font-[500] text-[36px] leading-[35px]
              sm:w-[564px] sm:h-[40px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
              md:w-[621px] md:h-[50px] md:font-[500] md:text-[40px] md:leading-[50px]
              lg:w-[396px] lg:h-[55px] lg:font-[500] lg:text-[48px] lg:leading-[55px] lg:text-start
              xl:w-[503px] xl:h-[60px] xl:font-[500] xl:text-[64px] xl:leading-[60px]
              2xl:w-[503px] 2xl:h-[70px] 2xl:font-[500] 2xl:text-[72px] 2xl:leading-[70px]
              ">
                Our{" "}
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Story
                </span>{" "}
              </h1>

              <p className="mt-4
              w-[322px] h-[180px] font-[400] text-[14px] leading-[20px]
              sm:w-[564px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[621px] md:h-[88px] md:font-[400] md:text-[16px] md:leading-[22px]
              lg:w-[396px] lg:h-[175px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
              xl:w-[503px] xl:h-[168px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
              2xl:w-[503px] 2xl:h-[210px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
              ">
                Lorem ipsum dolor sit amet, consectetur sed adipiscing elit, sed do eiusmod tempor  dolore incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.
              </p>

              <div className=" w-[194px] h-[92px]
              sm:w-[564px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[220px] md:h-[86px] md:gap-[10px] md:mt-10
              lg:w-[243px] lg:h-[95px] lg:gap-[10px] lg:mt-15
              xl:w-[503px] xl:h-[168px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
              2xl:w-[289px] 2xl:h-[110px] 2xl:gap-[10px] 2xl:mt-15
              ">
                <div className="flex mt-4 
                w-[194px] h-[24px] top-[2px] bottom-[2px] gap-[16px]
                sm:w-[208px] sm:h-[5px] sm:top-[2px] sm:bottom-[2px] sm:gap-[15px]
                md:w-[220px] md:h-[5px] md:top-[2px] md:bottom-[2px] md:gap-[15px]
                lg:w-[243px] lg:h-[5px] lg:gap-[15px]
                xl:w-[266px] xl:h-[5px] xl:gap-[15px]
                2xl:w-[289px] 2xl:h-[5px] 2xl:gap-[15px]
                ">
                  <div className="text-black rounded-full bg-custom-cyan 
                  w-[20px] h-[18.18px]
                  sm:w-[20px] sm:h-[20px]
                  md:w-[20px] md:h-[20px]
                  lg:w-[20px] lg:h-[20px] xl:mt-1
                  ">
                    <Check className="w-[18.05px] h-[18.18px] top-[0.01px] left-[0.58] md:w-[20px] md:h-[20px] text-center " />
                  </div>{" "}
                  <p className="w-[162px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[173px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[185px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                  lg:w-[208px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  xl:w-[231px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                  2xl:w-[254px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                  ">Advanced Ai Foundation</p>
                </div>
                <div className="flex  mt-4
                w-[194px] h-[24px] top-[2px] bottom-[2px] gap-[16px]
                sm:w-[208px] sm:h-[5px] sm:gap-[10px] sm:mt-10
                md:w-[220px] md:h-[5px] md:top-[2px] md:bottom-[2px] md:gap-[15px]
                lg:w-[243px] lg:h-[5px] lg:gap-[15px]
                xl:w-[266px] xl:h-[5px] xl:gap-[15px]
                ">
                  <div className="text-black rounded-full bg-custom-cyan 
                  w-[20px] h-[18.18px]
                  sm:w-[20px] sm:h-[20px]
                   md:w-[20px] md:h-[20px]
                   lg:w-[20px] lg:h-[20px] xl:mt-1
                  ">
                    <Check className="w-[18.05px] h-[18.18px] top-[0.01px] left-[0.58] text-center md:w-[20px] md:h-[20px] " />
                  </div>{" "}
                  <p className="w-[162px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[173px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[185px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                  lg:w-[208px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                   xl:w-[231px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                   2xl:w-[254px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                  ">Purpose-Driven</p>
                </div>
                <div className="flex mt-4
                w-[194px] h-[24px] top-[2px] bottom-[2px] gap-[16px]
                sm:w-[208px] sm:h-[5px] sm:gap-[10px] sm:mt-10
                 md:w-[220px] md:h-[5px] md:top-[2px] md:bottom-[2px] md:gap-[15px]
                   lg:w-[243px] lg:h-[5px] lg:gap-[15px]
                   xl:w-[266px] xl:h-[5px] xl:gap-[15px]
                ">
                  <div className="text-black rounded-full bg-custom-cyan 
                  w-[20px] h-[18.18px]
                  sm:w-[20px] sm:h-[20px]
                   md:w-[20px] md:h-[20px]
                   lg:w-[20px] lg:h-[20px] xl:mt-1
                  ">
                    <Check className="w-[18.05px] h-[18.18px] top-[0.01px] left-[0.58] text-center md:w-[20px] md:h-[20px] " />
                  </div>{" "}
                  <p className="w-[162px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[173px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[185px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                  lg:w-[208px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                   xl:w-[231px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                   2xl:w-[254px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                  ">Continuous Evolution</p>
                </div>
              </div>
            </div>
            {/* image placement */}
            <div className="mx-auto mt-10">
              {/* Light mode image */}
              <Image
                src="/Images/Container-light.png"
                alt="Light mode container"
                width={800}
                height={800}
                priority
                className="block dark:hidden border w-[338.11px] h-[243.94px] rounded-[13.28px]
                sm:w-[529px] sm:h-[382.2px] sm:rounded-[20.8px]
                md:w-[591px] md:h-[427px] md:rounded-[23.24px]
                lg:w-[513px] lg:h-[371px] lg:rounded-[20.17px]
                xl:w-[561px] xl:h-[405px] xl:rounded-[22.04px]
                2xl:w-[610px] 2xl:h-[441px] 2xl:rounded-[24x]
                "
              />

              {/* Dark mode image */}
              <Image
                src="/Images/Container.png"
                alt="Dark mode container"
                width={800}
                height={800}
                priority
                className="hidden dark:block border w-[338.11px] h-[243.94px] rounded-[13.28px]
                  sm:w-[529px] sm:h-[382.2px] sm:rounded-[20.8px]
                  md:w-[591px] md:h-[427px] md:rounded-[23.24px]
                  g:w-[513px] lg:h-[371px] lg:rounded-[20.17px]
                  xl:w-[561px] xl:h-[405px] xl:rounded-[22.04px]
                   2xl:w-[610px] 2xl:h-[441px] 2xl:rounded-[24x]
                "
              />
            </div>

          </div>

          <h1 className="text-center mt-10 w-[357px] h-[70px] font-[500] text-[36px] leading-[35px] mx-auto 
          sm:w-[444px] sm:h-[80px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
          md:w-[642px] md:h-[50px] md:font-[500] md:text-[40px] md:leading-[50px]
          lg:w-[894px] lg:h-[55px] lg:font-[500] lg:text-[48px] lg:leading-[55px] lg:mt-25 lg:text-center lg:-ml-13
          xl:w-[1082px] xl:h-[60px] xl:font-[500] xl:text-[64px] xl:leading-[60px] xl:mt-35 xl:text-center xl:mx-auto
          2xl:w-[1138px] 2xl:h-[70px] 2xl:font-[500] 2xl:text-[72px] 2xl:leading-[70px] 2xl:mt-35 2xl:text-center 2xl:mx-auto
          ">
            Why Choose{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Ceylon Developers?
            </span>{" "}
          </h1>

          <div className="mx-auto flex flex-col items-center">
            {/* lg screen size style */}
            <div className="lg:flex lg:flex-row lg:justify-center lg:gap-5">
              {/* container 1 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 p-[1px] sm:w-110 md:120 bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10
                md:w-[641px] lg:w-[430px] xl:w-[524px] 2xl:w-[552px]
                ">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 37.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7 mt-10"
                          />
                          <h1 className="text-center mt-5 sm:-ml-8
                          sm:w-[456px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
                          md:w-[598px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px] md:mx-auto
                          lg:w-[386px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] lg:mx-auto
                          xl:w-[457px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px] xl:mx-auto
                          2xl:w-[508px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mx-auto
                          ">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Effortless
                            </span>{" "}
                            Task Management{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5 mb-10
                          sm:w-[376px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                          md:w-[598px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                          lg:w-[386px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                          xl:w-[405px] xl:h-[84px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                          2xl:w-[450px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                          ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container 2 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 md:120 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10   md:w-[641px] lg:w-[430px]
                 xl:w-[524px] 2xl:w-[552px]
                ">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3
                      ">
                        <div className="">
                          <Image
                            src="/Images/messege.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7 mt-10"
                          />
                          <h1 className=" text-center mt-5 sm:-ml-8
                           sm:w-[456px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
                            md:w-[598px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px] md:mx-auto
                            lg:w-[386px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] lg:mx-auto
                            xl:w-[457px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px] xl:mx-auto
                            2xl:w-[508px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mx-auto
                          ">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Seamless
                            </span>{" "}
                            Team Collaboration{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5 mb-10
                           sm:w-[376px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px] 
                           md:w-[598px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                           lg:w-[386px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                            xl:w-[405px] xl:h-[84px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                          2xl:w-[450px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                          ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* container 3 */}
            <div className="lg:flex lg:flex-row lg:justify-center lg:gap-8">
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 md:120 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10   md:w-[641px]
                lg:w-[430px]  xl:w-[524px] 2xl:w-[552px]
                ">
                  <div className="rounded-[calc(1.7rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 5.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7 mt-10"
                          />
                          <h1 className=" text-center mt-5 sm:-ml-8
                           sm:w-[456px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
                            md:w-[598px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px] md:mx-auto
                            lg:w-[386px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] lg:mx-auto
                            xl:w-[457px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px] xl:mx-auto
                        
                             2xl:w-[508px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mx-auto
                          ">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Comprehensive
                            </span>{" "}
                            Project Insight{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5 mb-10
                           sm:w-[376px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                           md:w-[598px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                           lg:w-[386px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px] 
                          xl:w-[405px] xl:h-[84px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                          2xl:w-[450px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                          ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container 4 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 p-[1px] md:120 bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10   md:w-[641px]  xl:w-[524px] lg:w-[430px] 2xl:w-[552px]">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 32.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7 mt-10 "
                          />
                          <h1 className="text-center mt-5 sm:-ml-9
                           sm:w-[456px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
                            md:w-[598px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px] md:mx-auto
                            lg:w-[386px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] lg:mx-auto
                            xl:w-[457px] xl:h-[34px] xl:font-[400] xl:text-[28px] xl:leading-[34px] xl:mx-auto
                            2xl:w-[508px] 2xl:h-[36px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mx-auto
                          ">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Smart
                            </span>{" "}
                            Deadline Tracking{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5 mb-10
                           sm:w-[376px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                             md:w-[598px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
                             lg:w-[386px] lg:h-[75px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                             xl:w-[405px] xl:h-[84px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                             2xl:w-[450px] 2xl:h-[120px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                          ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission , Goal , Vision represent */}
          <div className="lg:flex lg:flex-row lg:justify-center lg:mt-10  x ">
            <div className="">
              {/* Tabs */}
              <div className="mt-10 flex flex-row
              w-[337px] h-[34px] gap-[20px]
              sm:w-[402px] sm:h-[40px] sm:gap-[28px]
              md:w-[417px] md:h-[42px] md:gap-[28px]
              lg:w-[446px] lg:h-[45px] lg:gap-[28px]
              xl:w-[475px] xl:h-[48px] xl:gap-[28px]
              2xl:w-[504px] 2xl:h-[50px] 2xl:gap-[28px]
              ">
                <button
                  type="button"
                  onClick={() => setActiveTab("mission")}
                  className={`w-35 rounded-md py-1 px-1 text-center sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] ${activeTab === "mission"
                    ? "bg-custom-cyan text-black "
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Mission
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("vision")}
                  className={`w-25 rounded-md py-1 px-1 text-center sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] ${activeTab === "vision"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Vision
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("goal")}
                  className={`w-25 rounded-md py-1 px-1 text-center sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] ${activeTab === "goal"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Goal
                </button>
              </div>

              {/* Dynamic Content */}
              <h1 className=" w-[290px] h-[50px] font-[400] text-[20px] leading-[25px] mt-5
              sm:w-[541px] sm:h-[56px] sm:font-[400] sm:text-[22px] sm:leading-[28px] 
              md:w-[560px] md:h-[60px] md:font-[400] md:text-[24px] md:leading-[30px] 
              lg:w-[411.83px] lg:h-[64px] lg:font-[400] lg:text-[26px] lg:leading-[32px] 
              xl:w-[411.83px] xl:h-[68px] xl:font-[400] xl:text-[28px] xl:leading-[34px] 
              2xl:w-[411.83px] 2xl:h-[72px] 2xl:font-[400] 2xl:text-[30px] 2xl:leading-[36px] 
              ">
                {content[activeTab].title}
              </h1>
              <p className="w-[338px] h-[80px] font-[400] text-[14px] leading-[20px] mt-5
              sm:w-[541px] sm:h-[60px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[611px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px]
              lg:w-[411.83px] lg:h-[100px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
              xl:w-[411.83px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
              2xl:w-[411.83px] 2xl:h-[150px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
              ">
                {content[activeTab].text}
              </p>
            </div>
            {/* Image Placement */}
            <div className="">
              <Image
                src="/Images/Card.png"
                alt="Card"
                width={200}
                height={200}
                priority
                className="mx-auto mt-5 w-[345.83] h-[281.42px] sm:w-[485px] sm:h-[395px] md:w-[599.67px] md:h-[498px] lg:w-[555px] lg:h-[354px]
                xl:w-[590px] xl:h-[477px] 2xl:w-[664px] 2xl:h-[540px]
                "
              />
            </div>
          </div>

          {/* The identity of our brand */}
          <BrandIdentity />

          <Card />


          <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-950  transition-colors duration-300 sm:mt-10 sm:mx-auto
          w-[345px] h-[333px] top-[4888.94px] left-[15px] rounded-[20px] py-[35px] px-[10px]
          sm:w-[499px] sm:h-[325px] sm:top-[5898.2px] sm:left-[71px] sm:rounded-[20px] sm:py-[42px] sm:px-[70px] 
          md:w-[573px] md:h-[352px] 
          lg:w-[779px] lg:h-[355px] lg:top-[4516px] lg:left-[123px] lg:rounded-[20px] lg:py-[42px] lg:px-[70px]
          xl:w-[913px] xl:h-[384px] xl:top-[4568px] xl:left-[184px] xl:rounded-[20px] xl:py-[42px] xl:px-[70px]
          ">
            <h1 className="text-center  text-gray-800 dark:text-white
            w-[325px] h-[105px] font-[500] text-[36px] leading-[35px]
            sm:w-[359px] sm:h-[80px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
            md:w-[433px] md:h-[100px] md:font-[500] md:text-[40px] md:leading-[50px]
            lg:w-[639px] lg:h-[110px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
            xl:w-[773px] xl:h-[120px] xl:font-[500] xl:text-[64px] xl:leading-[60px]
            ">
              Ready to
              <span className="[font-family:var(--font-kaushan)] pl-2">
                Manage
              </span>{" "}
              your team like a pro?
            </h1>

            <p className="text-center mt-6 text-gray-700 dark:text-gray-300 mx-auto 
            w-[317px] h-[60px] font-[400] text-[14px] leading-[20px]
            sm:w-[359px] sm:h-[60px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
            md:w-[433px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px]
            lg:w-[639px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
            xl:w-[773px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
            ">
              Pushing the boundaries of what&apos;s possible in the digital real.
              Join us this journey into the future of technology
            </p>

            <div className="bg-custom-cyan text-black dark:text-gray-900  text-center mx-auto mt-6 hover:opacity-90 transition flex
            w-[136px] h-[38px] py-[9px] px-[18px] rounded-[4.79px]
            sm:w-[133px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px] 
            md:w-[139px] md:h-[48px] md:rounded-[10px] md:py-[13px] md:px-[25px] 
            lg:w-[150px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
            xl:w-[161px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
            ">
              {/* Visible only on mobile (<640px) */}
              <button type="button" className="block sm:hidden 
              w-[76px] h-[20px] font-[400] text-[14px] leading-[20px]
              ">
                Book a call
              </button>

              {/* Visible only on small screens and above (≥640px) */}
              <button type="button" className="hidden sm:block
              sm:w-[83px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
              md:w-[89px] md:h-[22px] md:text-[16px] md:leading-[22px]
              lg:w-[100px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
              xl:w-[111px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
              ">
                Get Started
              </button>

              <ArrowUpRight className="sm:hidden w-[14px] h-[14px] mt-1" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
