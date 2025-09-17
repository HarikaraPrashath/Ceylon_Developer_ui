import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div>
      {/* Technology work with */}
      <h1
        className="max-[376px]:text-4xl text-center 
            max-[376px]:mt-5 
            max-[640px]:text-5xl
            sm:text-4xl 
            md:text-5xl 
            2xl:text-6xl 2xl:mt-20"
      >
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Technologies
        </span>{" "}
        we work with
      </h1>

      {/* 1st row */}
      <div
        className="flex flex-row mt-5 ml-4 
            max-[376px]:gap-3 max-[376px]:justify-end 
             max-[640px]:gap-2 max-[640px]:justify-end  max-[640px]:ml-10
            sm:justify-end sm:gap-2 sm:ml-10 sm:mt-10 
            md:ml-15 md:-mr-30 
            xl:w-[90%] xl:justify-end "
      >
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image.png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]  xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg xl:h-[120px] ">
          <Image
            src="/Images/Image (1).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg xl:h-[120px] ">
          <Image
            src="/Images/Image (2).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]  xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image (3).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 max-[376px]:hidden sm:rounded-lg xl:overflow-hidden xl:h-[120px] ">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
      </div>

      {/* 2nd row */}
      <div
        className="flex flex-row mt-5 ml-4 
            max-[376px]:gap-2 max-[376px]:justify-start 
            max-[640px]:gap-2 max-[640px]:justify-start  max-[640px]:mr-10
            sm:justify-start sm:gap-2 sm:mr-10 
            md:-ml-15 md:mr-30 xl:-ml-2 
            xl:mr-30 xl:w-[90%] xl:justify-start  xl:gap-4"
      >
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px] xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image (5).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image (6).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]  xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg xl:h-[120px]">
          <Image
            src="/Images/Image (7).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 max-[376px]:hidden sm:py-1 sm:rounded-lg xl:h-[120px] ">
          <Image
            src="/Images/Image (8).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]   xl:w-[300px] xl:h-[100px]"
            priority
          />
        </div>
      </div>

      {/* 3rd row */}
      <div
        className="flex flex-row mt-5 ml-4 
            max-[376px]:gap-2 max-[376px]:justify-end 
            max-[640px]:gap-2 max-[640px]:justify-end  max-[640px]:ml-10
            sm:justify-end sm:gap-2 sm:ml-10 md:hidden"
      >
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:py-1 sm:rounded-lg">
          <Image
            src="/Images/Image.png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg ">
          <Image
            src="/Images/Image (1).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg">
          <Image
            src="/Images/Image (2).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 sm:rounded-lg">
          <Image
            src="/Images/Image (3).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]"
            priority
          />
        </div>
        <div className="border-1 max-[376px]:rounded-lg max-[376px]:py-2 max-[376px]:hidden sm:rounded-lg">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="max-[376px]:w-[70px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
