import React from "react";

const Worlflow = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block  max-w-[1440px] mx-auto">
        {/* ROW 1 */}
        <div className="flex flex-row-reverse justify-center mt-6 max-w-[1280px] mx-auto gap-6 2xl:w-[1190px] 2xl:h-[375px]">
          <div
            className="relative border border-gray-300 dark:border-gray-800 rounded-3xl
            flex flex-col justify-center p-6
            lg:w-[577px] lg:h-[329px] lg:top-[-0.03] lg:left-[-0.22px] lg:rounded-[18.33px] lg:border-[3.67px]
            xl:w-[735.29px] xl:h-[350px] xl:left-[-0px] xl:rounded-[23.39px] xl:border-[4.68px]
            2xl:w-[786.04px] 2xl:h-[374px] 2xl:left-[-0px] 2xl:rounded-[25px] 2xl:border-[5px]
            bg-no-repeat bg-left
            bg-[linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1)),url('/Images/Group%20669-light.png')]
            bg-[length:100%_100%,360px_300px]
            dark:bg-[linear-gradient(to_right,rgba(30,160,164,0.20),rgba(0,0,0,0.1)),url('/Images/Group%20669.png')]"
            
          >
            <div className="max-w-[320px]">
              <h1 className=" text-gray-800 dark:text-gray-400
              lg:w-[309px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px] lg:ml-30 lg:-mt-30
              xl:w-[481.54px] xl:h-[34px] xl:text-[28px] xl:leading-[34px] xl:ml-60 xl:-mt-30
              2xl:w-[514.78px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[100%] 2xl:ml-60 2xl:-mt-40 
              ">
                Analytics & Reporting
              </h1>
              <p className="mt-2  text-gray-800 dark:text-gray-400 lg:ml-30
              lg:w-[372px] lg:h-[100px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
              xl:w-[461.54px] xl:h-[84px] xl:text-[20px] xl:leading-[28px] xl:ml-60
              2xl:w-[500.78px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px] 2xl:ml-60
              ">
                Generate real-time reports, identify key performance indicators, and make data-driven decisions for continuous improvement.
              </p>
            </div>
          </div>

          <div
            className="border border-gray-300 dark:border-gray-800 rounded-3xl
            bg-no-repeat bg-bottom
            lg:w-[270px] lg:h-[329px] lg:rounded-[18px] lg:border-[2.2px]
            xl:w-[345.25px] xl:h-[350.61px] xl:rounded-[23.38px] xl:border-[4.68px]
            2xl:w-[369.25px] 2xl:h-[374.61px] 2xl:rounded-[25px] 2xl:border-[5px]
            bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png'),linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1))]
            dark:bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png')]"
            style={{  backgroundSize: "70%,100%,100%" }}
          >
            <div className="p-4">
              <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-400
                lg:w-[191px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px]
                xl:w-[298.32px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
                2xl:w-[319.06px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[100%]
              ">
                Project
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-400
              lg:w-[233.82px] lg:h-[100px] lg:font-[400] lg:text-[16px] lg:leading-[25px]
              xl:w-[298.32px] xl:h-[84px] xl:text-[20px] xl:leading-[28px]
              2xl:w-[319.06px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px]
              ">
                Easily organize tasks, set deadlines, and track progress in real-time with Ease.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-row-reverse justify-center mt-6 max-w-[1440px] mx-auto gap-6 2xl:w-[1190px] 2xl:h-[375px]">
          <div
            className="border border-gray-300 dark:border-gray-800 rounded-3xl
            bg-no-repeat bg-top 
            xl:w-[345.25px] xl:h-[350.61px] xl:rounded-[23.38px] xl:border-[4.68px]
            2xl:w-[369.25px] 2xl:h-[374.61px] 2xl:rounded-[25px] 2xl:border-[5px]
            lg:w-[270px] lg:h-[329px] lg:rounded-[25px] lg:border-[2px]
            xl:flex xl:flex-col xl:justify-end 
            bg-[linear-gradient(to_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
            dark:bg-[linear-gradient(to_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
            bg-[length:100%_70%,300px_170px]
            "
            
          >
            <div className="p-4 pt-2">
              <h1 className="font-bold text-xl text-gray-700 dark:text-gray-400
              lg:w-[191px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px]
               xl:w-[298.32px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
               2xl:w-[319.06px] 2xl:h-[34px] 2xl:text-[30px] 2xl:leading-[100%]
              ">
                Developer Mindset
              </h1>
              <p className="  text-gray-700 dark:text-gray-400
              lg:w-[233.82px] lg:h-[100px] lg:font-[400] lg:text-[16px] lg:leading-[25px]
              xl:w-[288.46px] xl:h-[84px] xl:text-[20px] xl:leading-[28px] 
              2xl:w-[319.06px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px] 
              ">
                Stay curious, embrace challenges, and keep learning to grow as a developer.
              </p>
            </div>
          </div>

          <div
            className="border border-gray-300 dark:border-gray-800 rounded-3xl
            bg-no-repeat
            lg:w-[577px] lg:h-[329px] lg:top-[-0.03] lg:left-[-0.22px] lg:rounded-[18.33px] lg:border-[3.67px] 
            xl:w-[735.29px] xl:h-[350px] xl:left-[-0px] xl:rounded-[23.39px] xl:border-[4.68px]
            2xl:w-[786.04px] 2xl:h-[374px] 2xl:left-[-0px] 2xl:rounded-[25px] 2xl:border-[5px]
            bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20212.png')]
            dark:bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20212.png')]"
            style={{ backgroundSize: "200%,60%",backgroundPosition: "bottom ",
            backgroundRepeat: "no-repeat" }}
          >
            <div className="p-6">
              <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-400
              lg:w-[309px] lg:h-[32px] lg:font-[400] lg:text-[26px] lg:leading-[32px]
              xl:w-[481.52px] xl:h-[34px] xl:text-[28px] xl:leading-[34px]
              2xl:w-[514.78px] 2xl:h-[36px] 2xl:text-[30px] 2xl:leading-[100%] 

              ">
                Your Workflow
              </h1>
              <p className="mt-2 lg:w-[443.57px] lg:h-[75px] lg:text-[18px] lg:leading-[25px] lg:font-[400] text-gray-700 dark:text-gray-400
              xl:w-[565.93px] xl:h-[84px] xl:text-[20px] xl:leading-[28px]
              2xl:w-[500.78px] 2xl:h-[90px] 2xl:text-[22px] 2xl:leading-[30px] 
              ">
                Automate repetitive tasks and streamline yur workflows with our powerful automation features. Reduce manual effort, eliminate errors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tab view */}
      <div className="block lg:hidden md:mx-10 sm:mx-10">
        <div
          className="
            relative border-gray-300 dark:border-gray-800  mx-auto
            w-[350px] h-[219px] rounded-[25px] border-[2px]
            sm:w-[558px] sm:h-[266px] sm:top-[-0.73px] sm:left-[-0.61px] sm:rounded-[15px] sm:border[3px]
            md:w-[650px] md:h-[309px] md:rounded-[18px] md:border-[2.2px] 
            flex flex-col justify-center mt-6 items-start p-6 text-white
            bg-no-repeat bg-left
            bg-[linear-gradient(to_right,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20669-light.png')]
            dark:bg-[linear-gradient(to_right,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20669.png')]
          "
          style={{
            backgroundSize: "100%",
          }}
        >
          <div className="w-60 flex flex-col ml-20 -mt-30 md:w-[427px]">
            <h1 className="w-[195px] h-[25px] text-[20px] leading-[25px] font-[400] dark:text-gray-400 text-gray-700
            sm:w-[265.23px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
            md:w-[309px] md:h-[30px] md:[400] md:text-[24px] md:leading-[30px]
            ">
              Analytics & Reporting
            </h1>
            <p className="w-[235px] h-[60px] font-[400] text-[12px] leading-[15px] mt-2 dark:text-gray-400 text-gray-700
            sm:w-[366.51px] sm:h-[60px] sm:text-[15px] sm:leading-[20px]
            md:w-[427px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px]
            ">
              Generate real-time reports, identify key performance indicators,
              and make data-driven decisions for continuous improvement.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-[350px] h-[290px] pt-3  mx-auto sm:gap-[28px] sm:justify-center sm:w-[558px] md:w-[651px]">
          <div
            className="
              border-gray-300 dark:border-gray-800 border-2  text-white
              w-[172px] h-[287px] rounded-[25px]
              sm:w-[265px] sm:h-[280px] sm:top-[-0.48px] sm:left-[0.39px] sm:rounded-[15px] sm:border-[3px]
              md:w-[308px] md:h-[309px] md:top-[-0.49px] md:rounded-[18.32px] md:border-[3.66px]
              bg-no-repeat bg-bottom
              bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png'),linear-gradient(to_right,rgba(33,164,164,0.2),rgba(0,0,0,0.1))]
              dark:bg-[url('/Images/Group%20681.png'),url('/Images/Mask%20group.png')]
            "
            style={{
              backgroundSize: "70%,100%,100%",
            }}
          >
            <div className="w-35 sm:w-60 p-3 flex flex-col">
              <h1 className="w-[75px] h-[25px] font-[400] text-[20px] leading-[25px] dark:text-gray-400 text-gray-700
              sm:w-[163.94px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
              md:w-[191px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px]
              ">Project</h1>
              <p className="mt-2 w-[147px] h-[80px] font-[400] text-[14px] leading-[20px] dark:text-gray-400 text-gray-700
             sm:w-[200px] sm:h-[80px] sm:text-[15px] sm:leading-[20px]
              md:w-[233.82px] md:h-[66px] md:text-[16px] md:leading-[22px]
              ">
                Easily organize tasks, set deadlines, and track progress in
                real-time with Ease.
              </p>
            </div>
          </div>

          <div
            className="
              relative border-gray-300 dark:border-gray-800 text-white
              w-[172px] h-[287px] rounded-[25px] border-[2px]
              sm:w-[265px] sm:h-[280px] sm:top-[-0.48px] sm:left-[0.39px] sm:rounded-[15px] sm:border-[3px]
              md:w-[308px] md:h-[309px] md:top-[-0.49px] md:rounded-[18.32px] md:border-[3.66px]
              bg-no-repeat bg-top
              bg-[linear-gradient(to_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
              dark:bg-[linear-gradient(to_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20679.png'),url('/Images/Mask%20group1.png')]
            "
            style={{
              backgroundSize: "100%,100%"
            }}
          >
            <div className=" p-3 flex flex-col mt-25">
              <h1 className="w-[140px] h-[50px] font-[400] text-[20px] leading-[25px] dark:text-gray-400 text-gray-700
              sm:w-[163.94px] sm:h-[28px] sm:text-[22px] sm:leading-[28px]
              md:w-[191px] md:h-[30px] md:font-[400] md:text-[24px] md:leading-[30px]
              ">
                Developer Mindset
              </h1>
              <p className="mt-2 w-[140px] h-[80px] font-[400] text-[14px] leading-[20px] dark:text-gray-400 text-gray-700
              sm:w-[200px] sm:h-[80px] sm:text-[15px] sm:leading-[20px] sm:mt-10
              md:w-[233.82px] md:h-[66px] md:text-[16px] md:leading-[22px]
              ">
                Stay curious embrace challenges, and keep learning to grow as a
                developer
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            relative border-gray-300 dark:border-gray-800  mx-auto
            flex flex-col justify-center mt-6 mb-7 items-start p-6 text-white
            w-[350px] h-[219px] rounded-[25px] border-[2px]
            sm:w-[558px] sm:h-[266px] sm:top-[-0.73px] sm:left-[-0.61px] sm:rounded-[15px] sm:border[3px]
            md:w-[650px] md:h-[309px] md:rounded-[18px] md:border-[2.2px] 
            bg-no-repeat 
            bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.6),rgba(0,0,0,0.2)),url('/Images/Group%20212.png')]
            dark:bg-[radial-gradient(circle_at_bottom,rgba(33,164,164,0.35),rgba(0,0,0,0.5)),url('/Images/Group%20212.png')]
          "
          style={{
            backgroundPosition: "bottom,right bottom",
            backgroundSize: "100%,60%,"
          }}
        >
          <div className="w-60 flex flex-col -mt-20 ">
            <h1 className=" dark:text-gray-400 text-gray-700
            w-[137px] h-[25px] font-[400] text-[20px] leading-[25px]
            sm:w-[265.23px] sm:h-[28px] sm:font-[400] sm:text-[22px] sm:leading-[28px]
            md:w-[309px] md:h-[30px] md:[400] md:text-[24px] md:leading-[30px]
            ">Your Workflow</h1>
            <p className="mt-2 w-[235px] h-[60px] font-[400] text-[12px] leading-[15px] dark:text-gray-400 text-gray-700
             sm:w-[366.51px] sm:h-[60px] sm:text-[15px] sm:leading-[20px]
              md:w-[427px] md:h-[66px] md:font-[400] md:text-[16px] md:leading-[22px]
            ">
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
