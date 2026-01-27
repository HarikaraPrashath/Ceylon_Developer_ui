"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HERO_TEXTS } from "../../../constants/home.constants.ts";

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faqs } = HERO_TEXTS;

  return (
    <section
      className="pt-10 md:pt-32 lg:pt-36 xl:pt-60 text-black dark:text-white bg-no-repeat bg-right"
      style={{
        backgroundImage: "url('/Images/fAqBg.png')",
        backgroundSize: "25%",
      }}
    >
      {/* Title */}
      <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl w-[350px] text-center lg:w-[698px] lg:h-[55px] 
      sm:w-[533px] mx-auto  lg:font-[500] lg:text-[48px] lg:leading-[55px] lg:mx-auto xl:w-[1222px] xl:h-[70px] xl:text-[72px] xl:leading-[70px] xl:font-[500] ">
        How{" "}
        <span className="[font-family:var(--font-kaushan)]">
          Ceylon Developers
        </span>{" "}
        help you?
      </h1>

      {/* FAQ Wrapper */}
      <div className="mt-14 flex flex-col items-center space-y-5 ">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-4xl md:rounded-3xl border-2  transition-all duration-300 sm:w-[620px] mx-auto lg:w-[898px] xl:w-[1170px] 2xl:w-[1108px]
                ${
                  isOpen
                    ? "bg-gray-50 dark:bg-neutral-900 border-gray-400 dark:border-green-900 "
                    : "bg-gray-100 dark:bg-transparent border-gray-300 dark:border-green-950"
                }
              `}
            >
              {/* Question */}
              <button type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 sm:px-8 py-5 text-left "
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-normal leading-snug  sm:w-[300px] lg:w-[650px]  xl:w-[900px] 2xl:w-[800px] ">
                  {faq.question}
                </h3>

                <span className="ml-4 flex-shrink-0 transition-transform duration-300">
                  {isOpen ? (
                    <Minus className="w-6 h-6 lg:w-7 lg:h-7" />
                  ) : (
                    <Plus className="w-6 h-6 lg:w-7 lg:h-7" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 sm:px-8 pb-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Help;
