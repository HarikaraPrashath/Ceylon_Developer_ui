"use client"
import React from 'react'
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Help = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "What Service do you offer?",
            answer: "We offer web design, development, mobile apps, and SEO optimization.",
        },
        {
            question: "Do you offer website redesign service?",
            answer: "Yes, we specialize in modern redesigns to improve user experience and SEO.",
        },
        {
            question: "What technologies do you use?",
            answer: "We use React, Node.js, MongoDB, Tailwind CSS, Next.js, and more.",
        },
        {
            question: "Can you build a custom web application?",
            answer: "Absolutely! We develop scalable custom apps tailored to your needs.",
        },
        {
            question: "Do you offer maintenance and support?",
            answer: "Yes, we provide ongoing support, updates, and performance monitoring.",
        },
    ];
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Images/fAqBg.png')", backgroundPosition: "right center", backgroundSize: "40%", backgroundBlendMode: "overlay", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
            <h1 className="max-[376px]:text-4xl text-center max-[376px]:mt-5 sm:text-4xl md:text-5xl 2xl:text-6xl 2xl:mt-20 ">
                How
                <span className="[font-family:var(--font-kaushan)] pr-2">Ceylon Developers</span> help you?
            </h1>

            <div className="space-y-4 mt-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-transparent mx-2 rounded-xl p-3 sm:mx-4 2xl:text-4xl 2xl:mx-80 sm:text-2xl max-[376px]:text-xl max-[376px]:mx-3 border-2 border-green-950"
                    >
                        {/* Question */}
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h1 className="font-medium text-white max-[376px]:w-60">{faq.question}</h1>
                            {openIndex === index ? (
                                <Minus className="text-white" />
                            ) : (
                                <Plus className="text-white" />
                            )}
                        </div>

                        {/* Answer */}
                        {openIndex === index && (
                            <p className="text-gray-400 mt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Help
