  "use client";
  import React, { useState } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  import { HERO_TEXTS } from "../../../constants/home.constants.ts";

  const Implement = () => {
     const { cards } = HERO_TEXTS;
    const items = ["Design", "Develop", "Delivery"];
    const [index, setIndex] = useState(0);

    const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
    const prevItem = () =>
      setIndex((prev) => (prev - 1 + items.length) % items.length);

  

    const Card = ({
      title,
      borderClass,
      body,
    }: {
      title: string;
      borderClass: string;
      body: string;
    }) => (
      // mobile view
      <div
        className={`
          ml-7
          relative rounded-[4px] ${borderClass}
          dark:bg-gradient-to-b from-gray-700 to-black/80 b w-[311px] h-[235px] py-[25px] px-[45px] mb-20
          sm:w-[473px] sm:h-[241px] sm:rounded-[4px] sm:border-[1px] sm:px-[70px] sm:py-[40px] sm:mx-auto
          md:w-[199px] md:h-[305px] md:rounded-[4px] md:border-[1px] md:py-[35px] md:px-[22px] 
        `}
      >
        <div className="">
          <h1 className="text-center mx-auto w-[97px] h-[25px] font-[700] text-[18px] leading-[25px] dark:text-white text-black
          md:w-[155px] md:h-[24px] md:font-[700] md:text-[20px] md:leading-[24px]
          ">
            {title}
          </h1>
          <p className="text-center text-[14px] font-[400] leading-[25px]
          md:w-[155px] md:h-[154px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-5
          ">
            {body}
          </p>
          <button
            type="button"
            className="flex items-center mt-5 justify-center  font-[600] text-[18px] leading-[25px] text-custom-cyan mx-auto
            md:font-[600] md:text-[16px] md:leading-[22px]
            "
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
    );

    return (
      <div className="flex flex-col gap-10  ">
        <div className="flex items-center justify-between gap-6 px-6  ">
          <div className="flex flex-col justify-between w-full lg:w-[35%] md:mx-auto">
            {/* Small We (mobile only) */}
            <div className="block sm:hidden text-center ">
              <h1 className="[font-family:var(--font-kaushan)] text-[36px] font-[400]  leading-[35px] mb-2 ">
              we
              </h1>
            </div>

            <div className="flex items-center justify-center ">
              {/* Big We (tablet & desktop only) */}
              <div className="hidden sm:block w-10">
                <h1 className="[font-family:var(--font-kaushan)] 
                sm:w-[48px] sm:h-[48px] sm:text-[36px] sm:ml-20 sm:-mt-3
                md:w-[53px] md:h-[50px] md:text-[40px] md:leading-[50px] md:ml-35 md:-mt-1 text-center mt-12 
                lg:w-[63px] lg:h-[55px] lg:text-[48px] lg:leading-[55px] 
                xl:w-[66px] xl:h-[70px] xl:font-[400] xl:text-[50px] xl:leading-[70px] xl:ml-55 xl:-mt-20 
                ">
                  We
                </h1>
              </div>

              {/* Flex row with arrows + items */}
              <div className="flex items-center justify-center space-x-6 text-5xl font-bold w-90% sm:flex sm:gap-4 sm:w-full   lg:ml-170 
              xl:w-[250px] xl:h-[140px] xl:ml-70   xl:-mt-20   
              ">
                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={prevItem}
                  className="text-sky-100"
                >
                  <ChevronLeft size={52} />
                </button>

                {/* Items */}
                <div className="flex flex-col items-center space-y-2 xl:-mx-5">
                  {items.map((item, i) => (
                    <h1
                      key={i}
                      className={`transition-colors duration-300 text-[36px] leading-[35px] font-[600]
                        md:text-[40px] md:font-[600] md:w-[158px] md:h-[50px] md:leading-[50px]
                        lg:text-[48px] lg:leading-[55px] lg:font-[600]
                        xl:text-center xl:w-[198px] xl:font-[600] xl:text-[50px] xl:leading-[60px]  xl:
                        ${i === index ? "text-cyan-400" : "text-gray-500"
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
                  className="text-sky-100"
                >
                  <ChevronRight size={52} />
                </button>
              </div>
            </div>

            <p className="mt-8 w-[298px] h-[60px] text-center text-[14px] leading-[20px] font-[400] mx-auto 
            md:w-[550px] md:h-[44px]
            lg:font-[400] lg:text-[18px] lg:leading-[25px]  lg:ml-40
            xl:w-[300px] xl:ml-50 xl:h-[120px] xl:text-[22px] xl:leading-[30px] xl:text-start 
            2xl:w-[392px] 2xl:h-[120px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:text-star 
            ">
            {HERO_TEXTS.implmentSubText}
            </p>
          </div>

          {/* ≥1024px: 3 cards in a row */}
          <div className="xl:block hidden xl:mx-10 xl:grid xl:grid-cols-3 xl:gap-10 ">
            {cards.map((c, i) => (
              <Card key={`lg-${i}`} {...c} />
            ))}
          </div>
        </div>
        {/* ≥768 and <1024: 3 cards in one horizontal row (as requested) */}
        <div className="xl:hidden md:grid grid-cols-3 lg:mx-20 mx-auto hidden md:gap-[25px] md:mx-auto">
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
        {/* <div className=" max-[376px]:block hidden">
          {cards.map((c, i) => (
            <div key={`xs-${i}`} className="w-[89%]">
              <Card {...c} />
            </div>
          ))}
        </div> */}
      </div>
    );
  };

  /** 376–767px carousel helper (kept same behavior) */
  function MobileCarousel({
    visible,
    cards,
    index,
  }: {
    visible: boolean;
    cards: { title: string; borderClass: string; body: string }[];
    index: number;
    onPrev: () => void;
    onNext: () => void;
  }) {
    if (!visible) return null;
    return (
      <div className="hidden sm:block md:hidden  px-6 sm:mb-10">
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
                      dark:bg-gradient-to-b from-gray-700 to-black/10 w-full h-80 
                      sm:w-[473px] sm:h-[241px] sm:mx-auto border sm:text-center
                      md:w-[199px] md:h-[305px] md:rounded-[4px] md:border-[1px] md:py-[35px] md:px-[22px]
                      lg:w-[261px] lg:h-[304px] lg:rounded-[4px] 
                      xl:w-[275px] xl:h-[383px] xl:rounded-[4px] xl:px-[27px] xl:py-[40px]
                      2xl:w-[275px] 2xl:h-[383px] 2xl:rounded-[4px] 2xl:px-[27px] 2xl:py-[40px] 
                    `}
                  >
                    <div className="h-full w-full rounded-sm ">
                      <h1 className="text-center font-medium mt-4 dark:text-white text-black 
                      sm:font-[700] sm:text-[20px] sm:leading-[24px] sm:w-[155px] sm:h-[24px] sm:mx-auto
                      md:font-[700] md:text-[20px] md:leading-[24px] 
                      lg:font-[700] lg:text-[22px] lg:leading-[26px] 
                      xl:w-[221px] xl:h-[30px] xl:font-[700] xl:text-[26px] xl:leading-[30px]
                      2xl:w-[221px] 2xl:h-[30px] 2xl:font-[700] 2xl:text-[26px] 2xl:leading-[30px]
                      ">
                        {cards[index].title}
                      </h1>
                      <p className="text-center mt-5 px-4 
                      sm:w-[333px] sm:h-[80px] sm:font-[400] sm:text-[15px] sm:leading-[20px] sm:mx-auto  
                       md:font-[400] md:text-[16px] md:leading-[22px] 
                       lg:text-[18px] lg:leading-[25px] 
                       xl:w-[221px] xl:h-[210px] xl:text-[22px] xl:leading-[30px]
                      ">{cards[index].body}</p>
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 text-custom-cyan mx-auto mt-4"
                      >
                        <p className="sm:font-[600] sm:w-[85px] sm:h-[20px] sm:leading-[20px]">Get Started</p>
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
    );
  }

  export default Implement;
