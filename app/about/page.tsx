import React from "react";
import Navbar from "../components/Navbar/Navbar";

const page = () => {
    return (
        <div>
            <div
                className="relative  flex flex-col h-[30%] text-white"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover, 100%",
                    height: "500px, 600px",
                }}
            >
                <Navbar />

                <h1 className="text-6xl mt-10 text-center">About</h1>
            </div>
            <div>
                <p className="text-sm text-center w-80 mx-auto mt-5">
                    Pushing the boundaries of hat's possible in the digital realm.Join us
                    on this journey into the future of technology
                </p>
            </div>
        </div>
    );
};

export default page;
