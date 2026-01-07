import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  return (
    <div className="max-w-[1440px]">
      {/* Heading */}
      <h1 className="mx-auto h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center sm:w-90 xl:ml-130 xl:w-120 max-w-[1440px]">
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Technologies
        </span>{" "}
        we work with
      </h1>

      <div className="lg:ml-35 xl:mx-40 max-w-[1440px]">
        {/* ✅ Row 1 - Left to Right */}
        <Marquee speed={40} pauseOnHover gradient={false}>
          <div className="flex gap-4 ml-4 sm:ml-14  mt-5">
            {["Image.png", "Image (1).png", "Image (2).png", "Image (3).png", "Image (4).png"].map(
              (img, index) => (
                <div
                  key={index}
                  className="border rounded-sm border-gray-600 flex items-center justify-center"
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24 sm:w-32 px-2 py-1"
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
                  className="border rounded-sm border-gray-600 flex items-center justify-center"
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24 sm:w-32 px-2 py-1"
                    priority
                  />
                </div>
              )
            )}
          </div>
        </Marquee>

        {/* ✅ Row 3 - Left to Right again */}
        <Marquee speed={35} pauseOnHover gradient={false}>
          <div className="flex gap-4 ml-4 sm:ml-14 sm:hidden mt-5">
            {["Image (3).png", "Image (4).png", "Image (1).png", "Image (7).png", "Image.png"].map(
              (img, index) => (
                <div
                  key={index}
                  className="border rounded-sm border-gray-600 flex items-center justify-center"
                >
                  <Image
                    src={`/Images/${img}`}
                    alt="curveLine"
                    width={900}
                    height={900}
                    className="w-24 sm:w-32 px-2 py-1"
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
