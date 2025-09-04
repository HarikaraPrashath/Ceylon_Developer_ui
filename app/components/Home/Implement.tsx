"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";


const Implement = () => {
    const items = ["Design", "Develop", "Delivery"]
    const [index, setIndex] = useState(0)



    const nextItem = () => {
        setIndex((prev) => (prev + 1) % items.length)
    }

    const prevItem = () => {
        setIndex((prev) => (prev - 1 + items.length) % items.length)
    }




    return (
        <div className='flex  items-center justify-between mt-20 mb-20  mx-30 '>
            <div className='flex flex-col justify-between  w-[35%] '>
                <div className='flex '>
                    <div className=''><h1 className="[font-family:var(--font-kaushan)] pl-10 text-6xl text-center mt-12 px-3">We</h1></div>
                    <div className="flex items-center justify-center space-x-6 text-5xl font-bold">
                        {/* Left Arrow */}
                        <button type="button" onClick={prevItem} className="text-white hover:text-cyan-400">
                            <ChevronLeft size={40} />
                        </button>

                        {/* Items */}
                        <div className="flex flex-col items-center space-y-2">
                            {items.map((item, i) => (
                                <h1
                                    key={i}
                                    className={`transition-colors duration-300 ${i === index ? "text-cyan-400" : "text-gray-500"
                                        }`}
                                >
                                    {item}
                                </h1>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button type="button" onClick={nextItem} className="text-white hover:text-cyan-400">
                            <ChevronRight size={40} />
                        </button>
                    </div>
                </div>
                <p className='pl-10 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, qui, porro molestiae soluta illum similique, et totam ad aut iure esse quaerat id quis!</p>

            </div>

            {/* Consulting container */}
            <div className="relative w-[20%] h-80 rounded-sm border-gradient-bottom p-[1px] bg-gradient-to-b from-gray-700 to-black/10">
                <div className="h-full w-full rounded-sm">
                    <h1 className="text-center font-medium mt-4">Consulting</h1>
                    <p className="text-center mt-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium maiores
                        odio aspernatur reiciendis doloremque repellendus consequatur veritatis iste
                        laboriosam eveniet,
                    </p>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4"
                    >
                        <p>Get Start</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


            {/* Implementation container */}
            <div className="relative w-[20%] h-80 rounded-sm border-gradient-top p-[1px] bg-gradient-to-b from-gray-700 to-black/10">
                <div className="h-full w-full rounded-sm">
                    <h1 className="text-center font-medium mt-4">Implementation</h1>
                    <p className="text-center mt-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium maiores
                        odio aspernatur reiciendis doloremque repellendus consequatur veritatis iste
                        laboriosam eveniet,
                    </p>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4"
                    >
                        <p>Get Start</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


            {/* Distribution container */}
            <div className="relative w-[20%] h-80 rounded-sm border-gradient-bottom p-[1px] bg-gradient-to-b from-gray-700 to-black/10">
                <div className="h-full w-full rounded-sm">
                    <h1 className="text-center font-medium mt-4">Distribution</h1>
                    <p className="text-center mt-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium maiores
                        odio aspernatur reiciendis doloremque repellendus consequatur veritatis iste
                        laboriosam eveniet,
                    </p>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4"
                    >
                        <p>Get Start</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>





        </div>
    )
}

export default Implement
