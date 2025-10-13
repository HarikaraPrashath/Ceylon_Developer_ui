import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { CircleSmall } from 'lucide-react';


const page = () => {
  return (
    <div className="">
      <div
        className="relative  flex flex-col h-[30%] text-white "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "200px",
        }}
      >
        <Navbar />

        <h1 className="xl:text-5xl text-4xl font-semibold  text-center mt-20 ">
          Privacy Policy
        </h1>
      </div>
      <div className="px-5 xl:mt-20 ">
        <p className=" text-center w-100 mx-auto xl:w-120  max-w-[1440px] ">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>

        {/* main content */}
        <div className="mt-10 mx-4 md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] ">
          <p>Ceylon Developer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services, website, and other digital platforms.</p>

          {/* Phase -1 */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">1. Information We Collect</h1>
            <p>We collect different types of information to provide and improve our services:</p>
            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Personal Information:</span> When you sign up or interact with Ceylon Developer, we may collect personal details like your name, email address, and other contact information.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Usage Data:</span>We gather data on how you use Ceylon Developer, including chat logs, search history, preferences, and other activities within the platform.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Device Information:</span>  We collect data about the device you use to access Ceylon Developer, such as your IP address, browser type, and operating system.
              </p>
            </div>
          </div>

          {/* Phase -2  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">2. How We Use Your Information</h1>
            <p>We use your information to enhance your experience and improve our services:</p>
            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Service Delivery:</span>  Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Improvement and Development: </span> We analyse usage data to improve Ceylon Developer’s features and functionality.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Customer Support: </span> If you contact us for support, we may use your information to address and resolve your concerns.
              </p>
            </div>
          </div>

          {/* Phase -3  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">3. Data Sharing and Disclosure</h1>
            <p>We do not sell or rent your personal information to third parties. However, we may share data under the following circumstances:</p>
            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Service Delivery:</span>  Your data helps us provide personalized responses, suggestions, and other features of Ceylon Developer.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Improvement and Development: </span> We analyse usage data to improve Ceylon Developer’s features and functionality.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Customer Support: </span>  If you contact us for support, we may use your information to address and resolve your concerns.
              </p>
            </div>
          </div>

          {/* Phase -4  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">4. Data Security</h1>
            <p>We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no online service is
              entirely secure, and we cannot guarantee the absolute security of your information.</p>

          </div>

           {/* Phase -5  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">5. Your Data Rights</h1>
            <p>You have rights regarding your personal information, including:</p>
            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Access:</span>  You may request access to the data we hold about you.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold"> Correction: </span> If your data is inaccurate, you can request corrections.
              </p>
            </div>

            <div className="flex items-start mt-5 ml-2">
              <div><CircleSmall fill="currentColor" className="w-3"/></div>
              <p className=" mx-2">
                <span className="font-bold">Deletion: </span>   You can request the deletion of your personal information, subject to legal obligations.
              </p>
            </div>
          </div>

 {/* Phase -6  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">6. Third-Party Links</h1>
            <p>Ceylon Developer may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites.</p>

          </div>


           {/* Phase -7  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">7. Changes to This Privacy Policy</h1>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>

          </div>

             {/* Phase -8  */}
          <div className="mt-5">
            <h1 className="mb-4 text-xl text-custom-cyan">8.  Contact Us</h1>
            <p>If you have any questions or concerns about this Privacy Policy or Ceylon Developer’s data practices, please contact us at ceylondevelopers@gmail.cpm</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
