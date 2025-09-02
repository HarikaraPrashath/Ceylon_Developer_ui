import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";

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
          <div className="px-4 py-2 rounded-4xl border-1 border-gray-700 bg-gray-400/20 w-[25%] text-center text-gray-200 text-xl mx-auto mt-10">
            <p>Bring your business to the best scale</p>
          </div>

          <div className="text-center text-9xl font-medium mt-20">
            <p>Crafting <span className="custom-cyan">Digital</span> <br /> Excellence</p>
          </div>

          <p className="mx-auto text-lg text-center mt-10">Pushing the boundaries of what&apos;s possible in the digital realm. Join  <br />us  on this journey into the future of technology </p>

          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Link href="/">
                <Image
                  src="/Images/Button.png"
                  alt="button"
                  width={120}
                  height={120}
                  priority
                />
              </Link>
            </div>
            <div>
              <Image
                src="/Images/Group 31.png"
                alt="users"
                width={80}
                height={80}
                priority
                className="ml-2"
              />
            </div>
            <div>
              <p className="-mt-1.5 -ml-3">Trust by over +20K <br /> people in the world</p>
            </div>
          </div>
          <Image
            src="/Images/Line 4.png"
            alt="Horizontal Line"
            width={200}
            height={200}
            priority
            className="mx-auto mt-20"
          />
        </div>

      </div>
      {/* Service */};
      <div>
        <p className="mt-8 text-center"> Pushing the boundaries of what&apos;s possible in the digital realm <br /> Join us on thi journey into the future of technology </p>
        <div>
          <h1 className="text-6xl text-center mt-20 "><span className="[font-family:var(--font-kaushan)] px-4">Services</span>We offer</h1>;


          <Image
            src="/Images/scrollerVertical.svg"
            alt="scrollerVertical"
            width={100}
            height={100}
            className="mx-auto w-[100%]"
          />


          <Image
            src="/Images/Carousel-nodes.png"
            alt="Carousel-nodes"
            width={70}
            height={70}
            className="mx-auto mt-10"
          />
        </div>
      </div>
      {/* Activities */};
      < div
        className="flex flex-col "
        style={{
          backgroundImage: `url('/Images/Vector.png'),url('/Images/Activities.svg')`,
          backgroundPosition: "center,right center", // first image aligned right center, second centered
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "75%, 49%",
          height: "700px",


        }}
      >
        <h1 className="text-6xl pl-20 mt-20">To upscale your <br /><span className="[font-family:var(--font-kaushan)]">business</span> to the <br />next level</h1>;
        <div className="w-[39%] mt-1 ml-20">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
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

        </div>
      </div>

      {/* Roadmap */}
      <div>
        <h1 className="text-6xl pl-20 mt-10 text-center">Our<span className="[font-family:var(--font-kaushan)]">design</span> and <br /> <span className="[font-family:var(--font-kaushan)]">development</span> approach</h1>;
        <Image
          src="/Images/Roadmap.svg"
          alt="Roadmap"
          width={1200}
          height={1200}
          className="mx-auto -mt-20"
        />
      </div>
    </div>
  );
}
