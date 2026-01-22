import React from "react";
import PNavbar from "../components/PortfolioNavBar/PNavbar";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";

const app = () => {
  return (
    <div>
      <PNavbar />
      {/* main content         */}
      <div className="mt-15  mx-auto sm:mx-[3rem] xl:mx-[11rem] 2xl:mx-[6rem] ">
        <h1 className="pl-8 text-lg">👋 Hello I am </h1>
        <div className="mx-5">
          <h1 className=" text-4xl text-start">UI/UX designer</h1>
          <p className="mt-3 w-full text-sm">
            For the past decade, I’ve been on a mission to revolutionize design
            and tech with bold creativity and cutting-edge solutions.{" "}
          </p>
          <div className="flex bg-custom-cyan w-max px-2.5 py-1.5 rounded-sm gap-2 mt-4 cursor-pointer">
            <button type="button" className="text-black">
              Resume Download{" "}
            </button>{" "}
            <ArrowDownToLine className="text-black " />
          </div>
        </div>

        <div className="mx-5 mt-10">
          <div className="flex h-80 sm:justify-between">
            <div className="w-30 ">
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
              className=" flex flex-col  w-55 h-55 overflow-auto relative "
              style={{
                backgroundImage: `url('/Images/young.png'),url('/Images/Ellipse 2.png')`,
                backgroundPosition: "center,bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover, 120%",
                height: ",900px",
                width: ",2200px",
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
          <p className="-mt-20  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra justo nec
            ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh
            tellus molestie nunc non blandit massa.
          </p>

          <div className="mt-10">
            <h1 className="text-3xl  px-10  text-center font-bold">
              Showcasing my Best Work
            </h1>

            <p className="text-center mt-5">
              I have worked on a wide range of projects, Here are some of my
              Projects.
            </p>

            <div>
              <div>
                <ul className="flex flex-row gap-2 text-sm justify-center mt-6 sm:justify-around sm:mx-20 sm:text-[1.2rem] lg:mx-[15rem] xl:mx-[10rem]">
                  <li className="bg-custom-cyan px-2 py-1 rounded-lg text-black">
                    All
                  </li>
                  <li className="bg-gray-800 px-2 py-1 rounded-lg text-white">
                    Website
                  </li>
                  <li className="bg-gray-800 px-2 py-1 rounded-lg text-white">
                    App Mobile
                  </li>
                  <li className="bg-gray-800 px-2 py-1 rounded-lg text-white">
                    App Desktop
                  </li>
                </ul>
              </div>

              {/* Project showcase */}
              <div className="md:flex md:justify-center lg:flex-col lg:mx-[6rem] ">
                <div className=" border border-gray-700 max-h-min bg-gray-900 rounded-2xl mt-7 mx-5 sm:mx-24 md:mx-2 lg:flex ">
                  <div className="p-4">
                    <Image
                      src="/Images/app.png"
                      alt="cureveLine"
                      width={300}
                      height={30}
                      className="sm:w-100 lg:w-90"
                      priority
                    />
                  </div>
                  <div className="px-5 mb-4 lg:m-[auto]">
                    <h1 className="text-lg ">Clothing Store Mobile App</h1>
                    <p className="font-semibold pt-2">Worked On</p>

                    <div className="flex flex-row gap-x-3 pl-1 mt-2 text-custom-cyan">
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Mobile App
                        </h1>
                      </div>
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Admin Panel
                        </h1>
                      </div>
                    </div>

                    <p className="font-semibold pt-2">
                      Technologies I have Worked
                    </p>
                    <div className="flex gap-3 mt-2">
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/448222/figma.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Figma</h1>
                      </div>
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Illustrator</h1>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-950 py-1 px-3  w-40 rounded-xl flex gap-1 border border-gray-600  mt-2">
                        <Image
                          src="https://www.svgrepo.com/show/426337/paper-clip.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className="text-gray-50"
                          priority
                        />
                        <h1>Go to Behance</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border border-gray-700 max-h-min bg-gray-900 rounded-2xl mt-7 mx-5 sm:mx-24 md:mx-2 lg:flex ">
                  <div className="p-4">
                    <Image
                      src="/Images/web.png"
                      alt="cureveLine"
                      width={300}
                      height={30}
                      className="sm:w-100 lg:w-90"
                      priority
                    />
                  </div>
                  <div className="px-5 mb-4 lg:m-[auto]">
                    <h1 className="text-lg ">Clothing Store Mobile App</h1>
                    <p className="font-semibold pt-2">Worked On</p>

                    <div className="flex flex-row gap-x-3 pl-1 mt-2 text-custom-cyan">
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Mobile App
                        </h1>
                      </div>
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Admin Panel
                        </h1>
                      </div>
                    </div>

                    <p className="font-semibold pt-2">
                      Technologies I have Worked
                    </p>
                    <div className="flex gap-3 mt-2">
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/448222/figma.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Figma</h1>
                      </div>
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Illustrator</h1>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-950 py-1 px-3  w-40 rounded-xl flex gap-1 border border-gray-600  mt-2">
                        <Image
                          src="https://www.svgrepo.com/show/485259/clip.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className="text-gray-50"
                          priority
                        />
                        <h1>Go to Behance</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border border-gray-700 max-h-min bg-gray-900 rounded-2xl mt-7 mx-5 sm:mx-24 md:mx-2 lg:flex  md:hidden lg:block">
                  <div className="p-4">
                    <Image
                      src="/Images/store.png"
                      alt="cureveLine"
                      width={300}
                      height={30}
                      className="sm:w-100 lg:w-90"
                      priority
                    />
                  </div>
                  <div className="px-5 mb-4 lg:m-[auto]">
                    <h1 className="text-lg ">Clothing Store Mobile App</h1>
                    <p className="font-semibold pt-2">Worked On</p>

                    <div className="flex flex-row gap-x-3 pl-1 mt-2 text-custom-cyan">
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Mobile App
                        </h1>
                      </div>
                      <div>
                        <h1 className="bg-gray-950 py-1 px-3 rounded-xl">
                          Admin Panel
                        </h1>
                      </div>
                    </div>

                    <p className="font-semibold pt-2">
                      Technologies I have Worked
                    </p>
                    <div className="flex gap-3 mt-2">
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/448222/figma.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Figma</h1>
                      </div>
                      <div className="bg-gray-950 py-1 px-3 rounded-xl flex gap-1 border border-gray-600">
                        <Image
                          src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className=""
                          priority
                        />
                        <h1>Illustrator</h1>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-950 py-1 px-3  w-40 rounded-xl flex gap-1 border border-gray-600  mt-2">
                        <Image
                          src="https://www.svgrepo.com/show/485259/clip.svg"
                          alt="cureveLine"
                          width={20}
                          height={20}
                          className="text-gray-50"
                          priority
                        />
                        <h1>Go to Behance</h1>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="text-center mt-7">
                <button
                  type="button"
                  className="cursor-pointer bg-custom-cyan text-xl px-3 py-2 rounded-lg text-black"
                >
                  {" "}
                  Load more
                </button>
              </div>
            </div>

            {/* Skill Show */}
            <div>
              <h1 className="text-3xl  px-10  text-center font-bold mt-10">
                Skills
              </h1>
              <p className="text-center mt-4">
                Here are some of my skills on which i have been working
              </p>

              <div className="mx-2 mt-5 sm:hidden">
                <div className="flex gap-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452228/html-5.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>HTML5</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452185/css-3.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>CSS3</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452129/vs-code.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>VS Code</h1>
                  </div>
                </div>
                {/* 2nd row skill */}
                <div className="flex gap-3 justify-center mt-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452092/react.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>React JS</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Postman</h1>
                  </div>
                </div>
                {/* 3rd row skill */}
                <div className="flex gap-3 justify-end mt-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Illustrator</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452151/adobe-xd.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Adobe XD</h1>
                  </div>
                </div>
                {/* 4th row skill */}
                <div className="flex gap-3 justify-start mt-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/373595/firebase.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Fire Base</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Photoshop</h1>
                  </div>
                </div>
                {/* 5th row skill */}
                <div className="flex gap-3 justify-end mt-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452045/js.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>JavaScript</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/448222/figma.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Figma</h1>
                  </div>
                </div>
              </div>

              <div className="mx-2 mt-5 hidden sm:block lg:hidden">
                <div className="flex gap-3 text-2xl  justify-center">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452228/html-5.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>HTML5</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452185/css-3.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>CSS3</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452129/vs-code.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>VS Code</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452092/react.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>React JS</h1>
                  </div>
                </div>
                {/* 2nd row skill */}
                <div className="flex gap-3 justify-center mt-3 text-2xl">

                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Postman</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                      alt="cureveLine"
                      width={30}
                      height={30}
                      className=""
                      priority
                    />
                    <h1>Illustrator</h1>
                  </div>
                </div>

                {/* 3rd row skill */}
                <div className="flex gap-3 justify-center text-2xl mt-3">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/373595/firebase.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Fire Base</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452151/adobe-xd.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Adobe XD</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452045/js.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>JavaScript</h1>
                  </div>
                </div>
                {/* 4th row skill */}
                <div className="flex gap-3 justify-center mt-3 text-2xl">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Photoshop</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/448222/figma.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Figma</h1>
                  </div>
                </div>
              </div>

              <div className="mx-2 mt-5 hidden lg:block">
                {/* 1st row */}
                <div className="flex gap-3 text-2xl  justify-center">
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452228/html-5.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>HTML5</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452185/css-3.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>CSS3</h1>
                  </div>{" "}
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452129/vs-code.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>VS Code</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452092/react.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>React JS</h1>
                  </div>
                </div>
                {/* 2nd row skill */}
                <div className="flex gap-3 justify-center mt-3 text-2xl">

                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Postman</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"
                      alt="cureveLine"
                      width={30}
                      height={30}
                      className=""
                      priority
                    />
                    <h1>Illustrator</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/373595/firebase.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Fire Base</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452151/adobe-xd.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Adobe XD</h1>
                  </div>

                </div>

                {/* 3rd row skill */}
                <div className="flex gap-3 justify-center text-2xl mt-3">

                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/452045/js.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>JavaScript</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Photoshop</h1>
                  </div>
                  <div className="bg-gray-950 py-1 px-3 rounded-2xl flex gap-1 border border-gray-600">
                    <Image
                      src="https://www.svgrepo.com/show/448222/figma.svg"
                      alt="cureveLine"
                      width={20}
                      height={20}
                      className=""
                      priority
                    />
                    <h1>Figma</h1>
                  </div>
                </div>

              </div>
            </div>

            {/* Achievements */}
            <div>
              <h1 className="text-3xl  px-10  text-center font-bold mt-10">
                Achievement
              </h1>

              <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem] md:mx-[1rem]">
                  <div className="flex flex-row justify-between px-3 ]">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem]  md:mx-[1rem]">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem]  md:mx-[1rem]">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem] hidden md:block  md:mx-[1rem]">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem]  md:mx-[1rem] hidden lg:block">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

                <div className=" border border-gray-600 rounded-3xl mt-6 py-4 bg-gray-950 sm:mx-[5rem] hidden md:mx-[1rem] lg:block">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-row  bg-gray-900 border border-gray-700 rounded-4xl ">
                      <Image
                        src="/Images/udemy.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className=""
                        priority
                      />
                      <h1 className="text-xl px-3 py-1 ">Udemy</h1>
                    </div>
                    <div>
                      <Image
                        src="/Images/Board.png"
                        alt="cureveLine"
                        width={40}
                        height={30}
                        className="pt-1"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-sm mx-6 mt-4">
                    Professional Certificate in Customer Experience Management
                  </p>

                  <div className="flex flex-row gap-1 bg-custom-cyan w-20 px-3 py-1 rounded-2xl text-black mt-5 mx-5 cursor-pointer">
                    <Eye className="w-3 " />
                    <button type="button">View</button>
                  </div>
                </div>

              </div>
              {/* Button for Achievement */}
              <div className="text-center mt-7">
                <button
                  type="button"
                  className="cursor-pointer bg-custom-cyan text-xl px-3 py-2 rounded-lg text-black"
                >
                  {" "}
                  View All
                </button>
              </div>
            </div>

            {/* Contact me position */}
            <div>
              <h1 className="text-3xl  px-10  text-center font-bold mt-10">
                Contact me
              </h1>
              <p className="text-center mt-4">
                Cultivating Connections: Reach Out And Connect With Me
              </p>

              <form action="" className="mt-4 mx-2 text-white sm:mx-[4rem]">
                <div className="lg:flex lg:gap-4 ">
                  <div>   <input
                    placeholder="Name"
                    className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white"
                  />

                    <input
                      placeholder="Email"
                      className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white "
                    />

                    <input
                      placeholder="Phone Number"
                      className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white"
                    /></div>
                  <div>

                    <select className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white ">
                      <option value="">Service of Internet</option>
                      <option value="fiber">Fiber Connection</option>
                      <option value="4g">4G Mobile Data</option>
                      <option value="wifi">Wi-Fi Hotspot</option>
                      <option value="broadband">Broadband</option>
                      <option value="satellite">Satellite Internet</option>
                    </select>

                    <input
                      placeholder="Timeline"
                      className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white"
                    />

                    <textarea
                      placeholder="Timeline"
                      className="bg-gray-800 py-3 px-4 w-full rounded-xl my-3 text-white border border-gray-600 resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Button for Submit */}
                <div className="text-center mt-7">
                  <button
                    type="submit"
                    className="cursor-pointer bg-custom-cyan text-xl px-3 py-2 rounded-lg text-black"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default app;
