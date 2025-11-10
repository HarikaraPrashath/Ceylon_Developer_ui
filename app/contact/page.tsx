"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Mail, Phone, Building2 } from "lucide-react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // wait until client to know actual theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // avoid hydration mismatch + double flash
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-bottom"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom,bottom,center",
            backgroundSize: "cover,100%",
          }}
        >
          <Navbar />
          <h1 className="title text-white dark:text-gray-100">Contact Us</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-center bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className="title text-black">Contact Us</h1>
        </div>
      )}

      {/* BODY */}
      <div className="sub-title-div">
        <p className="paragraphy-push text-gray-700 dark:text-gray-300">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology
        </p>

        {/* main content */}
        <div className="mt-10 mx-1 sm:mx-[1rem] md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px]">
          <h1 className="text-center text-2xl sm:text-[1.8rem]">
            We&apos;re Here to
            <span className="[font-family:var(--font-kaushan)] pr-2">Help</span>
          </h1>
          <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
            Our team is ready to support you with expert advice & solutions.
          </p>

          {/* Form */}
          <div className="rounded-2xl border p-5 border-gray-300 dark:border-gray-700 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 mt-10 sm:mx-[0.2rem] xl:p-[4rem] transition-colors duration-300">
            <form>
              <div>
                <div className="md:flex md:flex-row md:justify-between">
                  {/* name */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Name *</label>
                    <input
                      type="text"
                      placeholder="David Johanson"
                      className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Email *</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col mb-4">
                  <label className="py-1">Company Name *</label>
                  <input
                    type="text"
                    placeholder="Ex: StaticMania"
                    className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="md:flex md:flex-row md:justify-between">
                  {/* Select Service */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Select Service *</label>
                    <select className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm dark:text-gray-200">
                      <option
                        value=""
                        disabled
                        selected
                        className="text-gray-400"
                      >
                        Select a Service
                      </option>
                      <option value="haircut" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Haircut
                      </option>
                      <option value="facial" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Facial
                      </option>
                      <option value="massage" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Massage
                      </option>
                      <option value="manicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Manicure
                      </option>
                      <option value="pedicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Pedicure
                      </option>
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div className="flex flex-col mb-4 md:w-[48%]">
                    <label className="py-1">Project Budget *</label>
                    <select className="pb-1 bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none text-sm dark:text-gray-200">
                      <option
                        value=""
                        disabled
                        selected
                        className="text-gray-400"
                      >
                        Select a Service
                      </option>
                      <option value="haircut" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Haircut
                      </option>
                      <option value="facial" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Facial
                      </option>
                      <option value="massage" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Massage
                      </option>
                      <option value="manicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Manicure
                      </option>
                      <option value="pedicure" className="bg-white dark:bg-gray-800 dark:text-gray-100">
                        Pedicure
                      </option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col mb-4">
                  <label className="py-1">Project Details *</label>
                  <input
                    type="text"
                    placeholder="Tell us more about your project"
                    className="pb-1 text-sm bg-transparent border-b border-gray-400 dark:border-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:flex sm:flex-row sm:justify-between">
                <div className="bg-custom-cyan text-black w-30 text-center mx-auto m-5 sm:m-[0.6rem] rounded-lg py-1 font-semibold">
                  <button type="button" className="sm:text-sm">
                    Get Started
                  </button>
                </div>
                <p className="mt-5 text-center text-xs text-gray-600 dark:text-gray-400">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>

          {/* contact info */}
          <div className="sm:flex sm:flex-row sm:justify-between">
            {[
              {
                icon: <Mail size={20} />,
                title: "Email",
                lines: ["customer@gmail.com", "client@automx.com"],
              },
              {
                icon: <Phone size={20} />,
                title: "Phone",
                lines: ["+94 71 5672 890", "+94 71 5672 890"],
              },
              {
                icon: <Building2 size={20} />,
                title: "Head Office",
                lines: ["5899 Alexys Highway Suite", "678, NR, Nevada, USA"],
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center mt-10">
                <div className="h-15 w-15 border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-950 mx-auto rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">
                  {item.icon}
                </div>
                <div className="text-xs mt-2">
                  <h1 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h1>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* bottom banner */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-950 py-2 pt-5 px-4 mx-3 mt-15 rounded-2xl sm:w-100 sm:mx-auto lg:w-160 xl:w-190 transition-colors duration-300">
            <h1 className="text-center text-2xl lg:text-3xl">
              Let&apos;s Turn Your
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Dream
              </span>{" "}
              into
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Reality
              </span>{" "}
            </h1>
            <p className="text-center mt-6 w-59 text-xs sm:mx-auto sm:w-70 text-gray-700 dark:text-gray-300">
              Pushing the boundaries of what&apos;s possible in the digital
              real. Join us this journey into the future of technology
            </p>
            <div className="bg-custom-cyan text-black w-30 text-center mx-auto m-5 rounded-sm py-1 font-semibold">
              <button type="button" className="sm:text-sm">
                Booking us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
