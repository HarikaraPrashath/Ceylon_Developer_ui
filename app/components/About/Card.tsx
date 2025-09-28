import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
   <div className="max-w-[1440px] mx-auto px-4">
     <div className="xl:hidden">
      <h1 className="text-4xl text-center mt-10 sm:text-5xl">
        Discover our{" "}
        <span className="[font-family:var(--font-kaushan)] pr-2">
          talented{" "}
        </span>
        and{" "}
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Dedicated{" "}
        </span>{" "}
        team{" "}
      </h1>

      <div className="">

        <div className=" md:flex md:flex-row md:justify-center md:gap-2 ">
          <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3 ">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90 md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 md:w-30 "
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80  "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>{" "}
        </div>
      <div className=" md:flex md:flex-row md:justify-center md:gap-2 sm:hidden ">
          <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104  md:h-95 md:px-3 md:w-90">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80  "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>{" "}
        </div>
      </div>



      <div className="bg-custom-cyan w-35 flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10">
        {/* Visible only on small screens and above */}
        <button type="button" className="hidden sm:block">
          View All
        </button>

        {/* Visible only on mobile (below sm) */}
        <button type="button" className="block sm:hidden">
          Learn More
        </button>
        <ArrowUpRight />
      </div>
    </div>
     <div className="hidden xl:block">
      <h1 className="text-5xl xl:w-150  ml-60 xl:ml-80 text-center mt-10 ">
        Discover our{" "}
        <span className="[font-family:var(--font-kaushan)] pr-2 ">
          talented{" "}
        </span>
        and{" "}
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Dedicated{" "}
        </span>{" "}
        team{" "}
      </h1>

      <div className="">

        <div className=" md:flex md:flex-row md:justify-center md:gap-2 ">
          <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3 ">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90 md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 md:w-30 "
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80  "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>{" "}
         <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3 ">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90 md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 md:w-30 "
              />
            </div>
          </div>
        </div>
        </div>
      <div className=" md:flex md:flex-row md:justify-center md:gap-2 sm:hidden ">
         <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3 ">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90 md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 md:w-30 "
              />
            </div>
          </div>
        </div>
          <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104  md:h-95 md:px-3 md:w-90">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80 "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl sm:w-100 sm:h-104 md:w-90 md:h-95 md:px-3">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3 sm:w-90 md:w-80  "
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between sm:w-90  md:w-80">
            <div>
              <h1 className="font-bold">Michael Raven</h1>
              <h1 className="mt-1">CEO & Co-Founder</h1>
            </div>
            <div>
              <Image
                src="/Images/iconsUser.png"
                alt="iconsUser"
                width={200}
                height={200}
                priority
                className="mx-auto mt-2 w-25 "
              />
            </div>
          </div>
        </div>{" "}
        </div>
      </div>



      <div className="bg-custom-cyan w-35 flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10">
        {/* Visible only on small screens and above */}
        <button type="button" className="hidden sm:block">
          View All
        </button>

        {/* Visible only on mobile (below sm) */}
        <button type="button" className="block sm:hidden">
          Learn More
        </button>
        <ArrowUpRight />
      </div>
    </div>
   </div>
  );
};

export default Card;
