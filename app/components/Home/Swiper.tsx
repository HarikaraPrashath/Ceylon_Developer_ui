"use client";

import { useState, useEffect } from "react";

const services = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a4 4 0 002 2z"
        />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-8 h-8 text-custom-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data Analytics",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function ServicesSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleRange, setVisibleRange] = useState(1);
  const [isSmScreen, setIsSmScreen] = useState(false);

  const extendedServices = [...services, ...services, ...services];
  const totalItems = services.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => prev + 1),
      3000
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      setTimeout(() => setCurrentIndex(totalItems), 500);
    }
  }, [currentIndex, totalItems]);

  useEffect(() => {
    const updateVisibleRange = () => {
      const width = window.innerWidth;
      if (width < 641) {
        setVisibleRange(0);
      } else if (width < 1024) {
        setVisibleRange(1);
      } else {
        setVisibleRange(2);
      }
        setIsSmScreen(width < 768); 
    };

    updateVisibleRange();
    window.addEventListener("resize", updateVisibleRange);
    return () => window.removeEventListener("resize", updateVisibleRange);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(totalItems + index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="-pt0 px-2 sm:px-2 bg-white dark:bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-custom-cyan rounded-lg rotate-12"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-custom-cyan rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-custom-cyan rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 border border-custom-cyan rounded-lg -rotate-6"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 border border-custom-cyan rounded-lg rotate-[30deg]"></div>
      </div>

      <div className="mx-auto relative w-full max-w-[1440px] -mt-10 lg:mt-80 2xl:-mt-60">
        <div className="text-center">
          {" "}
          <h1 className=" h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl 
          text-center lg:-mt-100  max-[640px]:flex max-[640px]:flex-col 
           
          ">
            <span className="[font-family:var(--font-kaushan)] px-4 text-gray-900 dark:text-gray-100">
              Services
            </span>
            <span className="text-gray-900 dark:text-gray-100">We offer</span>
          </h1>
          <p className="mt-6 xl:w-119 text-[14px] mx-auto lg:w-150 md:w-127 sm:w-115 max-[640px]:w-70 text-gray-700 dark:text-gray-300 body sm:body-sm md:body-md lg:body-lg xl:body-xl 2xl:body-2xl
         
          ">
            Pushing the boundaries of what&apos;s possible in the digital realm{" "}
            Join us on this journey into the future of technology
          </p>
        </div>

        <div
          className="relative h-96 flex items-center justify-center -mt-20 sm:mt-5"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full h-full flex items-center justify-center ">
            <div
              className="relative w-full h-full transition-transform duration-500 ease-out "
              style={{ transformStyle: "preserve-3d" }}
            >
              {extendedServices.map((service, index) => {
                const position = index - currentIndex;
                const isVisible = Math.abs(position) <= visibleRange;
                if (!isVisible) return null;

                const isCenter = position === 0;

                const rotateY = position * 35;
                const translateZ = isCenter ? 55 : 0;

          

                const translateX = position * (isSmScreen ? 500 : 300);

                const scale = isCenter ? 1 : 0.8;
                const opacity = isCenter
                  ? 1
                  : Math.abs(position) === 1
                    ? 0.7
                    : 0.4;

                const offsetY =
                  position === 0 ? 90 : Math.abs(position) === 1 ? 30 : 10;

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className="
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      h-80 transition-all duration-500 ease-out
                      w-[calc(100%-1rem)] sm:w-[calc(100%-1rem)] 
                    "
                    style={{
                      transform: `translateX(${translateX}px) translateY(${offsetY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: isCenter ? 10 : 5 - Math.abs(position),
                    }}
                  >
                    <div
                      className="
                        w-[333px] h-[223px] p-6
                        sm:w-[523px] sm:h-[208px] sm:px-[20px] sm:py-[25px] sm:mx-auto sm:-mt-25
                        md:w-[307px] md:h-[260px]
                        lg:w-[307px] lg:h-[306px]
                        xl:w-[331] xl:h-[333px]
                        2xl:w-[333] 2xl:h-[379px]
                        bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm
                        border border-custom-cyan/30 dark:border-custom-cyan/60
                        md:border-custom-cyan/30 dark:md:border-custom-cyan/60
                        lg:border-custom-cyan/20 dark:lg:border-custom-cyan/40
                        rounded-2xl flex flex-col
                        hover:bg-white/80 dark:hover:bg-gray-900/70
                        hover:border-custom-cyan/60
                        transition-all duration-300 group cursor-pointer
                      "
                    >
                      <div className="mb-4 w-[35px] h-[35px] group-hover:scale-110 transition-transform duration-300 md:w-[35px] md:h-[35px]
                      lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]
                      2xl:w-[40px] 2xl:h-[40px]
                      ">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] font-[600] leading-[25px] text-custom-cyan-400 mb-3 group-hover:text-custom-cyan transition-colors duration-300
                        md:w-[277px] md:h-[24px] md:text-[20px] md:leading-[24px]
                        lg:w-[277px] lg:h-[52px] lg:font-[600] lg:text-[22px] lg:leading-[26px]
                        xl:w-[298px] lx:h-[56px] xl:font-[600] xl:text-[24px] xl:leading-[28px]
                        2xl:w-[298px] 2lx:h-[60px] 2xl:font-[600] 2xl:text-[26px] 2xl:leading-[30px]
                        ">
                          {service.title}
                        </h3>
                        <p className="leading-[20px] text-[14px] font-[400] text-sm text-gray-700 dark:text-gray-300
                        md:text-[16px] md:leading-[22px] md:font-[400]
                        lg:w-[277px] lg:h-[150px] lg:text-[18px] lg:leading-[25px]
                        2xl:w-[301px] 2xl:h-[210px] 2xl:text-[22px] 2xl:leading-[30px]
                        ">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[3.61px] mx-auto sm:w-[64px] sm:h-[11.19px] sm:-mt-25 lg:mt-[1px] 2xl:mt-10">
          {services.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[5.86px] h-[5.86px] border border-gray-400 -mt-5 rounded-full transition-all duration-300 
                sm:w-[11.19px] sm:h-[9px]
                md:w-[13px] mdLh-[13px] md:border-[1px] md:mt-10
                ${currentIndex % totalItems === index
                  ? "bg-custom-cyan scale-105"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
