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
          <h1 className="title text-white">Privacy Policy</h1>
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
          <h1 className="title text-black">Privacy Policy</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="sub-title-div">
        <p className="paragraphy-push text-gray-700 dark:text-gray-300 text-center max-w-[800px] mx-auto">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </p>

        <div className="mt-10 mx-4 md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] text-gray-800 dark:text-gray-200">
          <p>
            Ceylon Developer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services, website, and other digital platforms.
          </p>

          {/* Phase -1 */}
          <Section title="1. Information We Collect">
            <p>
              We collect different types of information to provide and improve
              our services:
            </p>

            <Bullet>
              <b>Personal Information:</b> When you sign up or interact with
              Ceylon Developer, we may collect details like your name, email,
              and other contact information.
            </Bullet>

            <Bullet>
              <b>Usage Data:</b> We gather data on how you use Ceylon Developer, including chat logs, search history, preferences, and other activities within the platform.
            </Bullet>

            <Bullet>
              <b>Device Information:</b> We collect data about the device you use to access Ceylon Developer, such as your IP address, browser type, and operating system
            </Bullet>
          </Section>

          {/* Phase -2 */}
          <Section title="2. How We Use Your Information">
            <p>We use your information to enhance your experience and improve our services:</p>

            <Bullet>
              <b>Service Delivery:</b> Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer
            </Bullet>

            <Bullet>
              <b>Improvement and Development:</b> We analyse usage data to improve Ceylon Developert&apos;s features and functionality.
            </Bullet>

            <Bullet>
              <b>Customer Support:</b> If you contact us for support, we may use your information to address and resolve your concerns.
            </Bullet>
          </Section>

          {/* Phase -3 */}
          <Section title="3. Data Sharing and Disclosure">
            <p>
              We do not sell or rent your personal information to third parties. However, we may share data under the following circumstances:
            </p>

            <Bullet>
              <b>Legal Requirements:</b>Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer.
            </Bullet>

            <Bullet>
              <b>Service Providers:</b> We analyse usage data to improve Ceylon Developert&apos;s features and functionality.
            </Bullet>

            <Bullet>
              <b>Safety:</b> If you contact us for support, we may use your information to address and resolve your concerns.
            </Bullet>
          </Section>

          {/* Phase -4 */}
          <Section title="4. Data Security">
            <p>
              We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no online service is
              entirely secure, and we cannot guarantee the absolute security of your information.
            </p>
          </Section>

          {/* Phase -5 */}
          <Section title="5. Your Data Rights">
            <p>You have rights regarding your personal information, including:</p>

            <Bullet>
              <b>Access:</b> You may request a copy of the data we hold about you.
            </Bullet>

            <Bullet>
              <b>Correction:</b> If your data is inaccurate, you can request corrections.
            </Bullet>

            <Bullet>
              <b>Deletion:</b> You can request the deletion of your personal information, subject to legal obligations.
            </Bullet>
          </Section>

          {/* Phase -6 */}
          <Section title="6. Third-Party Links">
            <p>
              Ceylon Developer may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites.
            </p>
          </Section>

          {/* Phase -7 */}
          <Section title="7. Changes to This Privacy Policy">
            <p>
             We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </Section>

          {/* Phase -8 */}
          <Section title="8. Contact Us" bottom>
            <p>
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
  <div className={`mt-10 ${bottom ? "mb-20" : ""}`}>
    <h2 className="mb-4 text-xl text-custom-cyan dark:text-custom-cyan">
      {title}
    </h2>
    {children}
  </div>
);

/* Bullet component */
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mt-5 ml-2 text-gray-800 dark:text-gray-200">
    <div className="mt-[2px]">
      <CircleSmall
        fill="currentColor"
        className="w-3 text-custom-cyan dark:text-custom-cyan"
      />
    </div>
    <p className="mx-2">{children}</p>
  </div>
);

export default Page;
