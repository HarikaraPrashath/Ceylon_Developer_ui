import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import ServicesSwiper from "./components/Home/Swiper";
import Implement from "./components/Home/Implement";
import Worlflow from "./components/Home/Worlflow";
import Technologies from "./components/Home/Technologies";
import Review from "./components/Home/Review";
import Help from "./components/Home/Help";

export default function Home() {
  return (
    <div>
      <div className=" bg-black items-center">
        {/* Container with multiple backgrounds */}
        <div
          className="relative  flex flex-col h-[30%] text-white"
          style={{
           backgroundImage: `url('/Images/Glow.png'), url('/Images/Vector.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 80%",
            height: "600px, 600px",
          }}
        >
          {/* Navigation Bar */}
          <Navbar />
          <div className="px-4 py-2 rounded-3xl border border-gray-700 bg-gray-400/20 w-fit text-center text-gray-200 text-xl mx-auto mt-10 whitespace-nowrap sm:text-lg xs:text-sm">
            Bring your business to the best scale
          </div>

          <div className="text-center mt-6">
            <p className="text-4xl leading-tight font-medium sm:text-6xl lg:text-7xl xl:text-9xl xl:leading-[1.1]">
              Crafting <span className="custom-cyan">Digital</span>
              <br className="" />
              <span className=""> </span>Excellence
            </p>
          </div>

          <p className="mx-auto text-center mt-10 max-w-2xl text-sm px-4 sm:text-base sm:px-2 lg:text-lg">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join
            <br className=" " />
            us on this journey into the future of technology
          </p>

          {/* Buttons + Users */}
          <div className="flex flex-col-reverse items-center mt-10 space-y-3  sm:flex-row sm:space-x-6 sm:space-y-0 mx-auto">
            {/* Learn More button (below on mobile, left on bigger screens) */}
            <div>
              <Link href="/">
                <Image
                  src="/Images/Button.png"
                  alt="button"
                  width={1020}
                  height={120}
                  priority
                  className="w-[140px] h-auto sm:w-[120px]"
                />
              </Link>
            </div>

            {/* Users + Trust copy (stack on mobile, row on bigger screens) */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 min-[375px]:flex-row gap-3 min-[375px]:ml-10 min-[375px]:w-[300px]">
              {/* Users image */}
              <Image
                src="/Images/Group 31.png"
                alt="users"
                width={80}
                height={80}
                priority
                className="ml-0 w-[96px] h-auto sm:ml-2 sm:w-[80px]"
              />

              {/* Trust copy */}
              <p className="mt-0 ml-0 text-center text-sm sm:text-left sm:-mt-1.5 sm:-ml-3 sm:text-base  min-[375px]:-mt-3">
                Trusted by over +20K <br className="block sm:hidden" />
                people in the world
              </p>
            </div>
          </div>

          <Image
            src="/Images/Line 4.png"
            alt="Horizontal Line"
            width={200}
            height={200}
            priority
            className="mx-auto mt-20  border-1"
          />
        </div>
      </div>
      {/* Service */}
      <ServicesSwiper />

      {/* Activities */}

      <div
        className="
    relative flex flex-col overflow-hidden
    px-4 sm:px-6 md:px-8 lg:pl-20
    py-10 sm:py-12 md:py-16 lg:py-0
    lg:min-h-[700px]
  "
      >
        {/* Desktop decorations (1440px and above) */}
        <Image
          src="/Images/Activities.svg"
          alt=""
          priority
          width={1200}
          height={800}
          className="
      hidden 2xl:block absolute right-0 top-1/2 -translate-y-1/2
      w-[49%] h-auto pointer-events-none select-none
    "
        />
        <Image
          src="/Images/Vector.png"
          alt=""
          priority
          fill
          className="hidden 2xl:block object-contain pointer-events-none select-none"
          style={{ objectPosition: "center" }}
        />

        {/* xs/sm/md — 2-line title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-6 text-center leading-tight lg:hidden">
          <span className="whitespace-nowrap">
            To upscale your{" "}
            <span className="[font-family:var(--font-kaushan)]">business</span>
          </span>
          <br />
          <span className="whitespace-nowrap">to the next level</span>
        </h1>

        {/* lg+ — original layout */}
        <h1 className="hidden lg:block text-6xl mt-20 leading-tight">
          To upscale your <br />
          <span className="[font-family:var(--font-kaushan)]">business</span> to
          the <br />
          next level
        </h1>

        <div
          className="
      w-full sm:w-5/6 md:w-3/4 lg:w-[39%]
      mt-4 md:mt-6
    "
        >
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>

          <p className="flex items-center gap-2 mt-3">
            <Image
              src="/Images/TikButton.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Project template to kick-start a new project
          </p>

          <p className="flex items-center gap-2 mt-3">
            <Image
              src="/Images/TikButton.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Clone task to speed your time to action
          </p>

          <p className="flex items-center gap-2 mt-3">
            <Image
              src="/Images/TikButton.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Communication and collaborate with your team and clients
          </p>

          <p className="flex items-center gap-2 mt-3">
            <Image
              src="/Images/TikButton.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Time tracking for the whole team
          </p>

          {/* Show Activities.svg below points on smaller screens */}
          <div className="mt-6 lg:hidden flex justify-center md:w-[900px] sm:w-[700px]  xs:w-[300px]">
            <Image
              src="/Images/Activities.svg"
              alt="Activities"
              width={800}
              height={600}
              className="w-full sm:w-[90%] md:w-[80%] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div>
        {/* Text: fixed formatting across all sizes (no responsive variants used) */}
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  mt-10 text-center">
          Our <span className="[font-family:var(--font-kaushan)]">design</span>{" "}
          and <br />
          <span className="[font-family:var(--font-kaushan)]">
            development
          </span>{" "}
          approach
        </h1>

        {/* Reserve consistent space for the image block to prevent layout shifts */}
        <div className="mx-auto mt-10 w-full max-w-[1000px]">
          {/* Desktop/Laptop: lg and up (≥1024px, includes 1440px+) */}
          <Image
            src="/Images/roadmap.png"
            alt="Roadmap"
            width={1000}
            height={1000}
            className="block lg:block hidden"
            priority
          />

          {/* Tablet: md (≥768px and <1024px) */}
          <Image
            src="/Images/roadmap2.png"
            alt="Roadmap 2"
            width={1000}
            height={1000}
            className="hidden md:block lg:hidden"
            priority
          />

          {/* Small: sm (≥640px and <768px) */}
          <Image
            src="/Images/roadmap1.png"
            alt="Roadmap 1"
            width={1000}
            height={1000}
            className="hidden sm:block md:hidden"
            priority
          />

          {/* Extra small: <640px (covers 375px and below) */}
          <Image
            src="/Images/roadmap3.png"
            alt="Roadmap 3"
            width={1000}
            height={1000}
            className="block sm:hidden"
            priority
          />
        </div>
      </div>

      <Implement />
      {/* line  */}
      <Image
        src="/Images/cureveLine.png"
        alt="cureveLine"
        width={1000}
        height={1000}
        className="w-[2000px] mx-auto"
        priority
      />

      <Worlflow />

      {/* line  */}
      <Image
        src="/Images/cureveLine.png"
        alt="cureveLine"
        width={1000}
        height={1000}
        className="w-[2000px] mx-auto mb-10"
        priority
      />

      <Technologies />

      {/* Get in touch */}

      <div className="mt-40 mx-5 ">
        <div className="flex flex-col lg:flex-row gap-10 w-full xl:gap-0">
          {/* Left section */}
          <div className=" lg:w-[40%]  xl:ml-10">
            <h1 className="max-[371px]:text-4xl text-center max-[371px]:mt-5 sm:text-4xl md:text-5xl 2xl:text-6xl  xl:text-5xl">
              Get
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Touch
              </span>
            </h1>
            <p className="m-5 text-center xl:text-2xl xl:text-start">
              We&apos;re here to support you! Feel free to reach out for
              assistance, feedback, or any questions.
            </p>
            <h1 className="text-lg xl:text-4xl ml-4">Let&apos;s Talk About:</h1>

            <div className="space-y-5 mt-7 xl:ml-5">
              <div className="flex flex-row items-center bg-gray-700 px-3 py-2 rounded-3xl w-full sm:w-[250px] xl:w-[400px]">
                <div className="rounded-full p-1 bg-custom-cyan">
                  {/* arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <p className="text-lg pl-3 xl:text-3xl">Customer Experience</p>
              </div>

              <div className="flex flex-row items-center bg-gray-700 px-3 py-2 rounded-3xl w-full sm:w-[230px] xl:w-[370px]">
                <div className="rounded-full p-1 bg-custom-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <p className="text-lg pl-3 xl:text-3xl">Quality and Trust</p>
              </div>

              <div className="flex flex-row items-center bg-gray-700 px-3 py-2 rounded-3xl w-full sm:w-[240px] xl:w-[400px]">
                <div className="rounded-full p-1 bg-custom-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <p className="text-lg pl-3 xl:text-3xl">Dependable Service</p>
              </div>
            </div>
          </div>

          {/* Right section (form) */}
          <div className="border-2 border-custom-cyan/60 py-5 px-5 rounded-2xl lg:w-1/2 lg:ml-20">
            <h1 className="text-xl mb-2 xl:text-5xl">Get a quote</h1>
            <p className="text-base text-gray-300 xl:text-2xl">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>

            <form className="mt-5 space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-500 w-full rounded-xl py-2 px-4 xl:text-3xl"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-500 w-full rounded-xl py-2 px-4 xl:text-3xl"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-gray-500 w-full rounded-xl py-2 px-4 xl:text-3xl"
              />
              <textarea
                placeholder="Your message"
                className="bg-gray-500 h-27 w-full rounded-xl py-2 px-4 xl:text-3xl"
              ></textarea>

              <button
                type="submit"
                className=" xl:text-3xl w-full text-center bg-custom-cyan rounded-xl py-2 text-lg text-black hover:bg-custom-cyan/80 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Review part */}
      <Review />

      {/* helping service */}
      <Help />

      {/* Manage the team */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2  pt-10 px-4 mx-6 mt-15 rounded-2xl sm:mx-26 sm:px-10 xl:mx-100 xl:pt-6">
        <h1 className="max-[376px]:text-4xl text-center max-[376px]:mt-5 sm:text-4xl md:text-5xl xl:text-7xl">
          Ready to
          <span className="[font-family:var(--font-kaushan)] pr-2">
            Manage
          </span>{" "}
          your team like a pro?
        </h1>

        <p className="text-center mt-6 xl:text-3xl ">
          Pushing the boundaries of what&apos;s possible in the digital real.
          Join us this journey into the future of technology
        </p>

        <div className="bg-custom-cyan text-black w-30 text-xl xl:text-3xl text-center mx-auto m-5 rounded-lg py-1 font-semibold xl:w-40 xl:mt-10">
          <button type="button">Get Start</button>
        </div>
      </div>
    </div>
  );
}
