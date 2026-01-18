import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-3.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-4.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-5.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-6.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-4.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    name: "Mike Johnson",
    handle: "@mike_tech",
    maker: "Saas-maker",
    avatar: "/Images/pic-1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Review = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6 sm:mx-5 lg:-mt-40">
      <div className=" mx-auto xl:ml-30  ">
        {/* Header */}
        <div className="text-center mb-12 md:w-[703px] md:h-[169px] md:gap-[25px] lg:w-[50px]  lg:h-[185px]
        xl:w-[703px] xl:h-[235px] xl:gap-[35px]
        ">
          <h2 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl 
          md:w-[403px] md:h-[100px] md:font-[500] md:text-[40px] md:leading-[50px] md:mx-auto 
          lg:w-[503px] lg:h-[110px] lg:text-[48px] lg:leading-[55px] lg:ml-50 
          xl:w-[403px] xl:h-[90px] xl:font-[500]  xl:text-[72px] xl:leading-[70px]  xl:ml-100
          
          ">
            Why Customers{" "}
            <span className="[font-family:var(--font-kaushan)] pr-4">love</span> {" "}
            working with us
          </h2>
          <p className="text-[14px] leading-[20px] font-[400] text-gray-700 dark:text-gray-400
          sm:w-[439px] sm:h-[40px] sm:text-[15px] sm:font-[400] sm:leading-[20px]
          md:w-[617px] md:h-[44px] md:font-[400] md:text-[16px] md:leading-[22px]
          lg:w-[617px] lg:h-[50px] lg:text-[18px] lg:leading-[25px]  lg:ml-35
          xl:font-[400] xl:text-[22px] xl:leading-[30px] xl:w-[600px] xl:ml-70
          ">
            Hear directly from customers about their experiences and how web
            done has made a difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:w-[910px]  lg:gap-[35px] xl:gap-[30px] 
        xl:w-[1191px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-[1px] w-[332px] h-[177px] rounded-[15px] p-[10px] flex flex-col
              sm:w-[547px] sm:h-[172px] sm:rounded-[16px] sm:border-[1px] sm:px-[20px] sm:py-[15px] 
              md:w-[340px] md:h-[222px] md:rounded-[16px] md:border-[1px] md:py-[15px] md:px-[20px] md:gap-[10px]
              lg:w-[280px]  lg:h-max lg:rounded-[16px] lg:border-[1px] lg:py-[15px] lg:px-[20px]
              xl:w-[377px] xl:rounded-[16px] xl:border-[1px] xl:py-[15px] xl:px-[20px]
                         bg-white dark:bg-black
                         border-gray-200 dark:border-green-950"
            >
              {/* Header (image + name) */}
              <div className="flex gap-4 mb-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-[9999px] w-[40px] h-[40px] object-cover sm:w-[35px] sm:h-[35px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[35px] 
                  xl:w-[40px] xl:h-[40px] 
                  "
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-[500] text-[16px] leading-[25px] text-gray-900 dark:text-white
                  sm:w-[135px] sm:h-[24px] sm:font-[600] sm:leading-[25px] sm:text-[20px]     
                  md:w-[135px] md:h-[24px] md:font-[600] md:text-[20px] md:leading-[24px]
                  lg:w-[148px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  xl:w-[175px] xl:h-[30px] xl:font-[600] xl:text-[26px] xl:leading-[30px]
                  ">
                    {testimonial.name}
                  </h3>
                  <p className="text-[14px] font-[400] leading-[20px] text-gray-600 dark:text-gray-400
                  sm:text-[16px] sm:w-[135px] sm:h-[22px] sm:leading-[22px] sm:font-[400]
                  md:w-[135px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
                  lg:w-[148px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
                  xl:w-[175px] xl:h-[25px] xl:font-[400] xl:text-[18px] xl:leading-[25px]
                  ">
                    {testimonial.handle}
                  </p>
                  <p className="text-[12px] font-[400] leading-[15px] text-gray-500 dark:text-gray-500
                  md:w-[135px] md:h-[20px] md:font-[400] md:text-[16px] md:leading-[20px]
                  lg:w-[148px] lg:h-[20px] lg:font-[400] lg:text-[16px] lg:leading-[20px]
                  xl:w-[175px] xl:h-[20px] xl::font-[400] xl:text-[16px] xl:leading-[20px]
                  ">
                    {testimonial.maker}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-[14px] leading-[20px] font-[400] flex-1 text-gray-700 dark:text-gray-300
              sm:text-[15px] sm:w-[507px] sm:h-[60px] sm:leading-[20px] sm:font-[400]
              md:w-[301px] md:h-[110px] md:font-[400] md:text-[16px] md:leading-[22px] md:mb-[30px]
              lg:w-[240px] lg:h-[150px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
              xl:w-[337px] xl:h-[60px] xl:font-[400] xl:text-[22px] xl:leading-[30px]
              ">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
