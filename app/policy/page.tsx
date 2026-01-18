"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { CircleSmall } from "lucide-react";
import { useTheme } from "next-themes";
 
const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // wait until client to know actual theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Before mount we don't know light/dark for sure, so don't render hero yet.
    // You could return a skeleton if you want, but null = no double-banner flash.
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {/* HERO SECTION*/}
      {isDark ? (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-bottom"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom,bottom,center",
            backgroundSize: "cover,100%",
          }}
        >
          <Navbar />
          <h1 className=" text-white
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] mx-auto text-center mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%] 
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%] 
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%] 
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] 
          2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
          ">Privacy Policy</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-center bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className=" text-black 
          w-[375px] h-[45px] font-[600] text-[40px] leading-[45px] mx-auto text-center mt-8
          sm:w-[435px] sm:h-[40px] sm:text-[40px] sm:leading-[100%] 
          md:w-[435px] md:h-[48px] md:text-[48px] md:leading-[100%]
          lg:w-[643px] lg:h-[64px] lg:text-[64px] lg:leading-[100%]  
          xl:w-[851px] xl:h-[80px] xl:text-[80px] xl:leading-[100%] 
          2xl:w-[851px] 2xl:h-[96px] 2xl:text-[96px] 2xl:leading-[100%] 
          ">Privacy Policy</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="border border-black">
        <p className=" text-gray-700 dark:text-gray-300 text-center  mt-10
        w-[307px] h-[60px] font-[400] text-[14px] leading-[20px] mx-auto
        sm:w-[435px] sm:h-[40px] sm:text-[15px] sm:leading-[20px]
        md:w-[435px] md:h-[66px] md:text-[16px] md:leading-[22px]
        lg:w-[643px] lg:h-[50px] lg:text-[18px] lg:leading-[25px]
        xl:w-[643px] xl:h-[56px] xl:text-[20px] xl:leading-[28px] 
        2xl:w-[649px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 
        ">
          Pushing the boundaries of what&apos;s possible in the digital realm. Join us on this journey into the future of technology.
        </p>

        <div className=" text-gray-800 dark:text-gray-200 ">
          <p className="
          w-[301px] h-[120px] font-[400] text-[14px] leading-[20px] mx-auto mt-10
          sm:w-[511px] sm:h-[80px]  sm:text-[15px] sm:leading-[20px] 
          md:w-[612px] md:h-[75px]  md:text-[16px] md:leading-[25px] 
          lg:w-[835px] lg:h-[75px]  lg:text-[18px] lg:leading-[25px] 
          xl:w-[1108px] xl:h-[56px]  xl:text-[20px] xl:leading-[28px] 
          2xl:w-[1187px] 2xl:h-[60px] 2xl:text-[22px] 2xl:leading-[30px] 
          ">
            Ceylon Developer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services, website, and other digital platforms.
          </p>

          {/* Phase -1 */}
          <Section title="1. Information We Collect" >
            <p className="w-[301px] h-[40px] font-[400] text-[14px] leading-[20px]
            sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
            md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
            lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px]
            xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
            2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            " >
              We collect different types of information to provide and improve
              our services:
            </p>

            <Bullet>
              <b className="font-[700] ">Personal Information:</b> When you sign up or interact with
              Ceylon Developer, we may collect details like your name, email,
              and other contact information.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Usage Data:</b> We gather data on how you use Ceylon Developer, including chat logs, search history, preferences, and other activities within the platform.
            </Bullet>

            <Bullet>
              <b  className="font-[700]">Device Information:</b> We collect data about the device you use to access Ceylon Developer, such as your IP address, browser type, and operating system
            </Bullet>
          </Section>

          {/* Phase -2 */}
          <Section title="2. How We Use Your Information">
            <p className="w-[301px] font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px]
              xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
              2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">We use your information to enhance your experience and improve our services:</p>

            <Bullet>
              <b className="font-[700]">Service Delivery:</b> Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer
            </Bullet>

            <Bullet>
              <b className="font-[700]">Improvement and Development:</b> We analyse usage data to improve Ceylon Developert&apos;s features and functionality.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Customer Support:</b> If you contact us for support, we may use your information to address and resolve your concerns.
            </Bullet>
          </Section>

          {/* Phase -3 */}
          <Section title="3. Data Sharing and Disclosure">
            <p className="w-[301px]  font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px]
             xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
             2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">
              We do not sell or rent your personal information to third parties. However, we may share data under the following circumstances:
            </p>

            <Bullet>
              <b className="font-[700]">Legal Requirements:</b>Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Service Providers:</b> We analyse usage data to improve Ceylon Developert&apos;s features and functionality.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Safety:</b> If you contact us for support, we may use your information to address and resolve your concerns.
            </Bullet>
          </Section>

          {/* Phase -4 */}
          <Section title="4. Data Security" >
            <p className="w-[301px]  font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px] lg:mb-20
              xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
              2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">
              We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no online service is
              entirely secure, and we cannot guarantee the absolute security of your information.
            </p>
          </Section>

          {/* Phase -5 */}
          <Section title="5. Your Data Rights">
            <p className="w-[301px] font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px] 
            xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
            2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">You have rights regarding your personal information, including:</p>

            <Bullet>
              <b className="font-[700]">Access:</b> You may request a copy of the data we hold about you.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Correction:</b> If your data is inaccurate, you can request corrections.
            </Bullet>

            <Bullet>
              <b className="font-[700]">Deletion:</b> You can request the deletion of your personal information, subject to legal obligations.
            </Bullet>
          </Section>

          {/* Phase -6 */}
          <Section title="6. Third-Party Links">
            <p className="w-[301px]  font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px] 
            xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
            2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">
              Ceylon Developer may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites.
            </p>
          </Section>

          {/* Phase -7 */}
          <Section title="7. Changes to This Privacy Policy">
            <p className="w-[301px] font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:lead
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px]ing-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px] lg:mb-20
              xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px] xl:mb-20
            2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]

            ">
             We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </Section>

          {/* Phase -8 */}
          <Section title="8. Contact Us" bottom>
            <p className="w-[301px]   font-[400] text-[14] leading-[20px]
             sm:w-[511px] sm:h-[40px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
             md:w-[612px] md:h-[25px]  md:text-[16px] md:leading-[25px]
             lg:w-[835px] lg:h-[25px]  lg:text-[18px] lg:leading-[25px]
            xl:w-[1108px] xl:h-[28px]  xl:text-[20px] xl:leading-[28px]
            2xl:w-[1187px] 2xl:h-[60px]  2xl:text-[22px] 2xl:leading-[30px]
            ">
              If you have any questions or concerns about this Privacy Policy or Ceylon Developert&apos;s data practices, please contact us at 
              <a
                href="mailto:ceylondevelopers@gmail.com"
                className="underline text-custom-cyan dark:text-custom-cyan pl-1"
              >
                 ceylondevelopers@gmail.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

/* Section component */
const Section = ({
  title,
  children,
  bottom,
}: {
  title: string;
  children: React.ReactNode;
  bottom?: boolean;
}) => (
  <div className={`mt-10 ${bottom ? "mb-20" : ""} `}>
  <h2 className=" text-custom-cyan dark:text-custom-cyan mx-auto
  w-[301px] font-[400] text-[18px] leading-[25px] 
  sm:w-[511px] sm:text-[22px] sm:leading-[28px] sm:mb-1
  md:w-[612px] md:text-[24px] md:leading-[30px] md:mb-2
  lg:w-[835px] lg:text-[26px] lg:leading-[32px] lg:mb-2
  xl:w-[1108px] xl:text-[28px] xl:leading-[34px] xl:mb-2
  2xl:w-[1187px] 2xl:text-[30px] 2xl:leading-[36px] 2xl:mb-2
  ">
    {title}
  </h2>

  <div className="   text-gray-700 dark:text-gray-300 
  w-[301px]  gap-[20px] mx-auto 
  sm:w-[511px] sm:gap-[28px]
  md:w-[612px] md:gap-[28px] 
  lg:w-[835px] lg:gap-[28px] 
  xl:w-[1108px] xl:gap-[28px] 
  2xl:w-[1187px] 2xl:gap-[28px] 
  ">
    {children}
  </div>
</div>

);

/* Bullet component */
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mt-5 ml-2 text-gray-800 dark:text-gray-200 body sm:body-sm md:body-md lg:body-lg-lg xl:body-xl 2xl:body-2xl">
    <div className="mt-[2px]">
      <CircleSmall
        fill="currentColor"
        className="w-3 text-custom-cyan dark:text-custom-cyan"
      />
    </div>
    <p className="mx-2
    w-[301px] text-[14px] leading-[20px] font-[400]
    sm:w-[511px] sm:text-[15px] sm:leading-[20px] 
    md:w-[612px] md:text-[16px] md:leading-[25px] 
    lg:w-[835px] lg:text-[18px] lg:leading-[25px] 
    xl:w-[1108px] xl:text-[20px] xl:leading-[28px] 
    2xl:w-[1187px] 2xl:text-[22px] 2xl:leading-[30px] 
    ">{children}</p>
  </div>
);

export default Page;
