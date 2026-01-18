"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Podcast, MapPin, Clock12, ChartSpline, ChartArea, BriefcaseBusiness } from "lucide-react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="head-banner-layout"
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
          <h1 className=" text-white 
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] text-center mx-auto mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%]
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
          ">Career</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className="w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] text-center mx-auto mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%]
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%]
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
           text-black ">Career</h1>
        </div>
      )}

      <div className="mt-5">
        <p className=" text-center text-gray-700 dark:text-gray-300 
        w-[307px] h-[60px] font-[400] text-[14px] leading-[20px] mx-auto
        sm:w-[435px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px] sm:mx-auto
        md:w-[435px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mx-auto
        lg:w-[643px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mx-auto
        xl:w-[643px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px] xl:mx-auto xl:mt-10
        2xl:w-[647px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mx-auto 2xl:mt-10
        ">
          Pushing the boundaries of what&apos;s possible in the digital realm. Join us on this journey into the future of technology.
        </p>

        {/* main content */}
        <div className="mt-10 ">
          <div className="lg:flex lg:flex-row lg:w-[857px] lg:-h-[357px] lg:top-[386px] lg:left-[84px]  lg:mx-auto lg:mt-15">
            <div className="text-center  ">
              <h1 className="w-[314px] h-[211px] text-[36px] leading-[35px] font-[500x] mx-auto 
              sm:w-[495px] sm:h-[160px] sm:font-[500] sm:text-[36px] sm:leading-[40px] sm:text-start
              md:w-[624px] md:h-[150px] md:font-[500] md:text-[40px] md:leading-[50px]
              lg:w-[388px] lg:h-[331px] lg:font-[500] lg:text-[48px] lg:leading-[55px]
              xl:w-[625px] xl:h-[300px] xl:font-[500] xl:text-[64px] xl:leading-[64px]
              2xl:w-[710px] 2xl:h-[350px] 2xl:font-[500] 2xl:text-[72px] 2xl:leading-[70px]
              ">
                Discover Why{" "}
                <span className="[font-family:var(--font-kaushan)] ">Ceylon Developers</span> is the Premier Destination for Advancing Your{" "}
                <span className="[font-family:var(--font-kaushan)] ">Career</span>
              </h1>
            </div>

            <div className="w-[330px] h-[313px] gap-[10px] mx-auto
            sm:w-[495px] sm:h-[316px] sm:gap-[10px] 
            md:w-[419px] md:h-[334px] md:gap-[10px] 
            lg:w-[419px] lg:h-[357px] lg:gap-[10px] 
            xl:w-[436px] xl:h-[408px] xl:gap-[10px] 
            2xl:w-[436px] 2xl:h-[437px] 2xl:gap-[10px] 
            ">
              <ul className="mt-6">
                <li className="w-[327px] h-[25px] font-[500] text-[20px] leading-[25px]
                sm:w-[419px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
                md:w-[419px] md:h-[30px] md:text-[24px] md:leading-[30px]
                lg:w-[419px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
                xl:w-[436px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
                2xl:w-[436px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
                ">We are growing fast</li>
                <li className="w-[327px] h-[25px] font-[500] text-[20px] leading-[25px]
                 sm:w-[419px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
                  md:w-[419px] md:h-[30px] md:text-[24px] md:leading-[30px]
                   lg:w-[419px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
                   xl:w-[436px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
                   2xl:w-[436px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
                ">Flexible hours</li>
                <li className="w-[327px] h-[25px] font-[500] text-[20px] leading-[25px]
                 sm:w-[419px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
                  md:w-[419px] md:h-[30px] md:text-[24px] md:leading-[30px]
                   lg:w-[419px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
                   xl:w-[436px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
                   2xl:w-[436px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
                ">Work from anywhere</li>
                <li className="w-[327px] h-[25px] font-[500] text-[20px] leading-[25px]
                 sm:w-[419px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
                  md:w-[419px] md:h-[30px] md:text-[24px] md:leading-[30px]
                   lg:w-[419px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
                   xl:w-[436px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
                   2xl:w-[436px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
                ">Paid vacations</li>
              </ul>

              <p className="w-[327px] h-[120px] font-[400] text-[14px] leading-[20px]
              sm:w-[419px] sm:h-[80px] sm:leading-[20px] sm:text-[15px] sm:mt-5
              md:w-[419px] md:h-[88px] md:leading-[22px] md:text-[16px] md:mt-5
              lg:w-[419px] lg:h-[100px] lg:leading-[25px] lg:text-[18px] lg:mt-5
              xl:w-[436px] xl:h-[140px] xl:leading-[28px] xl:text-[20px] xl:mt-5
              2xl:w-[436px] 2xl:h-[150px] 2xl:leading-[30px] 2xl:text-[22px] 2xl:mt-5
              ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed.
              </p>

              <div className="bg-custom-cyan hover:bg-cyan-400 cursor-pointer
              w-[143px] h-[38px] rounded-[4.79] py-[9px] px-[18px] lg:mt-10
              sm:w-[165px] sm:h-[46px]  sm:rounded-[10px] sm:py-[13px] sm:px-[25px]
              md:w-[171px] md:h-[48px]  md:rounded-[10px] md:py-[13px] md:px-[25px]
              lg:w-[187px] lg:h-[51px]  lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
              xl:w-[203px] xl:h-[54px]  xl:rounded-[10px] xl:py-[13px] xl:px-[25px]
              2xl:w-[218px] 2xl:h-[56px]  2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px]
              ">
                <button
                  type="button"
                  className=" text-black rounded-lg  transition
                  w-[107px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[115px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
                  md:w-[122px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                  lg:w-[137px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  xl:w-[153px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
                  2xl:w-[168px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
                  "
                >
                  About Company
                </button>
              </div>
            </div>
          </div>

          {/* Hiring Process Title */}
          <div className="text-center">
            <h1 className="w-[307px] h-[70px] font-[500] text-[36px] leading-[35px] mx-auto
            sm:w-[477px] sm:h-[80px] sm:text-[36px] sm:leading-[40px] 
            md:w-[566px] md:h-[50px] md:text-[40px] md:leading-[50px] 
            lg:w-[679px] lg:h-[55px] lg:text-[48px] lg:leading-[55px] lg:mt-10
            xl:w-[1163px] xl:h-[60px] xl:text-[64px] xl:leading-[60px] xl:mt-15
            2xl:w-[1163px] 2xl:h-[70px] 2xl:text-[72px] 2xl:leading-[70px] 2xl:mt-15
            ">
              Our <span className="[font-family:var(--font-kaushan)] ">Streamlined</span> Hiring Process
            </h1>
          </div>

          {/* hiring steps (mobile/tablet view) */}
          <div className="flex sm:mx-auto sm:justify-center md:hidden w-[307px] h-[1120px] gap-[7px] mx-auto mt-10 ">
            <div className="flex flex-col justify-start mt-25 mr-4 gap-8">
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="rounded-full w-3 h-3 bg-cyan-300 " />
                  {i < 4 && <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto" />}
                </React.Fragment>
              ))}
            </div>

            {/* steps content */}
            <div>
              {[
                { icon: Podcast, title: "Apply with Your CV" },
                { icon: ChartSpline, title: "Initial Screen" },
                { icon: ChartArea, title: "Skills Assessment" },
                { icon: Podcast, title: "Interview Process" },
                { icon: BriefcaseBusiness, title: "Final Decision" },
              ].map(({ icon: Icon, title }, i) => (
                <div key={i} className="mb-10">
                  <div className="rounded-xl  w-70 sm:w-[25rem]  p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900">
                    <div className="rounded-[calc(1rem-5px)] p-1   bg-white dark:bg-gray-900 text-center sm:px-3 transition">
                      <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                        <Icon className="text-custom-cyan w-[33.54px] h-[33.54px] top-[0.23px] left-[0.23px]
                        sm:w-[40px] sm:h-[40px]
                        " />
                      </div>
                      <h1 className=" my-3
                      w-[222px] h-[25px] font-[400] text-[20px] leading-[25px] mx-auto
                      sm:w-[323px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
                      ">{title}</h1>
                      <p className="w-[222px] h-[60px] font-[400] text-[14px] leading-[20px] mx-auto mb-2 text-gray-600 dark:text-gray-300
                      sm:w-[323px] sm:h-[60px] sm:text-[15px] sm:leading-[20px]
                      ">
                        We begin by understanding your business. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* hiring steps (desktop view) */}
          <div className="hidden md:flex md:mx-auto md:justify-center lg:gap-10 xl:gap-20 2xl:gap-32 xl:mt-20">
            <div>
              <div className="mt-55 mr-7">
                <Step icon={ChartSpline} title="Initial Screen" />
              </div>
              <div className="mt-66">
                <Step icon={Podcast} title="Interview Process" />
              </div>
            </div>

            {/* connector line */}
            <div className="flex flex-col justify-start mt-25 mr-4 gap-8 sm:mt-20">
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="rounded-full w-3 h-3 bg-cyan-300" />
                  {i < 4 && <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto xl:h-58" />}
                </React.Fragment>
              ))}
            </div>

            <div>
              <div className="mt-3 mb-10">
                <Step icon={Podcast} title="Apply with Your CV" />
              </div>
              <div className="mt-60">
                <Step icon={ChartArea} title="Skills Assessment" />
              </div>
              <div className="mt-66 mb-10">
                <Step icon={BriefcaseBusiness} title="Final Decision" />
              </div>
            </div>
          </div>

          {/* Job Role Cards */}
          <div className="text-center mt-8 mb-6">
            <h1 className="w-[348.82px] h-[70px] font-[500px] text-[35px] leading-[35px]  mx-auto mt-5
            sm:w-[553px] sm:h-[40px] sm:text-[36px] sm:leading-[40px] sm:mt-30
            md:w-[676px] md:h-[50px] md:text-[40px] md:leading-[55px]
            lg:w-[906px] lg:h-[55px] lg:text-[48px] lg:leading-[55px]
            xl:w-[1166px] xl:h-[60px] xl:text-[60px] xl:leading-[64px] xl:mt-20
            2xl:w-[1341px] 2xl:h-[70px] 2xl:text-[72px] 2xl:leading-[70px] 2xl:mt-20
            ">
              Find the <span className="[font-family:var(--font-kaushan)] ">Best Role</span> for you
            </h1>
          </div>

          {/* Vacancy job cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[26px] max-w-[1440px] mx-3 lg:mt-5 xl:mt-15 xl:w-[1166px]  xl:mx-auto 2xl:w-[1341px] ">
            {[...Array(6)].map((_, i) => (
              <JobCard key={i} />
            ))}
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500
          w-[345px] h-[298px] top-[3516px] left-[15px] rounded-[20px] py-[35px] px-[10px] gap-[29px] mx-auto mt-10
          sm:w-[499px] sm:h-[325px] sm:top-[3713px] sm:left-[71px] sm:rounded-[20px] sm:py-[42px] sm:px-[70px] sm:gap-[30px] sm:mx-auto sm:mt-10
          md:w-[573px] md:h-[325.75px] md:top-[0.25px] md:rounded-[20px] md:py-[42px] md:mx-auto md:mt-10
          lg:w-[779px] lg:h-[355px] 
          xl:w-[913px] xl:h-[384px] 
          
          ">
            <h1 className="text-center  text-gray-900 dark:text-white mx-auto
            w-[325px] h-[70px] font-[500] text-[36px] leading-[35px] 
            sm:w-[359px] sm:h-[80px] sm:font-[500] sm:text-[36px] sm:leading-[40px] 
            md:w-[433px] md:h-[100px] md:font-[500] md:text-[40px] md:leading-[50px] 
            lg:w-[639px] lg:h-[110px] lg:font-[500] lg:text-[48px] lg:leading-[55px] 
            xl:w-[773px] xl:h-[120px] xl:text-[64px] xl:leading-[60px] 
            ">
              Take the{" "}
              <span className="[font-family:var(--font-kaushan)] ">
                Next Step
              </span>{" "}
              in Your Career
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300
            w-[317px] h-[60px] font-[400] text-[14px] leading-[20px] mt-8
            sm:w-[493px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px] sm:mt-8
            md:w-[433px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-8
            lg:w-[693px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-8
            xl:w-[773px] xl:h-[56px]  xl:text-[20px] xl:leading-[28px] xl:mt-8
            ">
              Pushing the boundaries of what&apos;s possible in the digital realm. Join us
              on this journey into the future of technology.
            </p>
            <div className="bg-custom-cyan  flex flex-row  text-black justify-center  cursor-pointer hover:bg-cyan-400 dark:hover:bg-cyan-300 transition
            w-[111px] h-[38px] rounded-[4.79px] py-[9px] px-[18px] mx-auto mt-5
            sm:w-[130px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px] sm:mx-auto sm:mt-5
            md:w-[135px] md:h-[48px] md:rounded-[10px] md:py-[13px] md:px-[25px] md:mx-auto md:mt-5
            lg:w-[146px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
            xl:w-[156px] xl:h-[54px]
           ">
              <button type="button" className="w-[75px] h-[20px] font-[400] text-[14px] leading-[20px]
              sm:w-[80px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
              md:w-[85px] md:h-[23px] md:font-[400] md:text-[16px] md:leading-[22px]
              lg:w-[96px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
              xl:w-[107px] xl:h-[28px] xl:text-[20px] xl:leading-[28px] 
              ">Contact Us</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// reusable components
const Step = ({ icon: Icon, title }) => (
  <div className="   bg-gradient-to-t from-cyan-600 to-cyan-900 border-green-700
  md:w-[292px] md:h-[321px] md:rounded-[12px] md:border-[1px] md:pt-[35px] md:pb-35px 
  lg:w-[405px] lg:h-[295px] lg:rounded-[12px] lg:border-[1px] lg:pt-[35px] lg:pb-35px 
  xl:w-[475px] xl:h-[307px] xl:rounded-[12px] xl:border-[1px] xl:pt-[35px] xl:pb-35px 
  2xl:w-[506px] 2xl:h-[333px] 2xl:rounded-[12px] 2xl:border-[1px] 2xl:pt-[35px] 2xl:pb-35px 
  ">
    <div className=" bg-white dark:bg-gray-900 text-center transition
    md:w-[290px] md:h-[318px] md:rounded-[12px]  md:pt-[35px] md:pb-35px  md:-mt-8.5
      lg:w-[402px] lg:h-[292px] lg:rounded-[12px]  lg:pt-[35px] lg:pb-35px 
      xl:w-[472px] xl:h-[304px] xl:rounded-[12px]  xl:pt-[35px] xl:pb-35px 
       2xl:w-[502px] 2xl:h-[330px] 2xl:rounded-[12px] 2xl:border-[1px] 2xl:pt-[35px] 2xl:pb-35px 

    ">
      <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
        <Icon className="text-custom-cyan w-6 h-6 md:w-[69.05px] md:h-[69.05px] lg:w-[70px] lg:h-[70px]" />
      </div>
      <h1 className="text-xl my-3
      sm:w-[323px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
      md:w-[200px] md:h-[60px] md:text-[24px] md:leading-[30px] md:mx-auto
      lg:w-[330px] lg:h-[32px] lg:text-[26px] lg:leading-[32px] lg:mx-auto
      xl:w-[400px] xl:h-[34px] xl:text-[28px] xl:leading-[34px] xl:mx-auto
      2xl:w-[430px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mx-auto
      ">{title}</h1>
      <p className="text-sm my-3 text-gray-600 dark:text-gray-300
      sm:w-[323px] sm:h-[60px] sm:text[15px] sm:leading-[20px]
      md:w-[218px] md:h-[88px] md:text[16px] md:leading-[22px] md:mx-auto md:-mt-2
      lg:w-[330px] lg:h-[75px] lg:text[18px] lg:leading-[25px] lg:mx-auto lg:mt-5
      xl:w-[250px] xl:h-[84px] xl:text[20px] xl:leading-[28px] xl:mx-auto xl:mt-5
      2xl:w-[270px] 2xl:h-[90px] 2xl:text[22px] 2xl:leading-[30px] 2xl:mx-auto 2xl:mt-5
      ">
        We begin by understanding your busineLorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  </div>
);

const JobCard = () => (
  <div className=" mx-auto ">
    <div className="rounded-xl   p-[1px] bg-gradient-to-t sm:w-[553px] from-gray-600 to-gray-200 dark:from-gray-700 dark:to-gray-900 transition
    md:w-[676px] md:h-[298px]
    lg:w-[440px] lg:h-[386px]
    xl:w-[570px] xl:h-[391px]
    2xl:w-[658px] 2xl:h-[407px]
    ">
      <div className="rounded-[calc(1rem-5px)]  p-1 bg-white dark:bg-gray-900  sm:w-[553px] text-start px-5 transition
      md:w-[676px] md:h-[298px]
      lg:w-[440px] lg:h-[386px]
      xl:w-[570px] xl:h-[391px]
      2xl:w-[658px] 2xl:h-[407px]
      ">
        <h1 className="w-[310px] h-[25px] font-[500] text-[20px] leading-[25px] my-3
        sm:w-[493px] sm:h-[30px] sm:text-[24px] sm:leading-[30px]
        md:w-[616px] md:h-[30px] md:text-[24px] md:leading-[30px]
        lg:w-[380px] lg:h-[32px] lg:text-[26px] lg:leading-[32px]
        xl:w-[508px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
        2xl:w-[598px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[36px]
        ">Software Developer</h1>
        <p className=" my-3 text-gray-700 dark:text-gray-300
        w-[310px] h-[120px] font-[400] text-[14px] leading-[20px]
        sm:w-[493px] sm:h-[80px] sm:text-[15px] sm:leading-[20px]
        md:w-[616px] md:h-[66px] md:text-[16px] md:leading-[22px] md:mt-5
        lg:w-[380px] lg:h-[150px] lg:text-[18px] lg:leading-[25px] lg:mt-5
        xl:w-[508px] xl:h-[140px] xl:text-[20px] xl:leading-[28px] xl:mt-5
        2xl:w-[598px] 2xl:h-[150px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mt-5
        ">
          We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.
        </p>
        <div className="flex flex-row mb-3 justify-between  md:mt-15">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <MapPin className="text-custom-cyan w-[15.61px] h-[15.61px]
              sm:w-[22px] sm:h-[22px] 
              md:w-[24px] md:h-[24px] 
              lg:w-[24px] lg:h-[24px] 
              
              " /> <p className="w-[65.07px] h-[20px] font-[400] text-[14px] leading-[20px] -mt-1
              sm:w-[126px] sm:h-[20px] sm:text-[15px] sm:leading-[20px] sm:mt-0.5
              md:w-[126px] md:h-[22px] md:text-[16px] md:leading-[22px] md:mt-0.5
              lg:w-[126px] lg:h-[22px] lg:text-[18px] lg:leading-[25px] lg:mt-0.5
              ">Remote</p>
            </div>
            <div className="flex gap-1">
              <Clock12 className="text-custom-cyan  w-[15.61px] h-[15.61px]
               sm:w-[22px] sm:h-[22px] 
               md:w-[24px] md:h-[24px] 
                  lg:w-[24px] lg:h-[24px] 
              " /> <p className="w-[65.07px] h-[20px] font-[400] text-[14px] leading-[20px] -mt-1
               sm:w-[126px] sm:h-[20px] sm:text-[15px] sm:leading-[20px] sm:mt-0.5
               md:w-[126px] md:h-[22px] md:text-[16px] md:leading-[22px] md:mt-0.5
                lg:w-[126px] lg:h-[22px] lg:text-[18px] lg:leading-[25px] lg:mt-0.5
              ">Full-Time</p>
            </div>
          </div>
          <div
            className="w-[93px] h-[40px] rounded-[51.64px] p-[10px] hover:bg-cyan-400 transition bg-custom-cyan
         sm:w-[118px] sm:h-[50px] sm:rounded-[100px] sm:py-[15px] sm:px-[20px]
         md:w-[123px] md:h-[52px] md:rounded-[100px] md:py-[15px] md:px-[20px]
         lg:w-[134px] lg:h-[55px] lg:rounded-[100px] lg:py-[15px] lg:px-[20px]
         xl:w-[144px] xl:h-[58px] xl:rounded-[100px] xl:py-[15px] xl:px-[20px]
         2xl:w-[154px] 2xl:h-[60px] 2xl:rounded-[100px] 2xl:py-[15px] 2xl:px-[20px]
         "
          >
            <button
              type="button"
              className=" text-black cursor-pointer 
            w-[73px] h-[20px] font-[500] text-[14px] leading-[20px] 
            sm:w-[73px] sm:h-[20px] sm:font-[500] sm:text-[14px] sm:leading-[20px] 
            md:w-[83px] md:h-[22px] md:font-[500] md:text-[16px] md:leading-[22px] 
            lg:w-[94px] lg:h-[25px] lg:font-[500] lg:text-[18px] lg:leading-[25px] 
            xl:w-[104px] xl:h-[28px] xl:font-[500] xl:text-[20px] xl:leading-[28px] 
            2xl:w-[114px] 2xl:h-[30px] 2xl:font-[500] 2xl:text-[22px] 2xl:leading-[30px] 
            "
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
