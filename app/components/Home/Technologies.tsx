import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  return (
    <div className="max-w-[1440px] 2xl:mt-40 ">
      {/* Heading */}
      <h1 className="mx-auto h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center  max-w-[1440px]
      sm:w-[638px] sm:h-[40px] sm:leading-[40px] sm:font-[400]
      lg:w-[1024px] lg:h-[48px] lg:leading-[55px]
      xl:w-[1300px] xl:h-[70px] xl:font-[400] xl:text-[64px] xl:leading-[60px]
      2xl:w-[1300px] 2xl:h-[70px] 2xl:font-[400] 2xl:text-[72px] 2xl:leading-[70px]
      ">
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Technologies
        </span>{" "}
        we work with
      </h1>

      <div className=" max-w-[1440px] sm:mt-5 ">
        {/* ✅ Row 1 - Left to Right */}
        <Marquee speed={40} pauseOnHover gradient={false}>
          <div className="flex gap-4 ml-4 sm:ml-14  mt-5">
            {["Image.png", "Image (1).png", "Image (2).png", "Image (3).png", "Image (4).png"].map(
              (img, index) => (
                <div
                  key={index}
                  className="border-[0.39px]  rounded-[3.86px] w-[86.11px] h-[35.14px] px-[9.27px] py-[6.18px] border-gray-600 flex items-center justify-center
                  sm:w-[140px] sm:h-[70px] sm:rounded-[8px] sm:border-[0.71px] sm:p-[15px]
                  md:w-[155px] md:h-[74px] md:rounded-[8px] md:border-[0.71px] md:p-[15px]
                  lg:w-[176px] lg:h-[79px] lg:rounded-[7.96px] lg:border-[0.8px] lg:py-[15px] lg:px-[18px]
                  xl:w-[223px] xl:h-[92px] xl:rounded-[10px] xl:border-[1px] xl:py-[16px] xl:px-[24px]
                  2xl:w-[223px] 2xl:h-[92px] 2xl:rounded-[10px] 2xl:border-[1px] 2xl:py-[16px] 2xl:px-[24px]
                  "
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24  px-2 py-1 sm:w-[110px] sm:h-[40px] md:w-[125px] md:h-[44px] lg:w-[140px] lg:h-[49px]
                    xl:w-[175px] xl:h-[60px]  2xl:w-[175px] 2xl:-[60px]
                    "
                    priority
                  />
                </div>
              )
            )}
          </div>
        </Marquee>

        {/* ✅ Row 2 - Right to Left */}
        <Marquee speed={50} pauseOnHover direction="right" gradient={false}>
          <div className="flex gap-4 ml-4 sm:ml-14  mt-5">
            {["Image (8).png", "Image (7).png", "Image (6).png", "Image (5).png", "Image.png"].map(
              (img, index) => (
                <div
                  key={index}
                  className="border-[0.39px]  rounded-[3.86px] w-[86.11px] h-[35.14px] px-[9.27px] py-[6.18px] border-gray-600 flex items-center justify-center
                  sm:w-[140px] sm:h-[70px] sm:rounded-[8px] sm:border-[0.71px] sm:p-[15px]
                  md:w-[155px] md:h-[74px] md:rounded-[8px] md:border-[0.71px] md:p-[15px]
                  lg:w-[176px] lg:h-[79px] lg:rounded-[7.96px] lg:border-[0.8px] lg:py-[15px] lg:px-[18px]
                  2xl:w-[223px] 2xl:h-[92px] 2xl:rounded-[10px] 2xl:border-[1px] 2xl:py-[16px] 2xl:px-[24px]

                  "
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24  px-2 py-1 sm:w-[110px] sm:h-[40px] md:w-[125px] md:h-[44px] lg:w-[140px] lg:h-[49px] 2xl:w-[175px] 2xl:-[60px]"
                    priority
                  />
                </div>
              )
            )}
          </div>
        </Marquee>

        {/* ✅ Row 3 - Left to Right again */}
        <Marquee speed={35} pauseOnHover gradient={false}>
          <div className="flex gap-4 ml-4 sm:ml-14 md:hidden mt-5">
            {["Image (3).png", "Image (4).png", "Image (1).png", "Image (7).png", "Image.png"].map(
              (img, index) => (
                <div
                  key={index}
                  className="border-[0.39px]  rounded-[3.86px] w-[86.11px] h-[35.14px] px-[9.27px] py-[6.18px] border-gray-600 flex items-center justify-center
                  sm:w-[140px] sm:h-[70px] sm:rounded-[8px] sm:border-[0.71px] sm:p-[15px]
                  "
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24  px-2 py-1 sm:w-[110px] sm:h-[40px] "
                    priority
                  />
                </div>
              )
            )}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
