import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* Mobile version only */}
      <div className="sm:hidden">
        <div
          className="relative  flex flex-col h-[50%] text-white "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
            backgroundPosition: "bottom,bottom,center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 100%",
            height: "100px",
          }}
        >
          <Navbar />

          <h1 className="text-4xl mt-10  font-semibold  text-center pt-20">
            Case Studies
          </h1>
        </div>
        <div className="px-5 mt-30">
          <p className="text-sm text-center w-70 mx-auto">
            Pushing the boundaries of hat&apos;s possible in the digital
            realm.Join us on this journey into the future of technology
          </p>
          {/* mainFream */}
          <div className="mx-3">
            <div className="border w-full h-auto px-2 py-3 rounded-xl mt-7">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="w-[2000px] mx-auto mb-10"
                priority
              />
              <div className="flex flex-row  justify-around">
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1">
                  SaaS Website
                </h1>
                <p className="ml-1 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus temporibus sapiente non, numquam modi
                  aut quo consectetur saepe qui voluptatem reprehenderit sed,
                  obcaecati blanditiis, pariatur eveniet rem
                </p>

                <div className="bg-custom-cyan w-35 rounded-sm text-black flex mt-4 py-1">
                  <Link href="/projectDetails">
                    <button type="submit" className="ml-3">
                      View Details{" "}
                    </button>
                  </Link>
                  <ArrowUpRight className="w-8 pl-2" />
                </div>
              </div>
            </div>

            <div className="border w-full h-auto px-2 py-3 rounded-xl mt-7">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="w-[2000px] mx-auto mb-10"
                priority
              />
              <div className="flex flex-row  justify-around">
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1">
                  SaaS Website
                </h1>
                <p className="ml-1 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus temporibus sapiente non, numquam modi
                  aut quo consectetur saepe qui voluptatem reprehenderit sed,
                  obcaecati blanditiis, pariatur eveniet rem
                </p>

                <div className="bg-custom-cyan w-35 rounded-sm text-black flex mt-4 py-1">
                  <Link href="/projectDetails">
                    <button type="submit" className="ml-3">
                      View Details{" "}
                    </button>
                  </Link>
                  <ArrowUpRight className="w-8 pl-2" />
                </div>
              </div>
            </div>

            <div className="border w-full h-auto px-2 py-3 rounded-xl mt-7">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="w-[2000px] mx-auto mb-10"
                priority
              />
              <div className="flex flex-row  justify-around">
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
                <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl">
                  <h1 className="">Framer Development</h1>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1">
                  SaaS Website
                </h1>
                <p className="ml-1 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus temporibus sapiente non, numquam modi
                  aut quo consectetur saepe qui voluptatem reprehenderit sed,
                  obcaecati blanditiis, pariatur eveniet rem
                </p>

                <div className="bg-custom-cyan w-35 rounded-sm text-black flex mt-4 py-1">
                  <Link href="/projectDetails">
                    <button type="submit" className="ml-3">
                      View Details{" "}
                    </button>
                  </Link>
                  <ArrowUpRight className="w-8 pl-2" />
                </div>
              </div>
            </div>

            {/* final section */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2  pt-5 px-4 mx-3 mt-15 rounded-2xl ">
              <h1 className=" text-center  text-2xl">
                We&apos;re eager to
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Discuss
                </span>{" "}
                how we can elevate
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Your Business
                </span>{" "}
              </h1>

              <p className="text-center mt-6 w-59 text-xs">
                Pushing the boundaries of what&apos;s possible in the digital
                real. Join us this journey into the future of technology
              </p>

              <div className="bg-custom-cyan text-black w-30  text-center mx-auto m-5 rounded-lg py-1 font-semibold ">
                <button type="button">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop and Tab Version */}
      <div>
        <div
          className="relative  flex flex-col h-[50%] text-white "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
            backgroundPosition: "bottom,bottom,center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 100%",
            height: "100px",
          }}
        >
          <Navbar />

          <h1 className="text-4xl mt-10text-center font-semibold  text-center pt-20 lg:text-5xl ">
            Case Studies
          </h1>
        </div>
        <div className="px-5 mt-30 md:mt-40">
          <p className="text-sm text-center w-70 mx-auto sm:w-90 lg:text-lg lg:w-140 xl:mb-20 xl:pt-10">
            Pushing the boundaries of hat&apos;s possible in the digital
            realm.Join us on this journey into the future of technology
          </p>
          {/* mainFream */}
          <div className="mx-3 md:mx-10 lg:mx-10 xl:mx-40">
            {/* 1st show card */}
            <div className="border w-full max-w-[1440px] h-auto px-4 py-3 rounded-xl mt-7 lg:flex lg:flex-row xl:px-10 mx-auto">
              <div>
                <div className="flex flex-row  justify-start gap-7 sm:ml-2 sm:mt-5 lg:flex-col xl:flex-row">
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl sm:text-sm lg:w-max lg:px-3 lg:py-2 ">
                    <h1 className="">Framer Development</h1>
                  </div>
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl lg:w-max lg:px-3 lg:py-2 lg:-mt-4  xl:w-max xl:mt-0">
                    <h1 className="">Figma Design</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1 sm:text-3xl sm:my-3 xl:text-4xl xl:mb-6 xl:mt-7">
                    SaaS Website
                  </h1>
                  <p className="ml-1 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis possimus temporibus sapiente non, numquam modi
                    aut quo consectetur saepe qui voluptatem reprehenderit sed,
                    obcaecati blanditiis, pariatur eveniet rem{" "}
                    <span className="hidden lg:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores non labore esse sint, suscipit alias perferendis
                      architecto accusantium cupiditate eveniet.
                    </span>
                  </p>

                  <div className="bg-custom-cyan cursor-pointer w-35 rounded-sm text-black flex mt-4 py-1 sm:ml-1 lg:mt-10 xl:w-max xl:px-2 xl:py-2">
                    <Link href="/projectDetails">
                    <button type="submit" className="ml-3 xl:text-sm cursor-pointer">
                      View Details{" "}
                    </button>
                    </Link>
                    <ArrowUpRight className="w-8 pl-2" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/Images/case.png"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto mb-10 lg:w-[1000px] lg:mt-5"
                  priority
                />
              </div>
            </div>

            {/* 2nd show card */}
            <div className="border  w-full max-w-[1440px] h-auto px-4 py-3 rounded-xl mt-7 lg:flex lg:flex-row xl:px-10 mx-auto">
              <div>
                <div className="flex flex-row  justify-start gap-7 sm:ml-2 sm:mt-5 lg:flex-col xl:flex-row">
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl sm:text-sm lg:w-max lg:px-3 lg:py-2 ">
                    <h1 className="">Framer Development</h1>
                  </div>
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl lg:w-max lg:px-3 lg:py-2 lg:-mt-4  xl:w-max xl:mt-0">
                    <h1 className="">Figma Design</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1 sm:text-3xl sm:my-3 xl:text-4xl xl:mb-6 xl:mt-7">
                    SaaS Website
                  </h1>
                  <p className="ml-1 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis possimus temporibus sapiente non, numquam modi
                    aut quo consectetur saepe qui voluptatem reprehenderit sed,
                    obcaecati blanditiis, pariatur eveniet rem{" "}
                    <span className="hidden lg:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores non labore esse sint, suscipit alias perferendis
                      architecto accusantium cupiditate eveniet.
                    </span>
                  </p>

                  <div className="bg-custom-cyan cursor-pointer w-35 rounded-sm text-black flex mt-4 py-1 sm:ml-1 lg:mt-10 xl:w-max xl:px-2 xl:py-2">
                    <Link href="/projectDetails">
                    <button type="submit" className="ml-3 xl:text-sm">
                      View Details{" "}
                    </button>
                    </Link>
                    <ArrowUpRight className="w-8 pl-2" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/Images/case.png"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto mb-10 lg:w-[1000px] lg:mt-5"
                  priority
                />
              </div>
            </div>

            {/* 3rd  show card */}
            <div className="border  w-full max-w-[1440px] h-auto px-4 py-3 rounded-xl mt-7 lg:flex lg:flex-row xl:px-10 mx-auto">
              <div>
                <div className="flex flex-row  justify-start gap-7 sm:ml-2 sm:mt-5 lg:flex-col xl:flex-row">
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl sm:text-sm lg:w-max lg:px-3 lg:py-2 ">
                    <h1 className="">Framer Development</h1>
                  </div>
                  <div className=" text-xs border border-green-900 py-1 px-2 rounded-3xl lg:w-max lg:px-3 lg:py-2 lg:-mt-4  xl:w-max xl:mt-0">
                    <h1 className="">Figma Design</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1 sm:text-3xl sm:my-3 xl:text-4xl xl:mb-6 xl:mt-7">
                    SaaS Website
                  </h1>
                  <p className="ml-1 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis possimus temporibus sapiente non, numquam modi
                    aut quo consectetur saepe qui voluptatem reprehenderit sed,
                    obcaecati blanditiis, pariatur eveniet rem{" "}
                    <span className="hidden lg:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores non labore esse sint, suscipit alias perferendis
                      architecto accusantium cupiditate eveniet.
                    </span>
                  </p>

                  <div className="bg-custom-cyan  cursor-pointer w-35 rounded-sm text-black flex mt-4 py-1 sm:ml-1 lg:mt-10 xl:w-max xl:px-2 xl:py-2">
                     <Link href="/projectDetails">
                    <button type="submit" className="ml-3 xl:text-sm">
                      View Details{" "}
                    </button>
                    </Link>
                    <ArrowUpRight className="w-8 pl-2" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/Images/case.png"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="w-[2000px] mx-auto mb-10 lg:w-[1000px] lg:mt-5"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* final section */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2  pt-5 px-4 mx-3 mt-15 rounded-2xl sm:w-130 sm:mx-auto lg:w-160 xl:w-190">
          <h1 className=" text-center  text-2xl lg:text-3xl">
            We&apos;re eager to
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Discuss
            </span>{" "}
            how we can elevate
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Your Business
            </span>{" "}
          </h1>

          <p className="text-center mt-6 w-59 text-xs sm:mx-auto sm:w-90">
            Pushing the boundaries of what&apos;s possible in the digital real.
            Join us this journey into the future of technology
          </p>

          <div className="bg-custom-cyan text-black w-30  text-center mx-auto m-5 rounded-lg py-1 font-semibold ">
            <button type="button" className="sm:text-sm">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
