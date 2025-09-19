import Image from "next/image";
import React from "react";
import { ArrowUpRight  } from "lucide-react";

const Card = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
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
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3"
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between">
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
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3"
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between">
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
        <div className="bg-gray-900 w-80 h-90 mx-auto mt-8 rounded-3xl">
          <Image
            src="/Images/Team Image.png"
            alt="Team Image"
            width={200}
            height={200}
            priority
            className="mx-auto  w-74 pt-3"
          />
          <div className="flex flex-row bg-gray-800 w-74 mx-auto mt-4 rounded-2xl p-4 justify-between">
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
      </div>
      <div className="bg-custom-cyan w-35 flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10">
        <button type="button">View All</button>
        <ArrowUpRight  />
      </div>
    </div>
  );
};

export default Card;
