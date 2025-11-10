import React from "react";

const Worlflow = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block max-w-[1440px] xl:ml-16 ">
        <div className="flex flex-row-reverse justify-center mt-6">
          <div
            className="
              relative border-gray-300 dark:border-gray-800 border-2 mx-5 rounded-3xl 
              flex flex-col justify-center items-start p-6 text-white
              bg-no-repeat bg-left
              bg-[linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1)),url('/Images/Group%20669-light.png')]
              dark:bg-[linear-gradient(to_right,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20669.png')]
            "
            style={{
              backgroundSize: "100%",
              height: "209px",
              width: "550px",
            }}
          >
            <div className="w-60 flex flex-col -mt-40 md:w-80 ml-45 lg:mt-1">
              <h1 className="font-bold text-2xl dark:text-gray-400 text-gray-800">Analytics & Reporting</h1>
              <p className="mt-2 max-w-md text-sm  dark:text-gray-400 text-gray-800">
                Generate real-time reports, identify key performance indicators,
                and make data-driven decisions for continuous improvement.
              </p>
            </div>
          </div>

          <div
            className="
              dark:border-gray-800 border-gray-300 border-2 w-80 rounded-3xl ml-2 text-white
              bg-no-repeat bg-bottom
              bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png'),linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1))]
              dark:bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png')]
            "
            style={{
              backgroundSize: "70%,100%,100%",
              height: "209px",
            }}
          >
            <div className="w-35 sm:w-60 p-3 flex flex-col">
              <h1 className="font-bold text-2xl dark:text-gray-400 text-gray-700">Project</h1>
              <p className="mt-2 max-w-md text-sm dark:text-gray-400 text-gray-700">
                Easily organize tasks, set deadlines, and track progress in
                real-time with Ease.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse mt-6 gap-6 -lg:px-10">
          <div
            className="
              relative  border-gray-300  dark:border-gray-800 border-2 w-80 rounded-3xl mr-70 text-white
              bg-no-repeat bg-top
              bg-[linear-gradient(to_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
              dark:bg-[linear-gradient(to_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
            "
            style={{
              backgroundSize: "100%,100%",
              height: "209px",
            }}
          >
            <div className="w-70 p-3 flex flex-col mt-32 lg:-mt-1">
              <h1 className="font-bold text-2xl dark:text-gray-400 text-gray-700">Developer Mindset</h1>
              <p className="mt-2 max-w-md text-sm dark:text-gray-400 text-gray-700">
                Stay curious embrace challenges, and keep learning to grow as a
                developer
              </p>
            </div>
          </div>

          <div
            className="
              relative w-140 border-gray-300 dark:border-gray-800 border-2 rounded-3xl
              flex flex-col justify-center mb-7 items-start p-6 text-white
              bg-no-repeat
              bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20212.png')]
              dark:bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20212.png')]
            "
            style={{
              backgroundPosition: "bottom,right bottom",
              backgroundSize: "100%,70%",
              height: "209px",
            }}
          >
            <div className="w-100 flex flex-col -mt-40 lg:pt-30">
              <h1 className="text-2xl font-bold dark:text-gray-400 text-gray-700">Your Workflow</h1>
              <p className="mt-2 max-w-md text-sm dark:text-gray-400 text-gray-700">
                Automate repetitive tasks and streamline your workflow with our
                powerful automation features. Reduce manual effort, eliminate
                error
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tab view */}
      <div className="block lg:hidden md:mx-10 sm:mx-10">
        <div
          className="
            relative border-gray-300 dark:border-gray-800 border-2 mx-5 rounded-3xl
            flex flex-col justify-center mt-6 items-start p-6 text-white
            bg-no-repeat bg-left
            bg-[linear-gradient(to_right,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20669-light.png')]
            dark:bg-[linear-gradient(to_right,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20669.png')]
          "
          style={{
            backgroundSize: "100%",
            height: "200px",
          }}
        >
          <div className="w-60 flex flex-col ml-20 -mt-20 md:w-80 md:ml-70">
            <h1 className="text-sm font-bold md:text-3xl dark:text-gray-400 text-gray-700">
              Analytics & Reporting
            </h1>
            <p className="mt-2 max-w-md text-xs md:text-sm dark:text-gray-400 text-gray-700">
              Generate real-time reports, identify key performance indicators,
              and make data-driven decisions for continuous improvement.
            </p>
          </div>
        </div>

        <div className="flex mt-6 mx-2">
          <div
            className="
              border-gray-300 dark:border-gray-800 border-2 w-40 rounded-3xl ml-2 text-white
              sm:w-72 md:w-90
              bg-no-repeat bg-bottom
              bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png'),linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1))]
              dark:bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png')]
            "
            style={{
              backgroundSize: "70%,100%,100%",
              height: "200px",
            }}
          >
            <div className="w-35 sm:w-60 p-3 flex flex-col">
              <h1 className="text-sm font-bold md:text-3xl dark:text-gray-400 text-gray-700">Project</h1>
              <p className="mt-2 max-w-md text-xs md:text-sm dark:text-gray-400 text-gray-700">
                Easily organize tasks, set deadlines, and track progress in
                real-time with Ease.
              </p>
            </div>
          </div>

          <div
            className="
              relative border-gray-300 dark:border-gray-800 border-2 w-40 rounded-3xl ml-5 text-white
              sm:w-72 md:w-90
              bg-no-repeat bg-top
              bg-[linear-gradient(to_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
              dark:bg-[linear-gradient(to_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
            "
            style={{
              backgroundSize: "100%,100%",
              height: "200px",
            }}
          >
            <div className="w-35 sm:w-40 md:w-70 p-3 flex flex-col mt-13">
              <h1 className="text-sm font-bold md:text-3xl dark:text-gray-400 text-gray-700">
                Developer Mindset
              </h1>
              <p className="mt-2 max-w-md text-xs md:text- dark:text-gray-400 text-gray-700">
                Stay curious embrace challenges, and keep learning to grow as a
                developer
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            relative border-gray-300 dark:border-gray-800 border-2 mx-5 rounded-3xl
            flex flex-col justify-center mt-6 mb-7 items-start p-6 text-white
            bg-no-repeat
            bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20212.png')]
            dark:bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20212.png')]
          "
          style={{
            backgroundPosition: "bottom,right bottom",
            backgroundSize: "100%,80%",
            height: "200px",
          }}
        >
          <div className="w-60 flex flex-col -mt-20 md:w-80 md:ml-70">
            <h1 className="text-sm font-bold md:text-3xl dark:text-gray-400 text-gray-700">Your Workflow</h1>
            <p className="mt-2 max-w-md text-xs md:text-sm dark:text-gray-400 text-gray-700">
              Automate repetitive tasks and streamline your workflow with our
              powerful automation features. Reduce manual effort, eliminate
              error
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worlflow;
