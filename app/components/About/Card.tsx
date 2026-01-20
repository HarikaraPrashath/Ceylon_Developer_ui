import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
    <div className="max-w-[1440px] mx-auto  bg-white text-black dark:bg-black dark:text-white">
      <div className="xl:hidden h-[1830px]  sm:h-[1498px] md:h-[1000px] lg:h-[1100px]">
        <h1 className="mt-10 mx-auto
        w-[302px] h-[106px] font-[500] text-[36px] leading-[35px]  text-center
        sm:w-[430px] sm:h-[100px] sm:font-[500] sm:text-[36px] sm:leading-[40px]
        md:w-[477px] md:h-[100px] md:font-[500] md:text-[40px] md:leading-[50px]
        ">
          Discover our{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">talented{" "}</span>
          and{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">Dedicated{" "}</span>{" "}
          team{" "}
        </h1>

        <div className=" ">
          <div className=" md:flex md:flex-row md:justify-center md:gap-2 ">
            {/* show for mobile screen  */}
            {/* md screen  */}
            {/* md screen show 1st div  */}
            <div>
              <div className="bg-gray-100 dark:bg-gray-900 mt-10
            w-[333px] h-[361px] rounded-[20px] p-[14px] gap-[15px]
            sm:w-[531px] sm:h-[606px] sm:rounded-[25px] sm:p-[25px] sm:gap-[25px]
            md:w-[332px] md:h-[377px] md:rounded-[15px] md:p-[15px] md:gap-[15px]
            lg:w-[378px] lg:h-[435px] lg:rounded-[20px] lg:p-[15px] lg:gap-[15px]
            ">
                <Image
                  src="/Images/Team Image.png"
                  alt="Team Image"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto
                w-[305px] h-[241px] rounded-[15px]
                sm:w-[436px] sm:h-[386px] sm:rounded-[25px]
                md:w-[270px] md:h-[239px] md:rounded-[15px]
                lg:w-[322px] lg:h-[286px] lg:rounded-[15px]
                "
                />
                <div className="flex flex-row bg-gray-200 dark:bg-gray-800 mx-auto gap-[60px]
              w-[305px] h-[77px] rounded-[13.39px] py-[10px] px-[15px] mt-5
              sm:w-[481px] sm:h-[145px] sm:rounded-[20px] sm:p-[20px] sm:gap-[40px] 
              md:w-[292px] md:h-[93px] md:rounded-[12px] md:p-[12px] md:gap-[25px]  
              lg:w-[348px] lg:h-[104px] lg:rounded-[15px] lg:p-[15px] lg:gap-[30px]  
              ">
                  <div className="md:mt-3">
                    <h1 className="w-[128px] h-[25px] font-[700] text-[18px] leading-[25px]
                  sm:w-[274px] sm:h-[40px] sm:font-[700] sm:text-[30px] sm:leading-[40px]
                  md:w-[170px] md:h-[24px] md:font-[400] md:text-[20px] md:leading-[24px] 
                  lg:w-[202px] lg:h-[26px] lg:font-[400] lg:text-[22px] lg:leading-[26px] 
                  ">Michael Raven</h1>
                    <h1 className="
                  w-[128px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[273.19px] sm:h-[24px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-5
                  md:w-[169.17px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-2
                  lg:w-[202px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-2
                  ">CEO & Co-Founder</h1>
                  </div>
                  <div>
                    <Image
                      src="/Images/iconsUser.png"
                      alt="iconsUser"
                      width={200}
                      height={200}
                      priority
                      className="mx-auto mt-2 w-[87px] h-[29.46px]
                   sm:w-[127px] sm:h-[47px] sm:mt-5
                   md:w-[73px] md:h-[27px] md:mt-5
                   lg:w-[86px] lg:h-[33px] lg:mt-5 lg:rounded-[5.58px]  lg:border-[0.98px] lg:gap-[11.17px]
                    "
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 mt-10
            w-[333px] h-[361px] rounded-[20px] p-[14px] gap-[15px]
            sm:w-[531px] sm:h-[606px] sm:rounded-[25px] sm:p-[25px] sm:gap-[25px]
            md:w-[332px] md:h-[377px] md:rounded-[15px] md:p-[15px] md:gap-[15px]
            lg:w-[378px] lg:h-[435px] lg:rounded-[20px] lg:p-[15px] lg:gap-[15px]
            ">
                <Image
                  src="/Images/Team Image.png"
                  alt="Team Image"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto
                w-[305px] h-[241px] rounded-[15px]
                sm:w-[436px] sm:h-[386px] sm:rounded-[25px]
                md:w-[270px] md:h-[239px] md:rounded-[15px]
                lg:w-[322px] lg:h-[286px] lg:rounded-[15px]
                "
                />
                <div className="flex flex-row bg-gray-200 dark:bg-gray-800 mx-auto gap-[60px]
              w-[305px] h-[77px] rounded-[13.39px] py-[10px] px-[15px] mt-5
              sm:w-[481px] sm:h-[145px] sm:rounded-[20px] sm:p-[20px] sm:gap-[40px] 
              md:w-[292px] md:h-[93px] md:rounded-[12px] md:p-[12px] md:gap-[25px]  
               lg:w-[348px] lg:h-[104px] lg:rounded-[15px] lg:p-[15px] lg:gap-[30px]  
              ">
                  <div className="md:mt-3">
                    <h1 className="w-[128px] h-[25px] font-[700] text-[18px] leading-[25px]
                  sm:w-[274px] sm:h-[40px] sm:font-[700] sm:text-[30px] sm:leading-[40px]
                  md:w-[170px] md:h-[24px] md:font-[400] md:text-[20px] md:leading-[24px] 
                  lg:w-[202px] lg:h-[26px] lg:font-[400] lg:text-[22px] lg:leading-[26px]
                  ">Michael Raven</h1>
                    <h1 className="
                  w-[128px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[273.19px] sm:h-[24px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-5
                  md:w-[169.17px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-2
                  lg:w-[202px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-2
                  ">CEO & Co-Founder</h1>
                  </div>
                  <div>
                    <Image
                      src="/Images/iconsUser.png"
                      alt="iconsUser"
                      width={200}
                      height={200}
                      priority
                      className="mx-auto mt-2 w-[87px] h-[29.46px]
                   sm:w-[127px] sm:h-[47px] sm:mt-5
                   md:w-[73px] md:h-[27px] md:mt-5
                    lg:w-[86px] lg:h-[33px] lg:mt-5 lg:rounded-[5.58px]  lg:border-[0.98px] lg:gap-[11.17px]
                    "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* md screen show 2nd div  */}
            <div>

              <div className="bg-gray-100 dark:bg-gray-900 mt-10 hidden md:block
            w-[333px] h-[361px] rounded-[20px] p-[14px] gap-[15px]
            sm:w-[531px] sm:h-[606px] sm:rounded-[25px] sm:p-[25px] sm:gap-[25px]
            md:w-[332px] md:h-[377px] md:rounded-[15px] md:p-[15px] md:gap-[15px]
            lg:w-[378px] lg:h-[435px] lg:rounded-[20px] lg:p-[15px] lg:gap-[15px]
            ">
                <Image
                  src="/Images/Team Image.png"
                  alt="Team Image"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto
                w-[305px] h-[241px] rounded-[15px]
                sm:w-[436px] sm:h-[386px] sm:rounded-[25px]
                md:w-[270px] md:h-[239px] md:rounded-[15px]
                lg:w-[322px] lg:h-[286px] lg:rounded-[15px]
                "
                />
                <div className="flex flex-row bg-gray-200 dark:bg-gray-800 mx-auto gap-[60px]
              w-[305px] h-[77px] rounded-[13.39px] py-[10px] px-[15px] mt-5
              sm:w-[481px] sm:h-[145px] sm:rounded-[20px] sm:p-[20px] sm:gap-[40px] 
              md:w-[292px] md:h-[93px] md:rounded-[12px] md:p-[12px] md:gap-[25px]  
               lg:w-[348px] lg:h-[104px] lg:rounded-[15px] lg:p-[15px] lg:gap-[30px]  
              ">
                  <div className="md:mt-3">
                    <h1 className="w-[128px] h-[25px] font-[700] text-[18px] leading-[25px]
                  sm:w-[274px] sm:h-[40px] sm:font-[700] sm:text-[30px] sm:leading-[40px]
                  md:w-[170px] md:h-[24px] md:font-[400] md:text-[20px] md:leading-[24px]
                  lg:w-[202px] lg:h-[26px] lg:font-[400] lg:text-[22px] lg:leading-[26px] 
                  ">Michael Raven</h1>
                    <h1 className="
                  w-[128px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[273.19px] sm:h-[24px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-5
                  md:w-[169.17px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-2
                  lg:w-[202px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-2
                  ">CEO & Co-Founder</h1>
                  </div>
                  <div>
                    <Image
                      src="/Images/iconsUser.png"
                      alt="iconsUser"
                      width={200}
                      height={200}
                      priority
                      className="mx-auto mt-2 w-[87px] h-[29.46px]
                   sm:w-[127px] sm:h-[47px] sm:mt-5
                   md:w-[73px] md:h-[27px] md:mt-5
                    lg:w-[86px] lg:h-[33px] lg:mt-5 lg:rounded-[5.58px]  lg:border-[0.98px] lg:gap-[11.17px]
                    "
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 mt-10 hidden md:block
            w-[333px] h-[361px] rounded-[20px] p-[14px] gap-[15px]
            sm:w-[531px] sm:h-[606px] sm:rounded-[25px] sm:p-[25px] sm:gap-[25px]
            md:w-[332px] md:h-[377px] md:rounded-[15px] md:p-[15px] md:gap-[15px]
            lg:w-[378px] lg:h-[435px] lg:rounded-[20px] lg:p-[15px] lg:gap-[15px]
            ">
                <Image
                  src="/Images/Team Image.png"
                  alt="Team Image"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto
                w-[305px] h-[241px] rounded-[15px]
                sm:w-[436px] sm:h-[386px] sm:rounded-[25px]
                md:w-[270px] md:h-[239px] md:rounded-[15px]
                lg:w-[322px] lg:h-[286px] lg:rounded-[15px]
                "
                />
                <div className="flex flex-row bg-gray-200 dark:bg-gray-800 mx-auto gap-[60px]
              w-[305px] h-[77px] rounded-[13.39px] py-[10px] px-[15px] mt-5
              sm:w-[481px] sm:h-[145px] sm:rounded-[20px] sm:p-[20px] sm:gap-[40px] 
              md:w-[292px] md:h-[93px] md:rounded-[12px] md:p-[12px] md:gap-[25px]  
               lg:w-[348px] lg:h-[104px] lg:rounded-[15px] lg:p-[15px] lg:gap-[30px]  
              ">
                  <div className="md:mt-3">
                    <h1 className="w-[128px] h-[25px] font-[700] text-[18px] leading-[25px]
                  sm:w-[274px] sm:h-[40px] sm:font-[700] sm:text-[30px] sm:leading-[40px]
                  md:w-[170px] md:h-[24px] md:font-[400] md:text-[20px] md:leading-[24px] 
                  lg:w-[202px] lg:h-[26px] lg:font-[400] lg:text-[22px] lg:leading-[26px]
                  ">Michael Raven</h1>
                    <h1 className="
                  w-[128px] h-[20px] font-[400] text-[14px] leading-[20px]
                  sm:w-[273.19px] sm:h-[24px] sm:font-[400] sm:text-[20px] sm:leading-[24px] sm:mt-5
                  md:w-[169.17px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px] md:mt-2
                  lg:w-[202px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px] lg:mt-2
                  ">CEO & Co-Founder</h1>
                  </div>
                  <div>
                    <Image
                      src="/Images/iconsUser.png"
                      alt="iconsUser"
                      width={200}
                      height={200}
                      priority
                      className="mx-auto mt-2 w-[87px] h-[29.46px]
                   sm:w-[127px] sm:h-[47px] sm:mt-5
                   md:w-[73px] md:h-[27px] md:mt-5
                    lg:w-[86px] lg:h-[33px] lg:mt-5 lg:rounded-[5.58px]  lg:border-[0.98px] lg:gap-[11.17px]
                    "
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="bg-custom-cyan  flex flex-row text-black dark:text-black  justify-center
        w-[113px] h-[38px] rounded-[4.79px] py-[9px] px-[18px] mx-auto mt-5
        sm:w-[161px] sm:h-[51px] sm:rounded-[10px] sm:py-[13px] sm:px-[25px]
        md:w-[166px] md:h-[51px] md:rounded-[10px] md:py-[13px] md:px-[25px]
        lg:w-[177px] lg:h-[51px] lg:rounded-[10px] lg:py-[13px] lg:px-[25px]
        ">
          <button type="button" className="
          w-[63px] h-[20px] font-[400] text-[14px] leading-[20px]
          sm:w-[81px] sm:h-[20px] sm:font-[400] sm:text-[15px] sm:leading-[20px]
          md:w-[86px] md:h-[22px] md:font-[400] md:text-[16px] md:leading-[22px]
          lg:w-[97px] lg:h-[25px] lg:font-[400] lg:text-[18px] lg:leading-[25px]
          ">
            View All
          </button>

          <ArrowUpRight className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
        </div>



      </div>
      <div className="hidden xl:block xl:mt-20">
        <h1 className=" xl:mx-auto xl:text-center
               xl:w-[1010px] xl:h-[120px] xl:font-[500] xl:text-[64px] xl:leading-[60px]">
          Discover our{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">talented</span>
          and{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">Dedicated</span>
          team
        </h1>

        <div className="xl:mt-10">
          <div className=" xl:flex xl:flex-row xl:justify-center xl:gap-2  xl:w-[1089px] xl:h-[403px] 2xl:gap-[16px]">
            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px] 2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px]  2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px] 2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" xl:flex xl:flex-row xl:justify-center xl:gap-2  xl:w-[1089px] xl:h-[403px] xl:mt-5 2xl:gap-[16px]">
            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px] 2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px] 2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 
            xl:w-[343px] xl:h-[403] xl:rounded-[20] xl:p-[15px] xl:gap-[15px]
            ">
              <Image
                src="/Images/Team Image.png"
                alt="Team Image"
                width={200}
                height={200}
                priority
                className="mx-auto
                xl:w-[289px] xl:h-[258px] xl:rounded-[15px] 
                "
              />
              <div className="flex flex-row bg-gray-200 dark:bg-gray-800  mx-auto  xl:mt-4
              xl:w-[313px] xl:h-[102px] xl:rounded-[15px] xl:p-[15px] xl:gap-[25px]
              ">
                <div>
                  <h1 className="f
                  xl:w-[180px] xl:h-[28px] xl:text-[24px] xl:font-[700] xl:leading-[28px]
                  ">Michael Raven</h1>
                  <h1 className="
                  xl:w-[180px] xl:h-[28px] xl:text-[20px] xl:font-[400] xl:leading-[28px]
                ">CEO & Co-Founder</h1>
                </div>
                <div>
                  <Image
                    src="/Images/iconsUser.png"
                    alt="iconsUser"
                    width={200}
                    height={200}
                    priority
                    className="mx-auto 
                    xl:w-[78px] xl:h-[30px] xl:rounded-[5px] 2xl:mt-4
                    "
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-custom-cyan flex flex-row mx-auto text-black dark:text-black justify-center 
        xl:w-[188px] xl:h-[54px] xl:rounded-[10px] xl:py-[13px] xl:px-[25px] xl:mt-10
        ">
          <button type="button" className="hidden sm:block">
            View All
          </button>
          <button type="button" className="block sm:hidden">
            Learn More
          </button>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
