import React from "react";
import PNavbar from "../components/PortfolioNavBar/PNavbar";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import { Star } from "lucide-react";

const app = () => {
  return (
    <div>
      <PNavbar />
      {/* main content         */}
      <div className="mt-15">
        <h1 className="pl-8 text-lg">👋 Hello I am </h1>
        <div className="mx-5">
          <h1 className=" text-4xl text-start">UI/UX designer</h1>
          <p className="mt-3 w-full text-sm">
            For the past decade, I’ve been on a mission to revolutionize design
            and tech with bold creativity and cutting-edge solutions.{" "}
          </p>
          <div className="flex bg-custom-cyan w-max px-2.5 py-1.5 rounded-sm gap-2 mt-4">
            <button type="button" className="text-black">
              Resume Download{" "}
            </button>{" "}
            <ArrowDownToLine className="text-black " />
          </div>
        </div>

        <div className="mx-5 mt-10">
          <div className="flex h-80">
            <div className="w-30">
              <Image
                src="/Images/double.png"
                alt="cureveLine"
                width={20}
                height={30}
                className=""
                priority
              />
              <p className="text-xs mt-3">
                Jenny’s Exceptional UI design ensure our website’s success.
                Highly Recommended
              </p>
            </div>
            <div
              className=" flex flex-col  w-55 h-55 overflow-auto"
              style={{
                backgroundImage: `url('/Images/young.png'),url('/Images/Ellipse 2.png')`,
                backgroundPosition: "center,bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover, 120%",
                height: ", 900px",
                width:",400px"
                
              }}
            ></div>
            <div className=" justify-end pt-10">
              <div className=" flex w-20">
                <Star className="text-yellow-500" fill="yellow" />
                <Star className="text-yellow-500" fill="yellow" />
                <Star className="text-yellow-500" fill="yellow" />
                <Star className="text-yellow-500" fill="yellow" />
                <Star className="text-yellow-500" fill="yellow" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">5 Years</h1>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>
          <p className="-mt-20  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.</p>
        </div>
      </div>
    </div>
  );
};

export default app;
