import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div className="max-w-[1440px]">
      {/* Technology work with */}
      <h1 className="mx-auto text-center w-70 text-3xl sm:w-90 xl:ml-130 max-w-[1280px]">
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Technologies
        </span>{" "}
        we work with
      </h1>

      <div className=" lg:ml-35 xl:ml-90 max-w-[1440px] ">
        {/* 1st row */}
      <div className="flex gap-2 mt-4 ml-4 sm:ml-14">
        <div className=" border rounded-sm mt-2 border-gray-600 ">
          <Image
            src="/Images/Image.png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (1).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (3).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (7).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600 hidden 2xl:block">
          <Image
            src="/Images/Image (7).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex gap-2 mt-2 mr-4 sm:ml-5 2xl:-ml-50">
          <div className=" border rounded-sm mt-2 border-gray-600 hidden 2xl:block">
          <Image
            src="/Images/Image (2).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (5).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (6).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (7).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (8).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        
      </div>

      {/* 3rd row */}
      <div className="flex gap-2 mt-4 ml-4 sm:ml-14 md:hidden">
        <div className=" border rounded-sm mt-2 border-gray-600 ">
          <Image
            src="/Images/Image.png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (1).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (4).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>

        <div className=" border rounded-sm mt-2 border-gray-600">
          <Image
            src="/Images/Image (3).png"
            alt="cureveLine"
            width={900}
            height={900}
            className="w-25 px-2 py-1 sm:w-32"
            priority
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Technologies;
