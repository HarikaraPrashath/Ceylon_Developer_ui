"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Mail, Phone, Building2 } from "lucide-react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // wait until client to know actual theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // avoid hydration mismatch + double flash
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden ">
      {/* HERO SECTION */}
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
          <h1 className="text-center text-white dark:text-gray-100 
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]  mx-auto
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%]
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
          2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%]
          ">Contact Us</h1>
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
          <h1 className="title text-black h1 sm:h1-sm md:h1-md lg:h1-lg xl:h1-xl 2xl:h1-2xl
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] mt-8
           sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
           md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%] mx-auto
           lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%]
           xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%]
          ">Contact Us</h1>
        </div>
      )}

      {/* BODY */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1440px] px-4 ">
          <p className=" text-gray-700 dark:text-gray-300 mt-[25px]
        w-[307px] h-[60px] font-[400] text-[14px] leading-[20px] text-center mx-auto
        sm:w-[435px] sm:h-[40px] sm:text-[15px] sm:leading-[20px]
        md:w-[435px] md:h-[66px] md:text-[16px] md:leading-[22px]
        lg:w-[643px] lg:h-[50px] lg:text-[18px] lg:leading-[25px]
        xl:w-[643px] xl:h-[56px] xl:text-[20px] xl:leading-[28px] xl:mt-10
        2xl:w-[671px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mt-10
         ">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology
          </p>

          {/* main content */}
          <div className="mt-10 xl:mt-20">
            <h1 className="text-center w-[329px] h-[35px] font-[500] text-[30px] leading-[35px] mx-auto
          sm:w-[455px] sm:h-[40px] sm:text-[36px] sm:leading-[40px] 
          md:w-[651px] md:h-[50px] md:text-[40px] md:leading-[50px]
          lg:w-[754px] lg:h-[55px] lg:text-[48px] lg:leading-[55px]
          xl:w-[754px] xl:h-[60px] xl:text-[64px] xl:leading-[60px] 
          2xl:w-[754px] 2xl:h-[70px] 2xl:text-[72px] 2xl:leading-[70px] 
          ">
              We&apos;re Here to{" "}
              <span className="[font-family:var(--font-kaushan)]"> Help</span>
            </h1>
            <p className="mt-5 text-center mx-auto  text-gray-700 dark:text-gray-300 body 
          w-[279px] h-[40px] font-[400] text-[14px] leading-[20px]
          sm:w-[455px] sm:h-[40px] sm:text-[15px] sm:leading-[20px]
          md:w-[524.96px] md:h-[22px] md:text-[16px] md:leading-[22px]
          lg:w-[524.96px] lg:h-[50px] lg:text-[18px] lg:leading-[25px]
          xl:w-[524.96px] xl:h-[56px] xl:text-[20px] xl:leading-[28px]
          2xl:w-[524.96px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 
          ">
              Our team is ready to support you with expert advice & solutions.
            </p>

            {/* Form */}
            <div className=" border-gray-300 dark:border-gray-700 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 mt-10 
          w-[355px] h-[670px] rounded-[22px] border-[1px] mx-auto
          sm:w-[570px] sm:h-[756px] sm:rounded-[22px] sm:border-[1px] sm:py-[35px] sm:px-[50px]
          md:w-[650px] md:h-[802px] md:rounded-[22px] md:border-[1px] md:py-[40px] md:px-[50px]
          lg:w-[872px] lg:h-[639px] lg:rounded-[22px] lg:border-[1px] lg:py-[40px] lg:px-[50px]
          xl:w-[992px] xl:h-[676px] xl:rounded-[22px] xl:border-[1px] xl:py-[45px] xl:px-[110px] 
          2xl:w-[1041px] 2xl:h-[704px] 2xl:rounded-[22px] 2xl:border-[1px] 2xl:py-[50px] 2xl:px-[110px] 
          ">
              <form className=" w-[310px] h-[627px] mx-auto mt-20 
            sm:w-[470px] sm:h-[686px] sm:gap-[40px]
            md:w-[550px] md:h-[722px] md:gap-[54px]
            lg:w-[772px] lg:h-[559px] lg:gap-[54px]
            xl:w-[772px] xl:h-[586px] xl:gap-[54px]
            2xl:w-[821px] 2xl:h-[604px] 2xl:gap-[54px]
            ">
                <div>
                  <div className="lg:flex lg:flex-row lg:justify-between
                lg:w-[772px] lg:h-[76px] lg:gap-[106px]
                xl:h-[782x] xl:gap-[106px]
                2xl:h-[821x] 2xl:gap-[155px]
                ">
                    {/* name */}
                    <div className="flex flex-col mb-4
                  ">
                      <label className=" 
                    w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                    sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                    md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                    lg:w-[333px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                    xl:w-[333px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                    2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px] 
                    ">Name *</label>
                      <input
                        type="text"
                        placeholder="David Johanson"
                        className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none 
                      w-[307px] h-[31px] gap-[10px]
                      sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                      md:w-[550px] md:h-[33px] md:gap-[10px]
                      lg:w-[333px] lg:h-[36px] lg:gap-[10px] 
                      xl:w-[333px] xl:h-[39px] xl:gap-[10px] 
                      2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px] 
                      "
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mb-4 ">
                      <label className="py-1
                     w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                     sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                     md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                     lg:w-[333px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                     xl:w-[333px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                     2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px] 
                    ">Email *</label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none 
                      sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                      md:w-[550px] md:h-[33px] md:gap-[10px]
                      lg:w-[333px] lg:h-[36px] lg:gap-[10px]
                      xl:w-[333px] xl:h-[39px] xl:gap-[10px]  
                      2xl:w-[333px] 2xl:h-[41px] 2xl:gap-[10px]  
                      "
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col mb-4">
                    <label className="py-1
                   w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                   sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                   md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                   lg:w-[772px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                   xl:w-[772px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                   2xl:w-[821px] 2xl:h-[30px] 2xl:text-[22px] 2xl:leading-[30px]
                  ">Company Name *</label>
                    <input
                      type="text"
                      placeholder="Ex: StaticMania"
                      className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none 
                    sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                    md:w-[550px] md:h-[33px] md:gap-[10px]
                    lg:w-[772px] lg:h-[36px] lg:gap-[10px]
                    xl:w-[772px] xl:h-[39px] xl:gap-[10px]
                    2xl:w-[821px] 2xl:h-[41px] 2xl:gap-[10px]
                    "
                    />
                  </div>
                </div>

                <div>
                  <div className="lg:flex lg:flex-row lg:justify-between">
                    {/* Select Service */}
                    <div className="flex flex-col mb-4">
                      <label className="py-1
                     w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                     sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                     md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                     lg:w-[333px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                     xl:w-[333px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                     2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px]
                    ">Select Service *</label>
                      <select
                        defaultValue={""}
                        className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none  dark:text-gray-200
                    sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                    md:w-[550px] md:h-[33px] md:gap-[10px]
                    lg:w-[333px] lg:h-[36px] lg:gap-[10px] 
                    xl:w-[333px] xl:h-[39px] xl:gap-[10px]  
                    2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px] 
                    ">
                        <option
                          value=""
                          disabled
                          selected
                          className="text-gray-200 "
                        >
                          Select a Service
                        </option>
                        <option value="haircut" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Haircut
                        </option>
                        <option value="facial" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Facial
                        </option>
                        <option value="massage" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Massage
                        </option>
                        <option value="manicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Manicure
                        </option>
                        <option value="pedicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Pedicure
                        </option>
                      </select>
                    </div>

                    {/* Project Budget */}
                    <div className="flex flex-col mb-4 ">
                      <label className="py-1
                     w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                     sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                     md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                     lg:w-[333px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                     xl:w-[333px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                     2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px]
                    ">Project Budget *</label>
                      <select
                        defaultValue=""
                        className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm dark:text-gray-200
                    sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                    md:w-[550px] md:h-[33px] md:gap-[10px]
                    lg:w-[333px] lg:h-[36px] lg:gap-[10px] 
                    xl:w-[333px] xl:h-[39px] xl:gap-[10px]  
                    2xl:w-[333px] 2xl:h-[30px] 2xl:gap-[10px] 
                    ">
                        <option
                          value=""
                          disabled
                          selected
                          className="text-gray-400"
                        >
                          Select a Service
                        </option>
                        <option value="haircut" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Haircut
                        </option>
                        <option value="facial" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Facial
                        </option>
                        <option value="massage" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Massage
                        </option>
                        <option value="manicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Manicure
                        </option>
                        <option value="pedicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                          Pedicure
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col mb-4">
                    <label className="py-1
                   w-[307px] h-[20px] font-[400] text-[14px] leading-[20px] mb-2
                   sm:w-[470px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
                   md:w-[550px] md:h-[22px] md:text-[16px] md:leading-[22px]
                   lg:w-[772px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                   xl:w-[772px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                   2xl:w-[821px] 2xl:h-[30px] 2xl:text-[22px] 2xl:leading-[30px]
                  ">Project Details *</label>
                    <input
                      type="text"
                      placeholder="Tell us more about your project"
                      className="pb-1 text-sm bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none
                    sm:w-[470px] sm:h-[31px] sm:gap-[10px]
                    md:w-[550px] md:h-[33px] md:gap-[10px]
                    lg:w-[772px] lg:h-[36px] lg:gap-[10px]
                    xl:w-[772px] xl:h-[39px] xl:gap-[10px]
                    2xl:w-[821px] 2xl:h-[41px] 2xl:gap-[10px]
                    "
                    />
                  </div>
                </div>

                <div className="sm:flex sm:flex-row sm:justify-between mt-10
              sm:w-[470px] sm:h-[46px] sm:gap-[48px]
              md:w-[550px] md:h-[48px] md:gap-[103px]
              lg:w-[772px] lg:h-[51px] lg:gap-[275px]
              xl:w-[772px] xl:h-[54px] xl:gap-[225px]
              2xl:w-[821px] 2xl:h-[56px] 2xl:gap-[225px]
              ">
                  <div className="bg-custom-cyan text-black font-semibold mx-auto
                w-[114px] h-[28px] rounded-[4.79px] py-9px px-[18px]
                sm:w-[100px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]
                md:w-[103px] md:h-[48px] md:rounded-[10px] md:py-[13px] md:px-[25px]
                lg:w-[110px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
                xl:w-[117px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
                2xl:w-[123px] 2xl:h-[56px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px]
                ">
                    <button type="button" className="-mt-5
                  w-[78px] h-[20px] font-[400] text-[15px] leading-[20px]
                  sm:w-[80px] sm:h-[20px] sm:text-[15px] sm:leading-[20px] sm:-ml-4 
                  md:w-[83px] md:h-[22px] md:text-[16px] md:leading-[22px] md:-ml-4 
                  lg:w-[60px] lg:h-[25px] lg:text-[18px] lg:leading-[25px] lg:ml-0.5
                  xl:w-[67px] xl:h-[28px] xl:text-[20px] xl:leading-[28px] xl:mt-0.5
                  2xl:w-[73px] 2xl:h-[30px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mt-0.5
                  ">
                      Submit
                    </button>
                  </div>
                  <p className="mt-5 text-center  text-gray-600 dark:text-gray-400
                w-[301px] h-[20px] font-[400] text-[14px] leading-[20px] 
                sm:w-[322px] sm:h-[20px] sm:text-[15px] sm:leading-[3px]
                md:w-[344px] md:h-[22px] md:text-[16px] md:leading-[22px]
                lg:w-[387px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
                xl:w-[430px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
                2xl:w-[473px] 2xl:h-[28px] 2xl:text-[22px] 2xl:leading-[30px]
                ">
                    We will contact you within 24 business hours.
                  </p>
                </div>
              </form>
            </div>

            {/* contact info */}
            <div className="  flex flex-col
            sm:flex-row
            justify-center
            gap-10
            max-w-[1080px]
            mx-auto">
              {[
                {
                  icon: <Mail size={20} />,
                  title: "Email",
                  lines: ["customer@gmail.com", "client@automx.com"],
                },
                {
                  icon: <Phone size={20} />,
                  title: "Phone",
                  lines: ["+94 71 5672 890", "+94 71 5672 890"],
                },
                {
                  icon: <Building2 size={20} />,
                  title: "Head Office",
                  lines: ["5899 Alexys Highway Suite", "678, NR, Nevada, USA"],
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center mt-10  2xl:w-[1080px]  px-5 s">
                  <div className="h-[63px] w-[63px] top-[1px] left-[1px] rounded-[40px] border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-950 mx-auto  flex items-center justify-center text-gray-700 dark:text-gray-300
                sm:w-[45px] sm:h-[45px] sm:rounded-[32px]
                md:w-[52px] md:h-[52px] md:rounded-[32px]
                lg:w-[63px] lg:h-[63px] lg:rounded-[40px] 
                xl:w-[65px] xl:h-[65px] xl:rounded-[40px] 
                2xl:w-[65px] 2xl:h-[65px] 2xl:rounded-[40px] 
                ">
                    {item.icon}
                  </div>
                  <div className="mt-2">
                    <h1 className=" text-gray-800 dark:text-gray-200
                  w-[200px] h-[25px] font-[500] text-[18px] leading-[25px] mx-auto
                  sm:w-[105px] sm:h-[24px] sm:text-[18px] sm:leading-[24px]
                  md:w-[152px] md:h-[24px] md:text-[20px] md:leading-[24px]
                  lg:w-[130px] lg:h-[26px] lg:text-[22px] lg:leading-[26px]
                  xl:w-[150px] xl:h-[28px] xl:text-[24px] xl:leading-[28px]
                  2xl:w-[150px] 2xl:h-[30px] 2xl:text-[26px] 2xl:leading-[30px]
                  ">
                      {item.title}
                    </h1>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400
                    w-[200px] h-[20px] font-[400] text-[14px] leading-[20px] mx-auto 
                    sm:w-[153px] sm:text-[15px] sm:leading-[20px] sm:mx-5
                    md:w-[164px] md:text-[16px] md:leading-[22px] md:mx-5
                    lg:w-[234px] lg:text-[18px] lg:leading-[25px] lg:mx-5 
                    xl:w-[250px] xl:text-[20px] xl:leading-[28px] xl:mx-5 
                    ">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* bottom banner */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-950 mt-15 transition-colors duration-300
          w-[337px] h-[299px] top-[1882px] left-[19px] rounded-[20px] py-[35px] px-[35px] mx-auto gap-[10px]
          sm:w-[499px] sm:h-[325.75px] sm:top-[0.25px] sm:rounded-[20px]
          md:w-[573px] md:h-[356.75px] md:top-[0.25px] md:rounded-[20px]
          lg:w-[779px] lg:h-[355.75px] lg:top-[0.25px] lg:rounded-[20px]
          xl:w-[913px] xl:h-[385px]  xxl:mt-30
          2xl:w-[984px] 2xl:h-[389px] 2xl:top-[1904px] 2xl:left-[240px] 2xl:rounded-[20px] 2xl:px-[70px] 2xl:py-[42px]
                    ">
              <h1 className="text-center w-[317px]  h-[71px] font-[500] text-[36px] leading-[35px] mx-auto
            sm:w-[359px] sm:h-[81px] sm:text-[30px] sm:leading-[40px] 
            md:w-[433px] md:h-[101px] md:text-[40px] md:leading-[50px] 
            lg:w-[639px] lg:h-[111px] lg:text-[48px] lg:leading-[55px] 
            xl:w-[777px] xl:h-[121px] xl:text-[64px] xl:leading-[60px] 
            2xl:w-[844px] 2xl:h-[121px] 2xl:text-[64px] 2xl:leading-[60px]
            ">
                Let&apos;s Turn Your{" "}
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Dream
                </span>
                into
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Reality
                </span>
              </h1>
              <p className="text-center text-gray-700 dark:text-gray-300
            w-[317px] h-[60px] font-[600px] text-[14px] leading-[20px] mt-5 
            sm:w-[359px] sm:h-[60px] sm:text-[15px] sm:leading-[20px] sm:ml-8
            md:w-[433px] md:h-[66px] md:text-[16px] md:leading-[22px] md:ml-8
            lg:w-[639px] lg:h-[50px] lg:text-[18px] lg:leading-[25px] lg:ml-8
            xl:w-[773px] xl:h-[56px] xl:text-[20px] xl:leading-[28px] xl:ml-8
            2xl:w-[814px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:ml-8 2xl:mx-auto 2xl:mt-6
            
            ">
                Pushing the boundaries of what&apos;s possible in the digital
                real. Join us this journey into the future of technology
              </p>
              <div className="bg-custom-cyan text-black text-center
            w-[136px] h-[38px] rounded-[4.79px] py-[9px] px-[18px] mx-auto mt-5
            sm:w-[156px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]
            md:w-[167px] md:h-[51px] md:rounded-[10px] md:py-[13px] md:px-[25px]
            lg:w-[178px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
            xl:w-[188px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
            2xl:w-[188px] 2xl:h-[54px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px] 2xl:mx-auto
            ">
                <button type="button" className="
              w-[76px] h-[20px] font-[400] text-[14px] leading-[20px] 
              sm:w[[81px] sm:h-[20px] sm:text-[15px] sm:leading-[20px]
              md:w-[87px] md:h-[22px] md:text-[16px] md:leading-[22px]
              lg:w-[98px] lg:h-[25px] lg:text-[18px] lg:leading-[25px]
              xl:w-[108px] xl:h-[28px] xl:text-[20px] xl:leading-[28px]
              2xl:w-[108px] 2xl:h-[28px] 2xl:text-[20px] 2xl:leading-[28px] 2xl:mx-auto
              ">
                  Booking us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
