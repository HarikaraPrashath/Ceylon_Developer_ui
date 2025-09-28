import React from "react";
import Navbar from "../components/Navbar/Navbar";

const page = () => {
  return (
    <div>
      <div
        className="relative  flex flex-col h-[30%] text-white "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "500px, 600px mt-20",
        }}
      >
        <Navbar />

        <h1 className="text-4xl mt-10text-center font-semibold ">Contact Us</h1>
      </div>
      <div className="px-5 sm:mx-20 md:mx-20">
        <p className=" text-center w-80 mx-auto mt-5 sm:w-120">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>


      </div>
    </div>
  );
};

export default page;
