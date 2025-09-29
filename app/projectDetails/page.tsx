import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight, FileSliders } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Check } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
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

        <h1 className="text-4xl mt-10  font-semibold lg:text-5xl lg:-mt-2  text-center pt-20">
          Project Details
        </h1>
      </div>
      <div className="px-5 mt-30">
        <p className="text-sm text-center w-70 mx-auto  sm:pt-10 md:pt-20 md:w-80 lg:w-120 lg:text-lg ">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>
        {/* content start */}
        <div className="mt-10 lg:mt-20 ">
          <Image
            src="/Images/case.png"
            alt="Case Studies image"
            width={1000}
            height={1000}
            className="w-[2000px] mx-auto mb-10 lg:w-200 "
            priority
          />
          <div className="flex gap-3 mx-2 sm:mx-10 sm:gap-10 lg:ml-30 xl:ml-56">
            <div className="flex gap-1">
              <FileSliders />{" "}
              <p>
                Platform <span className="text-sm">web</span>
              </p>
            </div>
            <div className="flex gap-1">
              <CircleCheck />{" "}
              <p>
                Service <span className="text-sm">Frontend & Backend</span>
              </p>
            </div>
            <div className="flex gap-1">
              <ChartNoAxesCombined />{" "}
              <p>
                Industry <span className="text-sm">Technology</span>
              </p>
            </div>
          </div>
          {/* topic starting */}
          <div className="mx-2 mt-10 sm:mx-10 lg:mx-30 xl:mx-60 ">
            <div>
              <h1 className="text-3xl">SaaS Website</h1>
            </div>

            <p className="text-xs mt-3 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis
              ad est dolorum mollitia fuga magni accusamus sequi nisi minima
              delectus illo optio enim alias aperiam, totam minus amet eos omnis
              quas eveniet culpa facilis? Dolore architecto labore ex! Animi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis
              ad est dolorum mollitia fuga magni accusamus sequi nisi minima
              delectus illo optio enim alias aperiam, totam minus amet eos omnis
              quas eveniet culpa facilis? Dolore architecto labore ex! Animi.
            </p>

            <div className="hidden sm:block">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="w-[350px] mx-auto mb-10 sm:my-7 sm:flex sm:flex-col sm:mr-40 md:ml-1"
                priority
              />
              <p className="text-xs mt-3 lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                nobis ad est dolorum mollitia fuga magni accusamus sequi nisi
                minima delectus illo optio enim alias aperiam, totam minus amet
                eos omnis quas eveniet culpa facilis? Dolore architecto labore
                ex! Animi. delectus illo optio enim alias aperiam, totam minus
                amet eos omnis quas eveniet culpa facilis? Dolore architecto
                labore ex! Animi.
              </p>
              <p className="text-xs mt-3 lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                nobis ad est dolorum mollitia fuga magni accusamus sequi nisi
                minima delectus illo optio enim alias aperiam, totam minus amet
                eos omnis
              </p>
            </div>

            <div className="mt-4 mx-1 ">
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm lg:text-sm">Analytics & Strategy</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm lg:text-sm">UI/UX Design</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm lg:text-sm">Branding & Identity</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm lg:text-sm">Web Development</p>
              </div>
            </div>

            <h1 className="text-3xl text-center mt-5">Technologies Used</h1>
            <p className="text-xs mt-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              repellendus magni eius vel consequuntur consequatur explicabo
              sunt! Natus, cum, dicta aut numquam illo dolor libero rerum error,
              quam consectetur alias.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos repellendus magni eius vel consequuntur
              consequatur explicabo sunt! Natus, cum, dicta aut numquam illo
              dolor libero rerum error, quam consectetur alias
            </p>

            <div className="flex flex-row gap-5 mt-7">
              <p className="text-custom-cyan lg:text-sm">Frontend</p>
              <p className="lg:text-sm">Backend</p>
              <p className="lg:text-sm">Vcs</p>
              <p className="lg:text-sm">Hosting/De</p>
            </div>
            <div className="flex flex-row gap-5 mt-5">
              <div className="border-1 px-6 py-1 rounded-sm border-gray-600">
                <FaReact className="w-7 h-7 text-custom-cyan" />
              </div>
              <div className="border  px-6 py-1 rounded-sm  border-gray-600">
                <FaJsSquare className="w-7 h-7 text-yellow-400" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl mx-1 mt-5">Team Members Involoved</h1>

              <div className=" md:hidden px-3 py-2 border border-gray-600 rounded-xl mt-10 sm:w-80 ">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl sm:w-80 "
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>

              <div className="md:flex md:flex-row md:gap-10">
                <div className=" md:block sm:hidden px-3 py-2 border border-gray-600 rounded-xl mt-10">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl lg:w-160 xl:w-90"
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>

              <div className=" md:block sm:hidden px-3 py-2 border border-gray-600 rounded-xl mt-10">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl lg:w-160 xl:w-90"
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-3xl mx-1 mt-7 mb-5">Related Works</h1>
              <Image
                src="/Images/works.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80 md:hidden"
                priority
              />
            </div>
             <div className="md:flex md:flex-row md gap-20 lg:justify-around xl:justify-start xl:gap-40">
             <div>
               <Image
                src="/Images/works.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80"
                priority
              />
             </div>
             <div>
               <Image
                src="/Images/works2.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80 md:mt-20"
                priority
              />
             </div>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-4   px-2  mt-15 rounded-2xl text-center sm:w-110 sm:mx-auto md:w-139 lg:w-150">
              <h1 className="text-3xl w-72 sm:mx-auto sm:text-2xl">
                Let&apos;s Turn Your
                <span className="[font-family:var(--font-kaushan)] pl-2">
                  Dream
                </span>{" "}
                into
                <span className="[font-family:var(--font-kaushan)] pl-2">
                  Reality
                </span>{" "}
              </h1>
              <p className="text-center mt-6 text-sm mx-5 sm:text-sm">
                Pushing the boundaries of what&apos;s possible in the digital
                real. Join us this journey into the future of technology
              </p>
              <div className="bg-custom-cyan w-30  flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10 text-sm">
                {/* Visible only on mobile (<640px) */}
                <button type="button" className="block sm:hidden">
                  Book a call
                </button>

                {/* Visible only on small screens and above (≥640px) */}
                <button type="button" className="hidden sm:block ">
                  Get Start
                </button>

                <ArrowUpRight className="sm:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
