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
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6 sm:mx-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-balance">
            Why Customers{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">love</span>{" "}
            working with us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400">
            Hear directly from customers about their experiences and how web
            done has made a difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:mx-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-2 py-4 px-4 rounded-xl flex flex-col
                         bg-white dark:bg-gray-900
                         border-gray-200 dark:border-green-950"
            >
              {/* Header (image + name) */}
              <div className="flex gap-4 mb-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.handle}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.maker}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="leading-relaxed flex-1 text-gray-700 dark:text-gray-300">
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
