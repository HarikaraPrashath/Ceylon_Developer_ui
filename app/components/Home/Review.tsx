import Image from "next/image"
import React from "react"

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
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

const Review = () => {
    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Why Customers <span className="italic font-normal">love</span> working with us
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Hear directly from customers about their experiences and how web done has made a difference.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  ">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="border-2 py-4 px-4 rounded-xl border-green-950 bg-gray-900 flex flex-col max-h-min"
                        >
                            {/* Header (image + name) */}
                            <div className="flex gap-4 mb-3">
                                <Image
                                    src={testimonial.avatar || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    <p className="text-gray-500 text-xs">{testimonial.maker}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 leading-relaxed flex-1">
                                {testimonial.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review
