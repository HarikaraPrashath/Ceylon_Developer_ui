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

  // responsive visible range
  useEffect(() => {
    const updateVisibleRange = () => {
      const width = window.innerWidth;
      if (width < 641) {
        // xs, sm
        setVisibleRange(0);
      } else if (width < 1024) {
        // md, lg, xl
        setVisibleRange(1);
      } else {
        // 2xl
        setVisibleRange(2);
      }
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
    // xs/sm use px-2; md+ can widen
    <section className="-pt0 px-2 sm:px-2  bg-black min-h-screen flex items-center justify-center relative overflow-hidden  ">
      {/* decorations (unchanged) */}
      <div className="absolute inset-0 opacity-5 ">
        <div className="absolute top-10 left-10 w-40 h-40 border border-custom-cyan rounded-lg rotate-12"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-custom-cyan rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24  border border-custom-cyan rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 border border-custom-cyan rounded-lg -rotate-6"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 border border-custom-cyan rounded-lg rotate-[30deg]"></div>
      </div>

      <div className=" mx-auto relative w-full max-w-[1440px] ">
        <div className="text-center ">


            {" "}
            <h1 className="text-center lg:-mt-100 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl max-[640px]:flex max-[640px]:flex-col xl:mt-10 2xl:-mt-100 ">
              <span className="[font-family:var(--font-kaushan)] px-4">
                Services
              </span>
              <span >We offer</span>
            </h1>
        

          <p className="mt-6 xl:w-100 text-sm mx-auto lg:w-115 md:w-114 sm:w-115 max-[640px]:w-70">
            Pushing the boundaries of what&apos;s possible in the digital realm{" "}
            Join us on this journey into the future of technology
          </p>
        </div>

        {/* swiper container */}
        <div
          className="relative h-96 flex items-center justify-center -mt-20 sm:mt-5  "
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className="relative w-full h-full transition-transform duration-500 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              {extendedServices.map((service, index) => {
                const position = index - currentIndex;
                const isVisible = Math.abs(position) <= visibleRange;
                if (!isVisible) return null;

                const isCenter = position === 0;

                const rotateY = position * 25;
                const translateZ = isCenter ? 55 : 0;
                const translateX = position * 300;
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
                    /* Full-width card on xs/sm/md; fixed width again on lg+ */
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
                    {/* Strong, full border treatment on xs/sm/md; original look on lg+ */}
                    <div
                      className="
                        w-full h-full p-6
                        bg-gray-900/60 backdrop-blur-sm
                        border border-custom-cyan/60
                        md:border-custom-cyan/60
                        lg:border-custom-cyan/20
                        rounded-2xl flex flex-col
                        hover:border-custom-cyan/60 hover:bg-gray-900/70
                        transition-all duration-300 group cursor-pointer
                        sm:w-130 sm:mx-auto  sm:-mt-15 sm:h-50 md:w-77 md:h-75
                        
                      "
                    >
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-custom-cyan-400 mb-3 group-hover:text-custom-cyan transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
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

        {/* dots */}
        <div className="flex 3xl:hidden justify-center space-x-3 bottom-4 left-1/2 -translate-x-1/2 mt-20 ml-45 sm:-mt-20 sm:ml-80 lg:mt-10 lg:ml-130 xl:ml-175">
          {services.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex % totalItems === index
                  ? "bg-custom-cyan scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
