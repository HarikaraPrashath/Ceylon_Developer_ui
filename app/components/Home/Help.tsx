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
      className="relative bg-cover bg-center bg-no-repeat text-black dark:text-white"
      style={{
        backgroundImage: "url('/Images/fAqBg.png')",
        backgroundPosition: "right center",
        backgroundSize: "25%",
        backgroundBlendMode: "overlay",
        backgroundColor: "", // light mode background
      }}
    >
      <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-center max-[376px]:mt-5 2xl:mt-20 mx-2 ">
        How
        <span className="[font-family:var(--font-kaushan)] pr-2">
          Ceylon Developers
        </span>{" "}
        help you?
      </h1>

      <div className="space-y-4 mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mx-5 sm:mx-10 md:mx-15 lg:mx-48 rounded-xl p-3 border-2 text-sm sm:text-lg 
                       bg-gray-100 dark:bg-transparent 
                       border-gray-300  dark:border-green-950 
                       transition-colors duration-300"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h1 className="font-medium text-gray-900 dark:text-white max-[376px]:w-60">
                {faq.question}
              </h1>
              {openIndex === index ? (
                <Minus className="text-gray-900 dark:text-white" />
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
