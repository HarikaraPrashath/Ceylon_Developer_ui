"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Service do you offer?",
      answer:
        "We offer web design, development, mobile apps, and SEO optimization.",
    },
    {
      question: "Do you offer website redesign service?",
      answer:
        "Yes, we specialize in modern redesigns to improve user experience and SEO.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use React, Node.js, MongoDB, Tailwind CSS, Next.js, and more.",
    },
    {
      question: "Can you build a custom web application?",
      answer:
        "Absolutely! We develop scalable custom apps tailored to your needs.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes, we provide ongoing support, updates, and performance monitoring.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-black dark:text-white "
      style={{
        backgroundImage: "url('/Images/fAqBg.png')",
        backgroundPosition: "right center",
        backgroundSize: "25%",
        backgroundBlendMode: "overlay",
        backgroundColor: "", // light mode background
      }}
    >
      <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center 
      lg:w-[698px] lg:h-[55px] lg:font-[500] lg:text-[48px] lg:leading-[55px] lg:mx-auto
      xl:w-[1222px] xl:h-[70px] xl:text-[72px] xl:leading-[70px] xl:font-[500]
      ">
        How{}
        <span className="[font-family:var(--font-kaushan)] pr-2">
           Ceylon Developers
        </span>{" "}
        help you?
      </h1>

      <div className="w-[354px]  h-[530px] sm:w-[576px] sm:h-[554px] md:w-[643px] md:h-[652px] md:gap-[28px] mx-auto mt-10  
      ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" mt-5 font-[400] text-[20px] leading-[25px] border-[1px] py-[20px] px-[30px] w-[354px] h-[80px] rounded-[30px]
                        sm:w-[576px] sm:h-[78px] sm:rounded-[30px] sm:border-[1px]  sm:py-[25px] sm:px-[35px] sm:gap-[10px]
                        md:w-[643px] md:h-[90px] md:rounded-[30px] md:border-[1px] md:px-[35px] md:py-[30px]
                        lg:w-[898px] lg:h-[92px] lg:rounded-[30px] lg:border-[1px] lg:py-[30px] lg:px-[35px] lg:-ml-30
                        xl:w-[1208px] xl:h-[102px] xl:rounded-[30px] xl:border-[1px] xl:py-[30px] xl:px-[35px] xl:gap-[10px] xl:-ml-60
                       bg-gray-100 dark:bg-transparent 
                       border-gray-300  dark:border-green-950 
                       transition-colors duration-300"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer w-[294px]   -mt-2 
              sm:w-[506px] sm:h-[28px] sm:gap-[148px] 
              lg:w-[828px] lg:h-[32px] lg:gap-[148px] 
              xl:w-[1138px] xl:h-[42px] xl:gap-[148px]
              "
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h1 className="font-[400] text-[20px] leading-[25px]  text-gray-900 dark:text-white w-[230px] h-[50px]
              sm:w-[338px] sm:h-[56px] sm:font-[400] sm:text-[22px] sm:leading-[28px]  sm:mt-2 
              md:w-[576px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px]
              lg:w-[650px] lg:h[32px] lg:text-[26px] lg:leading-[32px] 
              xl:w-[948px] xl:h-[36px] xl:text-[30px] xl:leading-[36px]
              ">
                {faq.question}
              </h1>
              {openIndex === index ? (
                <Minus className="text-gray-900 dark:text-white w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]
                xl:w-[42px] xl:h-[42px]
                " />
              ) : (
                <Plus className="text-gray-900 dark:text-white" />
              )}
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-gray-700 dark:text-gray-400 mt-2 transition-colors duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
