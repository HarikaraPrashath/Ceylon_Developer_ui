"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight, FileSliders, CircleCheck, ChartNoAxesCombined, Check } from "lucide-react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="max-w-[1440px] mx-auto  bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="head-banner-layout"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundPosition: "bottom,bottom,center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 100%",
            height: "100px",
          }}
        >
          <Navbar />
          <h1 className="title text-white h1 sm:h1-sm md:h1-md lg:h1-lg xl:h1-xl 2xl:h1-2xl">Project Details</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100px",
          }}
        >
          <Navbar />
          <h1 className="title text-black text-[40px] h1 sm:h1-sm md:h1-md lg:h1-lg xl:h1-xl 2xl:h1-2xl">Project Details</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="px-3 mt-20 xl:mt-20">
        <p className="text-center body  xl:w-120 sm:body-sm  md:body-md lg:body-lg xl:body-xl 2xl:body-2xl mx-auto sm:pt-6 md:pt-20 md:w-83 lg:w-130 lg:text-lg text-gray-700 dark:text-gray-300 sm:w-100">
          Pushing the boundaries of what&apos;s possible in the digital realm. Join us on this journey into the future of technology.
        </p>

        {/* Main content */}
        <div className="mt-10 lg:mt-20 text-gray-800 dark:text-gray-200">
          <Image
            src="/Images/case.png"
            alt="Case Studies image"
            width={1000}
            height={1000}
            className="w-[2000px] mx-auto mb-10 lg:w-200"
            priority
          />

          {/* Info Icons */}
          <div className="flex gap-3 mx-2 sm:mx-10 sm:gap-10 lg:ml-30 xl:ml-56">
            <div className="flex gap-1">
              <FileSliders /> <p>Platform <span className="text-sm">Web</span></p>
            </div>
            <div className="flex gap-1">
              <CircleCheck /> <p>Service <span className="text-sm">Frontend & Backend</span></p>
            </div>
            <div className="flex gap-1">
              <ChartNoAxesCombined /> <p>Industry <span className="text-sm">Technology</span></p>
            </div>
          </div>

          {/* Description */}
          <div className="mx-2 mt-10 sm:mx-10 lg:mx-30 xl:mx-60">
            <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl">SaaS Website</h1>

            <p className="body sm:body-sm md:body-md lg:body-lg xl:body-xl 2xl:body-2xl mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis ad est dolorum mollitia fuga magni accusamus sequi nisi minima delectus illo optio enim alias aperiam, totam minus amet eos omnis quas eveniet culpa facilis? Dolore architecto labore ex! Animi.
            </p>

            {/* Secondary Image */}
            <div className="hidden sm:block">
              <Image
                src="/Images/case.png"
                alt="Case Studies image"
                width={1000}
                height={1000}
                className="w-[350px] mx-auto mb-10 sm:my-7 sm:flex sm:flex-col sm:mr-40 md:ml-1"
                priority
              />
              <p className="body sm:body-sm md:body-md lg:body-lg xl:body-xl 2xl:body-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis ad est dolorum mollitia fuga magni accusamus sequi nisi minima delectus illo optio enim alias aperiam.
              </p>
            </div>

            {/* Services List */}
            <div className="mt-4 mx-1">
              {["Analytics & Strategy", "UI/UX Design", "Branding & Identity", "Web Development"].map((item) => (
                <div key={item} className="flex pb-3">
                  <Check className="text-custom-cyan w-5 h-5" />
                  <p className="pl-2 text-sm lg:text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <h1 className="text-center mt-9 h2 sm:h2-sm md:h2-md xl:h2-xl 2xl:h2-2xl">Technologies Used</h1>
            <p className="body sm:body-sm md:body-md lg:body-lg-lg xl:body-lg-xl 2xl:body-lg-2xl mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus magni eius vel consequuntur consequatur explicabo sunt! Natus, cum, dicta aut numquam illo dolor libero rerum error, quam consectetur alias.
            </p>

            <div className="flex flex-row gap-5 mt-7">
              <p className="text-custom-cyan lg:text-sm">Frontend</p>
              <p className="lg:text-sm">Backend</p>
              <p className="lg:text-sm">VCS</p>
              <p className="lg:text-sm">Hosting/DevOps</p>
            </div>

            <div className="flex flex-row gap-5 mt-5">
              <div className="border px-6 py-1 rounded-sm border-gray-600">
                <FaReact className="w-7 h-7 text-custom-cyan" />
              </div>
              <div className="border px-6 py-1 rounded-sm border-gray-600">
                <FaJsSquare className="w-7 h-7 text-yellow-400" />
              </div>
            </div>

            {/* Team Section */}
            <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl mx-1 mt-7 ">Team Members Involved</h1>
            <div className="md:flex md:flex-row md:gap-10">
              {[1, 2].map((n) => (
                <div key={n} className="md:block sm:hidden px-3 py-2 border border-gray-600 rounded-xl mt-10">
                  <Image
                    src="/Images/person.jpg"
                    alt="Team Member"
                    width={1000}
                    height={1000}
                    className="rounded-xl lg:w-160 xl:w-90"
                    priority
                  />
                  <div className="text-center pt-4">
                    <h1 className="body-lg sm:body-lg-sm md:body-lg-md  lg:body-lg-lg xl:body-lg-xl 2xl:body-lg-2xl font-semibold">Michael R</h1>
                    <p className="body sm:body-sm md:body-md  lg:body-lg xl:body-xl 2xl:body-2xl font-light pt-1">Software Engineer</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Works */}
            <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl mx-1 mt-14 mb-5">Related Works</h1>
            <div className="md:flex md:flex-row md:gap-20 lg:justify-around xl:justify-start xl:gap-10">
              <Image
                src="/Images/works.png"
                alt="Work 1"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80 mb-5"
                priority
              />
              <Image
                src="/Images/works2.png"
                alt="Work 2"
                width={1000}
                height={1000}
                className="rounded-sm sm:w-80 md:mt-20"
                priority
              />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-950 py-4 px-2 mt-15 rounded-2xl text-center transition-colors duration-300">
              <h1 className="h2 sm:h2-sm md:h2-md  lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center">
                <span className="block">
                  Let&apos;s Turn Your
                </span>

                <span className="block">
                  <span className="[font-family:var(--font-kaushan)] px-2">
                    Dream
                  </span>
                  into
                  <span className="[font-family:var(--font-kaushan)] px-2">
                    Reality
                  </span>
                </span>
              </h1>

              <p className="text-center body sm:body-sm md:body-md lg:body-lg xl:body-xl 2xl:body-xl mt-6 lg:w-130 mx-5 sm:w-80 sm:mx-auto text-gray-700 dark:text-gray-300">
                Pushing the boundaries of what&apos;s possible in the digital realm.
                Join us on this journey into the future of technology.
              </p>
              <div className="bg-custom-cyan w-30 flex flex-row mx-auto py-2 rounded-xl text-black gap-2 justify-center mt-8 mb-10 text-sm">
                <button type="button" className="block sm:hidden">Book a call</button>
                <button type="button" className="hidden sm:block">Get Start</button>
                <ArrowUpRight className="sm:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
