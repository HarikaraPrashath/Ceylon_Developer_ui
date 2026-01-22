"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight, FileSliders, CircleCheck, ChartNoAxesCombined, Check } from "lucide-react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className=" w-[full] mx-auto  bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
       <div className=" mx-auto text-black dark:text-white">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="head-banner-layout"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundPosition: "bottom,bottom,center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 100%",
            height: "100px",
          }}
        >
          <Navbar />
          <h1 className=" text-white
           w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] text-center mx-auto mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] 
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
          ">Project Details</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100px",
          }}
        >
          <Navbar />
          <h1 className=" text-black
           w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] text-center mx-auto mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] 
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
          ">Project Details</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="px-3 mt-20 xl:mt-20 ">
        <p className="text-center text-gray-700 dark:text-gray-300 
         w-[307px] h-[80px] font-[400] text-[14px] leading-[20px] mx-auto
        sm:w-[435px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px] sm:mx-auto
        md:w-[435px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mx-auto md:mt-5
        lg:w-[643px] lg:h-[80px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mx-auto lg:mt-30 
        xl:w-[643px] xl:h-[66px] xl:font-[400] xl:text-[20px] xl:leading-[28px] xl:mx-auto xl:mt-35 
        2xl:w-[647px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mx-auto 2xl:mt-40
        ">
          Pushing the boundaries of what&apos;s possible in the digital realm. Join us on this journey into the future of technology.
        </p>

        {/* Main content */}
        <div className=" text-gray-800 dark:text-gray-200 md:w-[649px] mx-auto lg:w-[859px] xl:w-[1200px] 2xl:mt-10 2xl:w-[1200px] ">
          <Image
            src="/Images/case.png"
            alt="Case Studies image"
            width={1000}
            height={1000}
            className=" mx-auto
            w-[315px] 273px rounded-[5px]
            sm:w-[537px] sm:h-[432px] sm:rounder-[3.58px]
            md:w-[649px] md:h-[521px] md:rounder-[5px]
            lg:w-[859px] lg:h-[690px] lg:rounded-[5px]
            xl:w-[1124px] xl:h-[902px] xl:rounded-[7.49px]
            2xl:w-[1200px] 2xl:h-[964px] 2xl:rounded-[8px]
            "
            priority
          />

          {/* Info Icons */}
          <div className="flex
          w-[315px] h-[105px] gap-[20px] pt-2 
          sm:w-[550.22px] sm:h-[64px] sm:gap-[25.11px] mx-auto sm:justify-around
          md:w-[596.87px] md:h-[64px] md:gap-[15.11px]
          lg:w-[790px] lg:h-[71px] lg:gap-[20px] lg:justify-between
          xl:w-[1037px] xl:h-[93px] xl:gap-[25px] 
          2xl:w-[1037px] 2xl:h-[110px] 2xl:gap-[25px]
          ">
            <div className="flex gap-1 sm:w-[167px] sm:h-[44px] ">
              <FileSliders className=" mt-1 w-[15px] h-[15px] top-[0.46px] left-[0.46px] 2xl:w-[25px] 2xl:h-[25px]
              sm:w-[12.84px] sm:h-[12.84px]
              xl:w-[22px] xl:h-[22px]
              " /> <p
                className="w-[73px] h-[25px] font-[500] text-[18px] leading-[25px]
                sm:w-[73px] sm:h-[24px] sm:font-[500] sm:text-[18px] sm:leading-[24px]
                md:w-[81px] md:h-[24px] md:text-[20px] md:leading-[24px]
                xl:W-[291px] xl:h-[44px] xl:text-[28px] xl:leading-[34px]
                2xl:W-[291px] 2xl:h-[44px] 2xl:text-[30px] 2xl:leading-[36px]
                "
              >Platform <span className="
              w-[83.3px] h-[20px] text-[14px] leading-[20px]
              sm:w-[145px] sm:h-[20px] sm:text-[15px] sm:leading-[20px] 
              md:w-[166.22px] md:h-[22px] md:text-[16px] md:leading-[22px]
              xl:w-[287px] xl:h-[38px] xl:text-[20px] xl:leading-[28px]
               2xl:w-[287px] 2xl:h-[38px] 2xl:text-[22px] 2xl:leading-[30px]
               ">Web</span></p>
            </div>
            <div className="flex gap-1 sm:w-[167px] sm:h-[44px]">
              <CircleCheck className="w-[17px] h-[17px] mt-1
              sm:w-[16.62px] sm:h-[16.62px]
              xl:w-[22px] xl:h-[22px]
               2xl:w-[25px] 2xl:h-[25px]
              " /> <p className="
              w-[75px] h-[25px] font-[500] text-[18px] leading-[25px] 
              sm:w-[75px] sm:h-[24px] sm:font-[500] sm:text-[18px] sm:leading-[24px] 
              md:w-[83px] md:h-[24px] md:font-[500] md:text-[20px] md:leading-[24px] 
               xl:W-[291px] xl:h-[44px] xl:text-[28px] xl:leading-[34px]
               2xl:W-[291px] 2xl:h-[44px] 2xl:text-[30px] 2xl:leading-[36px]
              ">Service <span className="
              w-[81.43px] h-[40px] font-[400] text-[14px] leading-[20px]
               sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px] sm:whitespace-nowrap
              md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] 
              xl:w-[287px] xl:h-[38px] xl:text-[20px] xl:leading-[28px]
               2xl:w-[287px] 2xl:h-[38px] 2xl:text-[22px] 2xl:leading-[30px]
              ">Frontend & Backend</span></p>
            </div>
            <div className="flex gap-1 sm:w-[167px] sm:h-[44px]">
              <ChartNoAxesCombined className="mt-1 w-[17px] h-[17px] top-[-0.28px] left-[-0px]
              sm:w-[16.62px] sm:h-[16.62px]
               2xl:w-[25px] 2xl:h-[25px]
              xl:w-[22px] xl:h-[22px]
              " /> <p
                className="w-[72px] h-[25px] font-[500px] text-[18px] leading-[25px]
                 sm:w-[75px] sm:h-[24px] sm:font-[500] sm:text-[18px] sm:leading-[24px] 
              md:w-[83px] md:h-[24px] md:font-[500] md:text-[20px] md:leading-[24px] 
               xl:W-[291px] xl:h-[44px] xl:text-[28px] xl:leading-[34px]
               2xl:W-[291px] 2xl:h-[44px] 2xl:text-[30px] 2xl:leading-[36px]
                "
              >Industry <span className="
               w-[81.43px] h-[40px] font-[400] text-[14px] leading-[20px]
              sm:w-[144px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
               md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] 
               xl:w-[287px] xl:h-[38px] xl:text-[20px] xl:leading-[28px]
               2xl:w-[287px] 2xl:h-[38px] 2xl:text-[22px] 2xl:leading-[30px]
              ">Technology</span></p>
            </div>
          </div>

          {/* Description */}
          <div className=" sm:w-[530px] md:w-[660px]  mx-auto lg:w-[859px] xl:w-[1159px] 2xl:w-[1200px]  ">
            <h1 className="
            w-[237px] h-[40px] font-[500] text-[36px] leading-[35px]
            sm:w-[530px] sm:h-[44px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
            md:w-[660px] md:h-[60px] md:font-[500] md:text-[40px] md:leading-[50px]
            lg:w-[891px] lg:h-[65px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
            xl:w-[1159px] xl:h-[80px] xl:font-[500] xl:text-[64px] xl:leading-[60px]
            2xl:w-[1200px] 2xl:h-[90px] 2xl:font-[500] 2xl:text-[72px] 2xl:leading-[70px]
            ">SaaS Website</h1>

            <p className="
            w-[345px] h-[210px] font-[400] text-[14px] leading-[20px]
            sm:w-[530px] sm:h-[140px] sm:font-[400] sm:text-[15px] sm:leading-[20px] mx-auto
            md:w-[660px] md:h-[180px] md:text-[16px] md:leading-[22px] 
            lg:w-[891px] lg:h-[180px] lg:text-[18px] lg:leading-[25px] 
            xl:w-[1159px] xl:h-[190px] xl:text-[20px] xl:leading-[28px] 
            2xl:w-[1200px] 2xl:h-[190px] 2xl:text-[22px] 2xl:leading-[30px] 
            ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.            </p>

            {/* Secondary Image */}
            <div className="hidden sm:block md:flex md:flex-row md:w-[668px] mx-auto lg:w-[891px] lg:h-[410px] xl:w-[1159px] xl:h-[500px] 2xl:w-[1200px]">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="
                sm:w-[401px] sm:h-[301.79px] sm:rounded-[5.1px]
                md:w-[401px] md:h-[301px] md:rounded-[5px]
                lg:w-[481px] lg:h-[362px] lg:rounded-[6px]
                xl:w-[1159px] xl:h-[452px] xl:gap-[56px]
                2xl:w-[629px] 2xl:h-[472px] 2xl:rounded-[8px]
                "
                priority
              />
              <div>

                <p className=" 
              sm:w-[530px] sm:h-[90px]  sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[247px] md:h-[408px] md:gap-[30px]
              lg:w-[385px] lg:h-[250px] lg:text-[18px] lg:leading-[25px] 
              xl:w-[502px]  xl:text-[20px] xl:leading-[28px] 
              2xl:w-[537px] 2xl:h-[270px] 2xl:text-[22px] 2xl:leading-[30px]
              ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.

                  <span className="hidden md:block lg:pt-2 xl:w-[502px]  xl:text-[20px] xl:leading-[28px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </p>

                <div className="hidden lg:block h-[100px] sm:h-[110px] md:h-[120px] xl:h-[140px] 2xl:w-[240px] 2xl:h-[150px]">
                  {["Analytics & Strategy", "UI/UX Design", "Branding & Identity", "Web Development"].map((item) => (
                    <div key={item} className="flex w-[160px] h-[20px] gap-[12px] md:w-[259px] md:h-[22px] md:gap-[12px]  xl:w-[222px]
                    2xl:w-[240px] 2xl:h-[30px]
                    ">
                      <Check className="text-custom-cyan w-5 h-5 xl:w-[18px] xl:h-[14px] xl:mt-2" />
                      <p className="w-[134px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[229px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                  md:w-[229px] md:h-[20px] md:text-[16px] md:leading-[22px]
                  lg:w-[172px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                  xl:w-[191px] xl:h-[30px]  xl:text-[20px] xl:leading-[28px]
                  2xl:w-[210px] 2xl:h-[30px]  2xl:text-[22px] 2xl:leading-[30px]
                  ">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="h-[100px] sm:h-[110px] md:h-[120px] lg:hidden">
              {["Analytics & Strategy", "UI/UX Design", "Branding & Identity", "Web Development"].map((item) => (
                <div key={item} className="flex w-[160px] h-[20px] gap-[12px] md:w-[259px] md:h-[22px] md:gap-[12px] ">
                  <Check className="text-custom-cyan w-5 h-5" />
                  <p className="w-[134px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[229px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                  md:w-[229px] md:h-[20px] md:text-[16px] md:leading-[22px]
                  ">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <h1 className="text-center
            w-[346px] h-[40px] font-[500] text-[36px] leading-[35px]
            sm:w-[530px] sm:h-[50px] sm:font-[500] sm:text-[36px] sm:leading-[40px] sm:text-start
            md:w-[668px] md:h-[60px] md:text-[40px] md:leading-[50px]
            lg:w-[891px] lg:h-[70px] lg:text-[48px] lg:leading-[55px]
            xl:w-[1159px] xl:h-[70px] xl:text-[64px] xl:leading-[60px]
            2xl:w-[1200px] 2xl:h-[90px] 2xl:text-[72px] 2xl:leading-[70px]
            ">Technologies Used</h1>
            <p className="
            w-[345px] h-[160px] font-[400] text-[14px] leading-[20px]
            sm:w-[530px] sm:h-[120px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
            md:w-[668px] md:h-[120px] md:font-[400] md:text-[16px] md:leading-[22px]
            lg:w-[891px] lg:h-[120px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
            xl:w-[1159px] xl:h-[112px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
            2xl:w-[1200px] 2xl:h-[170px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
            ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             </p>

            <div className="flex flex-row w-[346px] h-[30px] gap-[8px]
            sm:w-[523px] sm:h-[48px] sm:justify-between
            md:w-[613px] md:h-[50px] md:gap-[10px]
            lg:w-[785px] lg:h-[60px] lg:rounded-[10px]
            xl:w-[900px] xl:h-[54px] xl:rounded-[10px]
            2xl:w-[1000px] 2xl:h-[56px] 2xl:rounded-[10px]
            ">
              <p className="text-custom-cyan w-[61px] h-[20px] font-[500] text-[14px] leading-[20px]
              sm:w-[96px] sm:h-[28px] sm:font-[500] sm:text-[22px] sm:leading-[28px]
              md:w-[104px] md:h-[30px] md:font-[500] md:text-[24px] md:leading-[30px]
              lg:w-[113px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
              xl:w-[121px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
              2xl:w-[130px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
              ">Frontend</p>
              <p className=" w-[61px] h-[20px] font-[500] text-[14px] leading-[20px]
              sm:w-[91px] sm:h-[28px] sm:font-[500] sm:text-[22px] sm:leading-[28px]
               md:w-[104px] md:h-[30px] md:font-[500] md:text-[24px] md:leading-[30px]
               lg:w-[113px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
               xl:w-[121px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
               2xl:w-[130px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
              ">Backend</p>
              <p className=" w-[40px] h-[20px] font-[500] text-[14px] leading-[20px]
              sm:w-[45px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
               md:w-[70px] md:h-[30px] md:font-[500] md:text-[24px] md:leading-[30px]
               lg:w-[113px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
               xl:w-[121px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
               2xl:w-[130px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
              ">VCS</p>
              <p className=" w-[61px] h-[20px] font-[500] text-[14px] leading-[20px]
              sm:w-[217px] sm:h-[28px] sm:font-[500] sm:text-[22px] sm:leading-[28px]
               md:w-[114px] md:h-[30px] md:font-[500] md:text-[24px] md:leading-[30px]
               lg:w-[113px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
               xl:w-[121px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
               2xl:w-[130px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
              ">Hosting/DevOps</p>
            </div>

            <div className="flex flex-row w-[196px] h-[60px] gap-[12px]
            sm:w-[310px] sm:h-[90px] sm:gap-[30px]
            md:w-[340px] md:h-[100px] md:gap-[30px]
            lg:w-[382px] lg:h-[120px] lg:gap-[30px]
            xl:w-[422px] xl:h-[120px] xl:gap-[30px]
            2xl:w-[476px] 2xl:h-[152px] 2xl:gap-[30px]
            ">
              <div className="border w-[92px] h-[38px] rounded-[4.13px] py-[7px] px-[10px] border-gray-600
              sm:w-[140px] sm:h-[70px] sm:border-[0.71px] sm:p-[15px] sm:rounded-[8px]
              md:w-[155px] md:h-[74px] md:border-[0.71px] md:p-[15px] md:rounded-[8px]
              lg:w-[176px] lg:h-[79px] lg:rounded-[7.96] lg:border-[0.8px] lg:py-[15px] lg:px-[18px]
              xl:w-[196px] xl:h-[82px] xl:rounded-[8.96] xl:border-[0.89px] xl:py-[15px] xl:px-[20px]
              2xl:w-[223px] 2xl:h-[92px] 2xl:rounded-[10px] 2xl:border-[1px] 2xl:py-[16px] 2xl:px-[24px]
              ">
                <FaReact className=" text-custom-cyan
                w-[72px] h-[24px] top-[0.39px] left-[0.09px]
                sm:w-[110px] sm:h-[40px] 
                md:w-[125px] md:h-[44px]
                lg:w-[140px] lg:h-[49px]
                xl:w-[156px] xl:h-[54px]
                 2xl:w-[176px] 2xl:h-[60px]
                " />
              </div>
              <div className="border  border-gray-600
              w-[92px] h-[38px] rounded-[4.13px] py-[7px] px-[10px]
              sm:w-[140px] sm:h-[70px] sm:border-[0.71px] sm:p-[15px] sm:rounded-[8px]
               md:w-[155px] md:h-[74px] md:border-[0.71px] md:p-[15px] md:rounded-[8px]
               lg:w-[176px] lg:h-[79px] lg:rounded-[7.96] lg:border-[0.8px] lg:py-[15px] lg:px-[18px]
               xl:w-[196px] xl:h-[82px] xl:rounded-[8.96] xl:border-[0.89px] xl:py-[15px] xl:px-[20px]
               2xl:w-[223px] 2xl:h-[92px] 2xl:rounded-[10px] 2xl:border-[1px] 2xl:py-[16px] 2xl:px-[24px]
              ">
                <FaJsSquare className=" text-yellow-400
                w-[72px] h-[24px] top-[0.39px] left-[0.09px]
                sm:w-[110px] sm:h-[40px] 
                md:w-[125px] md:h-[44px]
                lg:w-[140px] lg:h-[49px]
                xl:w-[156px] xl:h-[54px]
                2xl:w-[176px] 2xl:h-[60px]
                " />
              </div>
            </div>

            {/* Team Section */}
            <h1 className="
            w-[345px] h-[90px] font-[500] text-[36px] leading-[35px]
            sm:w-[420px] sm:h-[60px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
            md:w-[554px] md:h-[70px] md:text-[40px] md:leading-[50px]
            lg:w-[804px] lg:h-[80px] lg:text-[48px] lg:leading-[55px]
            xl:w-[1166px] xl:h-[80px] xl:text-[64px] xl:leading-[60px]
            2xl:w-[1166px] 2xl:h-[80px] 2xl:text-[72px] 2xl:leading-[70px]
            ">Team Members Involved</h1>
            <div className="md:flex md:flex-row 
            w-[345px] h-[1309px] gap-[35px]
            sm:h-[550px] md:w-[470px]
            ">

              <div className="hidden md:block md:flex-row md:flex md:w-[673px] md:gap-[45px] md:mx-auto lborder lg:w-[804px] lg:h-[484px] xl:w-[1166px] xl:h-[465px] xl:gap-[52px]">

                <div className=" border-gray-600 
                  w-[335px] h-[413px] rounded-[10px] border-[0.89px] py-[15px] px-[25px]
                  sm:w-[377px] sm:h-[487px] sm:gap-[50px]
                  md:w-[314px] md:h-[407px] md:rounded-[12.49px] md:p-[15px]
                  lg:w-[376px] lg:h-[484px] lg:rounded-[15px] lg:border-[1.06px]
                  xl:w-[354px] xl:h-[465px] xl:rounded-[12px] xl:p-[16px] xl:gap-[10px]
                ">
                  <Image
                    src="/Images/person.jpg"
                    alt="Team Member"
                    width={1000}
                    height={1000}
                    className="
                    w-[285px] h-[312px] rounded-[7.1px]
                    sm:w-[337px] sm:h-[370px] sm:rounded-[10px]
                    md:w-[283px] md:h-[311px] md:top-[0.3px] md:left-[-0.15px] md:rounded-[8px]
                    lg:w-[342px] lg:h-[374px] lg:rounded-[10px]
                    xl:w-[322px] xl:h-[352px] xl:rounded-[8px]
                    "
                    priority
                  />
                  <div className="text-center pt-4 ">
                    <h1 className="
                    w-[131.13px] h-[25px] font-[700] text-[18px] leading-[25px] mx-auto
                    sm:w-[216.49px] sm:h-[28px] sm:font-[700] sm:text-[22px] sm:leading-[28px] 
                    md:w-[182px] md:h-[24px] md:text-[20px] md:leading-[24px]
                    lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                    xl:w-[206.95px] xl:h-[28px] xl:text-[24px] xl:leading-[28px]
                    ">Michael R</h1>
                    <p className="
                    w-[131.13px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto
                      md:w-[182px] md:h-[22px] md:text-[16px] md:leading-[22px
                      lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                      xl:w-[206px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                    ">Software Engineer</p>
                  </div>
                </div>

                <div className=" border-gray-600 hidden md:block
                  w-[335px] h-[413px] rounded-[10px] border-[0.89px] py-[15px] px-[25px]
                  sm:w-[377px] sm:h-[487px] sm:gap-[50px]
                  md:w-[314px] md:h-[407px] md:rounded-[12.49px] md:p-[15px]
                  lg:w-[376px] lg:h-[484px] lg:rounded-[15px] lg:border-[1.06px]
                   xl:w-[354px] xl:h-[465px] xl:rounded-[12px] xl:p-[16px] xl:gap-[10px]
                ">
                  <Image
                    src="/Images/person.jpg"
                    alt="Team Member"
                    width={1000}
                    height={1000}
                    className="
                    w-[285px] h-[312px] rounded-[7.1px]
                    sm:w-[337px] sm:h-[370px] sm:rounded-[10px]
                    md:w-[283px] md:h-[311px] md:top-[0.3px] md:left-[-0.15px] md:rounded-[8px]
                    lg:w-[342px] lg:h-[374px] lg:rounded-[10px]
                    xl:w-[322px] xl:h-[352px] xl:rounded-[8px]
                    "
                    priority
                  />
                  <div className="text-center pt-4 ">
                    <h1 className="
                    w-[131.13px] h-[25px] font-[700] text-[18px] leading-[25px] mx-auto
                    sm:w-[216.49px] sm:h-[28px] sm:font-[700] sm:text-[22px] sm:leading-[28px] 
                    md:w-[182px] md:h-[24px] md:text-[20px] md:leading-[24px]
                    lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                     xl:w-[206.95px] xl:h-[28px] xl:text-[24px] xl:leading-[28px]
                    ">Michael R</h1>
                    <p className="
                    w-[131.13px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto
                    lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                    md:w-[182px] md:h-[22px] md:text-[16px] md:leading-[22px]
                    xl:w-[206px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                    ">Software Engineer</p>
                  </div>
                </div>

                 <div className=" border-gray-600 hidden xl:block
                  w-[335px] h-[413px] rounded-[10px] border-[0.89px] py-[15px] px-[25px]
                  sm:w-[377px] sm:h-[487px] sm:gap-[50px]
                  md:w-[314px] md:h-[407px] md:rounded-[12.49px] md:p-[15px]
                  lg:w-[376px] lg:h-[484px] lg:rounded-[15px] lg:border-[1.06px]
                  xl:w-[354px] xl:h-[465px] xl:rounded-[12px] xl:p-[16px] xl:gap-[10px]
                ">
                  <Image
                    src="/Images/person.jpg"
                    alt="Team Member"
                    width={1000}
                    height={1000}
                    className="
                    w-[285px] h-[312px] rounded-[7.1px]
                    sm:w-[337px] sm:h-[370px] sm:rounded-[10px]
                    md:w-[283px] md:h-[311px] md:top-[0.3px] md:left-[-0.15px] md:rounded-[8px]
                    lg:w-[342px] lg:h-[374px] lg:rounded-[10px]
                    xl:w-[322px] xl:h-[352px] xl:rounded-[8px]
                    "
                    priority
                  />
                  <div className="text-center pt-4 ">
                    <h1 className="
                    w-[131.13px] h-[25px] font-[700] text-[18px] leading-[25px] mx-auto
                    sm:w-[216.49px] sm:h-[28px] sm:font-[700] sm:text-[22px] sm:leading-[28px] 
                    md:w-[182px] md:h-[24px] md:text-[20px] md:leading-[24px]
                    lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                    xl:w-[206.95px] xl:h-[28px] xl:text-[24px] xl:leading-[28px]
                    ">Michael R</h1>
                    <p className="
                    w-[131.13px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto
                      md:w-[182px] md:h-[22px] md:text-[16px] md:leading-[22px
                      lg:w-[218.95px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                      xl:w-[206px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                    ">Software Engineer</p>
                  </div>
                </div>
              </div>

              <div className=" border-gray-600 mt-5 sm:hidden
                  w-[335px] h-[413px] rounded-[10px] border-[0.89px] py-[15px] px-[25px]
                ">
                <Image
                  src="/Images/person.jpg"
                  alt="Team Member"
                  width={1000}
                  height={1000}
                  className="
                    w-[285px] h-[312px] rounded-[7.1px]
                    "
                  priority
                />
                <div className="text-center pt-4 mx-auto">
                  <h1 className="
                    w-[131.13px] h-[25px] font-[700] text-[18px] leading-[25px] mx-auto
                    ">Michael R</h1>
                  <p className="
                    w-[131.13px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto
                    ">Software Engineer</p>
                </div>
              </div>

              <div className=" border-gray-600 sm:hidden
                  w-[335px] h-[413px] rounded-[10px] border-[0.89px] py-[15px] px-[25px] mt-5
                ">
                <Image
                  src="/Images/person.jpg"
                  alt="Team Member"
                  width={1000}
                  height={1000}
                  className="
                    w-[285px] h-[312px] rounded-[7.1px]
                    "
                  priority
                />
                <div className="text-center pt-4 mx-auto">
                  <h1 className="
                    w-[131.13px] h-[25px] font-[700] text-[18px] leading-[25px] mx-auto
                    ">Michael R</h1>
                  <p className="
                    w-[131.13px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto
                    ">Software Engineer</p>
                </div>
              </div>

            </div>

            {/* Related Works */}
            <h1 className="
            w-[346px] h-[70px] font-[500] text-[36px] leading-[35px]
            sm:w-[435px] sm:h-[70px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
            md:w-[644px] md:h-[70px] md:text-[40px] md:leading-[50px]
            lg:w-[892px] lg:h-[90px] lg:text-[48x] lg:leading-[55px]
            xl:w-[1200px] xl:h-[90px] xl:text-[64x] xl:leading-[60px]
            2xl:text-[72x] 2xl:leading-[70px]
            ">Related Works</h1>
            <div className="md:flex md:flex-row md:gap-20 h-[850px] sm:h-[600px]
            md:w-[644px] md:h-[493px] 
            lg:w-[892px] lg:h-[590.78px]
            xl:w-[1090px] xl:h-[650.78px] xl:mx-auto
            2xl:w-[1090px] 2xl:h-[650.78px] 
            ">
              <Image
                src="/Images/works.png"
                alt="Work 1"
                width={1000}
                height={1000}
                className="rounded-sm  mb-5 sm:w-[435px] sm:h-[516px] sm:top-[70px] md:w-[292.4] md:h-[346.98px] lg:w-[405px] lg:h-[481px] lg:[95.11px] xl:w-[463px] xl:h-[539px] xl:top-[95px] xl:ledt-[57.5px] 2xl:w-[463px] 2xl:h-[539px] 2xl:top-[105px] 2xl:left-[57.5px]"
                priority
              />
              <Image
                src="/Images/works2.png"
                alt="Work 2"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80 md:mt-20 sm:hidden md:block md:w-[292.4] md:h-[346.98px] lg:w-[405px] lg:h-[481px] lg:[95.11px] xl:w-[463px] xl:h-[539px] xl:top-[95px] xl:ledt-[57.5px]  2xl:w-[463px] 2xl:h-[539px] 2xl:top-[105px] 2xl:left-[57.5px]"
                priority
              />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-950  text-center transition-colors duration-300
            w-[345px] h-[299px] top-[3886.02px] left-[15px] rounded-[20px] py-[35px] px-[10px]
            sm:w-[499px] sm:h-[326px] sm:top-[3406.24px] sm:left-[71px] sm:rounded-[20px] sm:py-[42px] sm:px-[70px]
            md:w-[573px] md:h-[357px] md:top-[3271.44px] md:rounded-[20px] md:py-[42px] md:px-[70px] mx-auto
            lg:w-[779px] lg:h-[357px] lg:top-[3771.44px]  lg:left-[123px] lg:rounded-[20px] lg:py-[42px] lg:px-[70px] 
            xl:w-[913px] xl:h-[387px] xl:top-[4228.44px]  xl:left-[184px] xl:rounded-[20px] xl:py-[42px] xl:px-[70px] 
            2xl:w-[984px] 2xl:h-[411px] 2xl:top-[4461.44px]  2xl:left-[228px] 2xl:rounded-[20px] 2xl:py-[42px] 2xl:px-[70px] 
            ">
              <h1 className="text-center mx-auto
              w-[325px] h-[81px] font-[500] text-[36px] leading-[35px]
              sm:w-[359px] sm:h-[100px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
              md:w-[433px] md:h-[120px] md:text-[40px] md:leading-[50px]
              lg:w-[575px] lg:h-[130px] lg:text-[48px] lg:leading-[55px]
              xl:w-[773px] xl:h-[121px] xl:text-[64px] xl:leading-[60px]
              2xl:w-[844px] 2xl:h-[141px] 2xl:text-[72px] 2xl:leading-[70px]
              ">
                <span className="block">
                  Let&apos;s Turn Your
                </span>

                <span className="block">
                  <span className="[font-family:var(--font-kaushan)] px-2">
                    Dream
                  </span>
                  into
                  <span className="[font-family:var(--font-kaushan)] px-2">
                    Reality
                  </span>
                </span>
              </h1>

              <p className="text-center mx-auto text-gray-700 dark:text-gray-300
              w-[317px] h-[80px] font-[400] text-[14px] leading-[20px]
              sm:w-[359px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[433px] md:h-[86px] md:text-[16px] md:leading-[22px]
              lg:w-[639px] lg:h-[90px] lg:text-[18px] lg:leading-[25px]
              xl:w-[773px] xl:h-[90px] xl:text-[20px] xl:leading-[28px]
              2xl:w-[844px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px]
              ">
                Pushing the boundaries of what&apos;s possible in the digital realm.
                Join us on this journey into the future of technology.
              </p>
              <div className="bg-custom-cyan  flex flex-row  text-black justify-center
              w-[136px] h-[38px] rounded-[4.79px] py-[9px] px-[18px] mx-auto
              sm:w-[156px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px] 
              md:w-[167px] md:h-[51px] md:rounded-[10px]  
              lg:w-[178px] lg:h-[51px] lg:rounded-[10px]  
              xl:w-[188px] xl:h-[54px] xl:rounded-[10px]  
              2xl:w-[199px] 2xl:h-[56px] 2xl:rounded-[10px]  2xl:py-[13px] 2xl:px-[25px]
              ">
                <button type="button" className="block 
                w-[76px] h-[20px] font-[400] text-[14px] leading-[20px]
                sm:w-[81px] sm:h-[20px] am:font-[400] am:text-[15px] sm:leading-[20px]
                md:w-[87px] md:h-[22px] md:text-[16px] md:leading-[22px]
                lg:w-[98px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                xl:w-[108px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                2xl:w-[119px] 2xl:h-[30px] 2xl:text-[22px] 2xl:leading-[30px]
                ">Book a call</button>

                <ArrowUpRight className=" w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
