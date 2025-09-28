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

        <h1 className="text-4xl mt-10text-center font-semibold  text-center pt-20">
          Project Details
        </h1>
      </div>
      <div className="px-5 mt-30">
        <p className="text-sm text-center w-70 mx-auto">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>
        {/* content start */}
        <div className="mt-10">
          <Image
            src="/Images/case.png"
            alt="Case Studies image"
            width={1000}
            height={1000}
            className="w-[2000px] mx-auto mb-10"
            priority
          />
          <div className="flex gap-3 mx-2 ">
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
          <div className="mx-2 mt-10">
            <div>
              <h1 className="text-3xl">SaaS Website</h1>
            </div>

            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis
              ad est dolorum mollitia fuga magni accusamus sequi nisi minima
              delectus illo optio enim alias aperiam, totam minus amet eos omnis
              quas eveniet culpa facilis? Dolore architecto labore ex! Animi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis
              ad est dolorum mollitia fuga magni accusamus sequi nisi minima
              delectus illo optio enim alias aperiam, totam minus amet eos omnis
              quas eveniet culpa facilis? Dolore architecto labore ex! Animi.
            </p>

            <div className="mt-4 mx-1">
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm">Analytics & Strategy</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm">UI/UX Design</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm">Branding & Identity</p>
              </div>
              <div className="flex pb-3">
                <Check className="text-custom-cyan w-5 h-5 " />
                <p className="pl-2 text-sm">Web Development</p>
              </div>
            </div>

            <h1 className="text-3xl text-center mt-5">Technologies Used</h1>
            <p className="text-xs mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              repellendus magni eius vel consequuntur consequatur explicabo
              sunt! Natus, cum, dicta aut numquam illo dolor libero rerum error,
              quam consectetur alias.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos repellendus magni eius vel consequuntur
              consequatur explicabo sunt! Natus, cum, dicta aut numquam illo
              dolor libero rerum error, quam consectetur alias
            </p>

            <div className="flex flex-row gap-5 mt-7">
              <p className="text-custom-cyan">Frontend</p>
              <p>Backend</p>
              <p>Vcs</p>
              <p>Hosting/De</p>
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

              <div className="px-3 py-2 border border-gray-600 rounded-xl mt-10">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>

              <div className="px-3 py-2 border border-gray-600 rounded-xl mt-10">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>

              <div className="px-3 py-2 border border-gray-600 rounded-xl mt-10">
                <Image
                  src="/Images/person.jpg"
                  alt="Case Studies image"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                  priority
                />

                <div className="text-center pt-4">
                  <h1 className="text-lg font-semibold">Michael R</h1>
                  <p className="text-sm font-light pt-1">Software Engineer</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl mx-1 mt-7 mb-5">Related Works</h1>
              <Image
                src="/Images/works.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="rounded-sm"
                priority
              />
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-4   px-2  mt-15 rounded-2xl text-center ">
              <h1 className="text-3xl w-72 ">
                Let&apos;s Turn Your
                <span className="[font-family:var(--font-kaushan)] pl-2">
                  Dream
                </span>{" "}
              into 
               <span className="[font-family:var(--font-kaushan)] pl-2">
                  Reality
                </span>{" "}
              </h1>
              <p className="text-center mt-6 text-sm mx-5">
                Pushing the boundaries of what&apos;s possible in the digital
                real. Join us this journey into the future of technology
              </p>
              <div className="bg-custom-cyan w-30  flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10 text-sm">
                {/* Visible only on mobile (<640px) */}
                <button type="button" className="block sm:hidden">
                  Book a call
                </button>

                {/* Visible only on small screens and above (≥640px) */}
                <button type="button" className="hidden sm:block">
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
