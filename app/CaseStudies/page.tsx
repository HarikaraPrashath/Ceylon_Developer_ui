"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
             w-[375px] h-[45px] font-[600] text-[40px] leading-[45px]  text-center mt-8
             sm:w-[435px] sm:h-[40px] sm:font-[600] sm:text-[40x] sm:leading-[100%] sm:text-center sm:mx-auto
             md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
             lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] lg:font-[600]
             xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] xl:font-[600]
             2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 2xl:font-[600]
          ">Case Studies</h1>
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
          <h1 className=" text-black
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] 
           sm:w-[435px] sm:h-[40px] sm:font-[600] sm:text-[40x] sm:leading-[100%] sm:text-center
           md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
           lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] le:font-[600]
           xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] xl:font-[600]
           2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 2xl:font-[600]
          ">Case Studies</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="sub-title-div">
        <p className="text-center mx-auto text-gray-700 dark:text-gray-300 w-[307px] h-[60px] font-[400] text-[14px] leading-[20px] mt-[25px]
        sm:w-[435px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
        md:h-[66px] md:text-[16px] md:leading-[22px]
        lg:w-[643px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
        xl:w-[643px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px] xl:-mt-10
        2xl:w-[647px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 2xl:-mt-10
        ">
          Pushing the boundaries of hat&apos;s possible in the digital realm.
          Join us on this journey into the future of technology
        </p>

        {/* mainFrame mobile */}
        <div className="mx-auto sm:hidden">
          {/* MOBILE CARDS */}
          <CaseCard />
          <CaseCard />
          <CaseCard />

          {/* final section */}
          <div className=" sm:hidden bg-gradient-to-b from-gray-800 to-gray-950 w-[345px] h-[369px] top-[2172px] left-[15px]  mt-10 rounded-[20px] py-[35px] px-[10px] ">
            <h1 className="text-center w-[325px] h-[141px] font-[400] text-[36px] leading-[35px] ">
              We&apos;re eager to
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Discuss
              </span>{" "}
              how we can elevate
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Your Business
              </span>{" "}
            </h1>

            <p className="text-center mt-6 w-[317px] h-[60px] font-[400] text-[14px] leading-[20px]">
              Pushing the boundaries of what&apos;s possible in the digital
              real. Join us this journey into the future of technology
            </p>

            <div className="bg-custom-cyan text-black mt-10 w-[111px] h-[38px] rounded-[4.79px] py-[9px] px-[18px]  mx-auto">
              <button type="button" className="w-[75px] h-[20px] fount-[400] text-[14px] leading-[20px]">Contact us</button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="mx-3 md:mx-10 lg:mx-10 xl:mx-50 hidden sm:block xl:mt-[40px]">
        <CaseCardDesktop />
        <CaseCardDesktop />
        <CaseCardDesktop />
      </div>
      {/* final section */}
      <div className=" hidden sm:block bg-gradient-to-b from-gray-800 to-gray-950 sm:w-[499px] sm:h-[366px] sm:top-[2575px] sm:left-[71px] sm:rounded-[20px] sm:py-[42px] sm:px-[70px] sm:mt-10 sm:mx-auto\
      md:w-[573px] md:h-[406px] md:top-[2794px] md:left-[98px] md:rounded-[20px] md:py-[42px] md:px-[70px] md:mx-auto
      lg:w-[779px] lg:h-[410px] lg:top-[2169px] lg:left-[123px] lg:py-[42px] lg:px-[70px]
      xl:w-[913px] xl:h-[444px] xl:top-[2195px] xl:left-[184px] xl:py-[42px] xl:px-[70px] xl:gap-[30px]
      2xl:w-[984px] 2xl:h-[480px] 2xl:top-[2399px] 2xl:left-[228px] 2xl:py-[42px] 2xl:px-[70px] 2xl:gap-[30px]
      ">
        <h1 className="text-center sm:w-[349px] sm:h-[121px] sm:font-[400] sm:text-[36px] sm:leading-[40px] 
        md:w-[433px] md:h-[150px] md:font-[400] md:text-[40px] md:leading-[50px]
        lg:w-[505px] lg:h-[150px] lg:font-[400] lg:text-[48px] lg:leading-[55px] lg:mx-auto
        xl:w-[703px] xl:h-[180px] xl:font-[400] xl:text-[64px] xl:leading-[60px] xl:mx-auto
        2xl:w-[844px] 2xl:h-[210px] 2xl:font-[400] 2xl:text-[72px] 2xl:leading-[70px] 2xl:mx-auto
        ">
          We&apos;re eager to
          <span className="[font-family:var(--font-kaushan)] pr-2">
            Discuss
          </span>{" "}
          how we can elevate
          <span className="[font-family:var(--font-kaushan)] pr-2">
            Your Business
          </span>{" "}
        </h1>

        <p className="text-center mt-6 sm:w-[359px] sm:h-[60px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
        md:w-[433px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px]
        lg:w-[639px] lg:h-[50px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-10
        xl:w-[773px] xl:h-[56px] xl:font-[400] xl:text-[20px] xl:leading-[28px] xl:mt-10
        2xl:w-[844px] 2xl:h-[60px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mt-10
        ">
          Pushing the boundaries of what&apos;s possible in the digital
          real. Join us this journey into the future of technology
        </p>

        <div className="bg-custom-cyan text-black mt-10 sm:w-[156px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]  mx-auto
        md:w-[167px] md:h-[51px] md:rounded-[10px] md:py-[13px] md:px-[12px] 
        lg:w-[178px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px] 
        xl:w-[188px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px] 
        2xl:w-[199px] 2xl:h-[56px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px] 
        ">
          <button type="button" className="sm:w-[81px] sm:h-[20px] sm:fount-[400] sm:text-[15px] sm:leading-[20px] sm:ml-5
          md:text-[16px] md:leading-[22px] md:font-[400] md:w-[87px] md:h-[22px] md:ml-7
          lg:text-[18px] lg:leading-[25px] lg:font-[400] lg:w-[88px] lg:h-[25px] lg:ml-4
          xl:text-[20px] xl:leading-[28px] xl:font-[400] xl:w-[108px] xl:h-[28px] xl:lg:ml-4
          2xl:text-[22px] 2xl:leading-[30px] 2xl:font-[400] 2xl:w-[119px] 2xl:h-[30px] 2xl:lg:ml-4
          ">Contact us</button>
        </div>
      </div>

    </div>
  );
};

/* MOBILE CARD COMPONENT */
const CaseCard = () => (
  <div className=" mt-[25px] w-[349px] h-[591px] rounded-[15px] border-[1px] p-[15px] gap-[35px] text-gray-800 dark:text-gray-200">
    <Image
      src="/Images/case.png"
      alt="Case Studies image"
      width={1000}
      height={600}
      className="w-[304px] h-[249px] rounded-[5px]"
      priority
    />
    <div className="w-[319px] h-[34px] gap-[10px] flex flex-row">
      <Tag>Framer Development</Tag>
      <Tag>Framer Development</Tag>
    </div>
    <div>
      <h1 className="text-[30px] leading-[35px] font-[700] w-[202px] h-[35px] mt-10 ">SaaS Website</h1>
      <p className="w-[319px] h-[120px] font-[400] text-[14px] leading-[20px] mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        possimus temporibus sapiente non, numquam modi aut quo consectetur saepe
        qui voluptatem reprehenderit sed, obcaecati blanditiis, pariatur eveniet
        rem
      </p>

      <div className="bg-custom-cyan w-[142px] h-[38px] rounded-[4.79px] py-[9px] px-[18px] text-black flex ">
        <Link href="/projectDetails">
          <button type="submit" className="w-[82px] h-[20px] font-[400] text-[14px] leading-[20px]">
            View Details
          </button>
        </Link>
        <ArrowUpRight className="w-[15px] h-[15px] mt-1 ml-2" />
      </div>
    </div>
  </div>
);

/* DESKTOP CARD COMPONENT */
const CaseCardDesktop = () => (
  <div className="border max-w-[1440px] mt-7 lg:flex  mx-auto text-gray-800 dark:text-gray-200
  sm:w-[552px] sm:h-[712px] sm:rounded-[24px] sm:border-[1px] sm:p-[35px] sm:gap-[10px]
  md:w-[672px] md:h-[767px] md:rounded-[24px] md:border-[1px] md:p-[35px] md:gap-[10px]
  lg:w-[938px] lg:h-[526px] lg:rounded-[24px] lg:border-[1px] lg:p-[35px] lg:gap-[10px]
  xl:w-[1147px] xl:h-[510px] xl:rounded-[24px] xl:border-[1px] xl:py-[50px] xl:px-[45px] xl:gap-[10px]
  2xl:w-[1207px] 2xl:h-[551px] 2xl:rounded-[24px] 2xl:border-[1px] 2xl:py-[60px] 2xl:px-[50px] 2xl:gap-[10px]
  ">
    <div className="">
      <div className="flex flex-row justify-start gap-7  sm:mt-5 lg:flex-col xl:flex-row
      md:w-[398px] md:h-[42px] md:gap-[15px]
      lg:w-[238px] lg:h-[105px] lg:gap-[1px] lg:-mt-6
      xl:w-[478px] xl:h-[48px] xl:gap-[31px]
      2xl:w-[510px] 2xl:h-[50px] 2xl:gap-[31px]
      ">
        <Tag >Framer Development</Tag>
        <Tag>Figma Design</Tag>
      </div>
      <div>
        <h1 className="text-[30px] leading-[35px] font-[700] w-[202px] h-[35px]
        sm:w-[482px] sm:h-[40px] sm:font-[700] sm:mt-5 sm:text-[30px] sm:leading-[40px]
        md:w-[602px] md:h-[45px] md:font-[700] md:text-[35px] md:leading-[45px]
        lg:w-[348px] lg:h-[50px] lg:font-[700] lg:text-[40px] lg:leading-[50px] lg:mt-7
        xl:w-[482px] xl:h-[55px] xl:font-[700] xl:text-[45px] xl:leading-[55px] xl:mt-7
        2xl:w-[482px] 2xl:h-[60px] 2xl:font-[700] 2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-7
        ">
          SaaS Website
        </h1>
        <p className="w-[319px] h-[120px] font-[400] text-[14px] leading
        sm:w-[482px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
        md:w-[602px] md:h-[88px] md:font-[400px] md:text-[16px] md:leading-[22px]
        lg:w-[349px] lg:h-[175px] lg:font-[400px] lg:text-[18px] lg:leading-[25px] lg:mt-5
        xl:w-[482px] xl:h-[168px] xl:font-[400px] xl:text-[20px] xl:leading-[28px] xl:mt-5
        2xl:w-[482px] 2xl:h-[180px] 2xl:font-[400px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:mt-5
        ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          possimus temporibus sapiente non, numquam modi aut quo consectetur
          saepe qui voluptatem reprehenderit sed, obcaecati blanditiis,
          pariatur eveniet rem{" "}
          <span className="hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            labore esse sint, suscipit alias
          </span>
        </p>

        <div className="bg-custom-cyan cursor-pointe rounded-sm text-black flex
        sm:w-[163px] sm:h-[46px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px] sm:mt-5
        md:w-[174px] md:h-[51px] md:rounded-[10px] md:py-[13px] md:px-[25px]
        lg:w-[185px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px] lg:mt-15
        xl:w-[197px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px] xl:mt-15
        2xl:w-[208px] 2xl:h-[56px] 2xl:rounded-[10px] 2xl:py-[13px] 2xl:px-[25px] 2xl:mt-20
        ">
          <Link href="/projectDetails">
            <button type="submit" className="
             cursor-pointer
             sm:w-[88px] sm:h-[20px] sm:font-[400] sm:leading-[20px] sm:text-[15px]
             md:md:w-[94px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
             lg:md:w-[105px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
             xl:md:w-[117px] xl:h-[28px] xl:font-[400] xl:text-[20px] xl:leading-[28px]
             2xl:md:w-[128px] 2xl:h-[30px] 2xl:font-[400] 2xl:text-[22px] 2xl:leading-[30px]
             ">
              View Details
            </button>
          </Link>
          <ArrowUpRight className="w-8 pl-2 md:w-[25px] md:h-[25px] xl:w-[25px] xl:h-[25px]" />
        </div>
      </div>
    </div>
    <div >
      <Image
        src="/Images/case.png"
        alt="Case Studies image"
        width={1000}
        height={1000}
        className="sm:w-[448px] sm:h-[341px] sm:rounded-[6.82px] mx-auto md:w-[495px] md:h-[376px]
        lg:w-[495px] lg:h-[376px] lg:rounded-[8px] xl:w-[526px] xl:h-[399px] 
        "
        priority
      />
    </div>
  </div>
);

/* TAG COMPONENT */
const Tag = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      inline-flex items-center justify-center
      rounded-full border border-green-900
      px-4 py-1.5 mt-5
      text-gray-800 dark:text-gray-200

      lg:h-[45px] lg:py-2.5 lg:border
      xl:px-8 xl:py-3 xl:h-[48px]
    "
  >
    <span
      className="
        font-normal text-sm leading-5 text-center
        lg:text-[18px] lg:leading-[25px]
        xl:text-[20px] xl:leading-[28px] 
        whitespace-nowrap
      "
    >
      {children}
    </span>
  </div>
);


export default Page;
