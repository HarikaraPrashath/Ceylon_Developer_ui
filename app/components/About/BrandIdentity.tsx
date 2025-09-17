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
              boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.6)", // 4-side cyan glow
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;
