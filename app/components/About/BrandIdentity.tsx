import Image from "next/image";
import React from "react";

const BrandIdentity = () => {
  return (
    <div>
      {/* mobile and tab view */}
      <div>
        <h1 className="text-4xl text-center mt-10">
          The identity of{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">
            our brand
          </span>{" "}
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          nihil. Esse ut aperiam officia iure. Blanditiis incidunt.
        </p>

        <div>
          <div
            className="border-1 rounded-xl w-80 h-40 mx-auto mt-8 border-custom-cyan"
            style={{
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)",
            }}
          >
            <div className="flex flex-row w-75">
              <div className="px-3 py-2">
                <h1 className="text-4xl text-custom-cyan font-semibold mb-3">
                  250+
                </h1>

                <p className="mb-3 text-xs">Experienced IT Experts</p>
                <p className="mb-3 text-xs">
                  “Reduce operational costs while accessing”
                </p>
              </div>
              <div className="py-2 ">
                <h1 className="text-xl  font-semibold mb-3">Cost Efficiency</h1>
                <p className="mb-3 text-xs">
                  Requires less upfront investment than traditional CRM systems.
                </p>
                <div className="flex flex-row">
                  <Image
                    src="/Images/BoxUser.png"
                    alt="img"
                    width={1020}
                    height={120}
                    priority
                    className="w-15 h-8"
                  />
                  <div className=" w-40 ml-2 bg-custom-cyan text-black mx-auto px-1 pt-1 rounded-sm ">
                    <button type="button" className="">Get Proposal</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;
