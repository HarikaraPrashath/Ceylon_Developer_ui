"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

const Implement = () => {
    const items = ["Design", "Develop", "Delivery"]
    const [index, setIndex] = useState(0)

    const nextItem = () => setIndex((prev) => (prev + 1) % items.length)
    const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

    const cards = [
        {
            title: "Consulting",
            borderClass: "border-gradient-bottom",
            body:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        },
        {
            title: "Implementation",
            borderClass: "border-gradient-top",
            body:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        },
        {
            title: "Distribution",
            borderClass: "border-gradient-bottom",
            body:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        },
    ]

    const Card = ({ title, borderClass, body }: { title: string; borderClass: string; body: string }) => (
        <div
            className={`
        relative rounded-sm ${borderClass} p-[1px]
        bg-gradient-to-b from-gray-700 to-black/10 w-full h-80

        /* ≤376px: stacked style */
        max-[376px]:h-auto max-[376px]:rounded-xl
        max-[376px]:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
        max-[376px]:bg-gradient-to-br max-[376px]:from-[#2b2b2b] max-[376px]:to-[#111111]
      `}
        >
            <div className="h-full w-full rounded-sm max-[376px]:rounded-xl max-[376px]:py-6">
                <h1 className="text-center font-medium mt-4 max-[376px]:mt-0 max-[376px]:text-white max-[376px]:font-semibold">
                    {title}
                </h1>
                <p className="text-center mt-5 px-4 xs:mt-3 max-[376px]:text-gray-300 max-[376px]:text-sm max-[376px]:leading-6">
                    {body}
                </p>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4 max-[376px]:mt-5 max-[376px]:font-semibold"
                >
                    <p>Get Started</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )


    return (
        <div className="flex flex-col gap-10 mt-20 mb-20">
            <div className="flex items-center justify-between gap-6 px-6">
                <div className="flex flex-col justify-between w-full lg:w-[35%]">
                    {/* Small We (mobile only) */}
                    <div className="block sm:hidden text-center ">
                        <h1 className="[font-family:var(--font-kaushan)] text-5xl mb-2">
                            We
                        </h1>
                    </div>

                    <div className="flex items-center justify-center">
                        {/* Big We (tablet & desktop only) */}
                        <div className="hidden sm:block">
                            <h1 className="[font-family:var(--font-kaushan)] ml-20 mb-15  text-6xl text-center mt-12 px-3">
                                We
                            </h1>
                        </div>

                        {/* Flex row with arrows + items */}
                        <div className="flex items-center justify-center space-x-4 text-5xl font-bold w-90% sm:flex sm:gap-4 sm:w-full">
                            {/* Left Arrow */}
                            <button
                                type="button"
                                onClick={prevItem}
                                className="text-white hover:text-cyan-400"
                            >
                                <ChevronLeft size={32} />
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
                            <button
                                type="button"
                                onClick={nextItem}
                                className="text-white hover:text-cyan-400"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>
                    </div>

                    <p className="pl-10 mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, qui,
                        porro molestiae soluta illum similique, et totam ad aut iure esse quaerat id
                        quis!
                    </p>
                </div>

                {/* ≥1024px: 3 cards in a row */}
                <div className="hidden lg:grid grid-cols-3 gap-6 w-[60%]">
                    {cards.map((c, i) => (
                        <Card key={`lg-${i}`} {...c} />
                    ))}
                </div>

            </div>
            {/* ≥768 and <1024: 3 cards in one horizontal row (as requested) */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 px-6">
                {cards.map((c, i) => (
                    <Card key={`md-${i}`} {...c} />
                ))}
            </div>
            {/* 376–767px: carousel (unchanged) */}
            <MobileCarousel
                visible={true}
                cards={cards}
                index={index}
                onPrev={prevItem}
                onNext={nextItem}
            />
            {/* ≤376px: show all 3 stacked vertically */}
            <div className="hidden max-[376px]:flex flex-col items-center gap-7 px-4 ">
                {cards.map((c, i) => (
                    <div key={`xs-${i}`} className="w-[89%]">
                        <Card {...c} />
                    </div>
                ))}
            </div>

        </div>
    )
}

/** 376–767px carousel helper (kept same behavior) */
function MobileCarousel({
    visible,
    cards,
    index,

}: {
    visible: boolean
    cards: { title: string; borderClass: string; body: string }[]
    index: number
    onPrev: () => void
    onNext: () => void
}) {
    if (!visible) return null
    return (
        <div className="block md:hidden md:h-[100px] max-[376px]:hidden px-6 ">
            <div className="w-full">
                <div className="">
                    <div className="">
                        {/* current card */}
                        <div>
                            <div className="">
                                {/* reuse Card inline to avoid prop drilling refactor */}
                                <div
                                    className={`
                    relative rounded-sm ${cards[index].borderClass} p-[1px]
                    bg-gradient-to-b from-gray-700 to-black/10 w-full h-80 md:h-10 sm:h-[200px] sm:w-[80%] sm:mx-auto
                  `}
                                >
                                    <div className="h-full w-full rounded-sm ">
                                        <h1 className="text-center font-medium mt-4">{cards[index].title}</h1>
                                        <p className="text-center mt-5 px-4">{cards[index].body}</p>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4"
                                        >
                                            <p>Get Started</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Implement
