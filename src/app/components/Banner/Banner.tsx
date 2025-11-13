import React from "react";
import { getAssetPath } from "@/utils/paths";

const Frame = () => {
  const textContent = {
    topLine: "Excelência em Uniformes e Acessórios Táticos de",
    mainHeading: {
      left: "ALTA",
      right: "PERFORMANCE."
    },
    bottomLine: "Sua Base Completa em Roupas e Equipamentos Militares."
  };

  return (
    <div className="font-sans relative z-10 flex flex-col lg:flex-row justify-center lg:justify-end w-full mx-4 lg:mr-24 px-4 lg:px-0">
      <div className="w-full lg:w-[661px] max-w-full">
        <div className="relative h-auto lg:h-[246px] overflow-hidden text-center lg:text-left">
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-4 py-8">
            <div className="font-teko font-normal text-white text-sm phone:text-base tracking-wide text-center max-w-xs phone:max-w-sm">
              {textContent.topLine}
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#1e2d1e] px-4 phone:px-6 py-2 phone:py-3">
                <div className="font-teko font-bold text-white text-3xl phone:text-4xl tracking-wide whitespace-nowrap">
                  {textContent.mainHeading.left}
                </div>
              </div>
              <div className="font-teko font-bold text-white text-3xl phone:text-4xl tracking-wide whitespace-nowrap">
                {textContent.mainHeading.right}
              </div>
            </div>
            
            <div className="font-teko font-normal text-white text-sm phone:text-base tracking-wide text-center max-w-xs phone:max-w-sm">
              {textContent.bottomLine}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Bottom Line */}
            <div className="absolute top-[189px] left-[104px] font-teko font-normal text-white text-xl tracking-[2px] leading-normal">
              {textContent.bottomLine}
            </div>
            
            {/* Right Heading */}
            <div className="absolute w-[410px] top-[85px] left-[226px] font-teko font-bold text-white text-6xl tracking-[2px] leading-normal whitespace-nowrap">
              {textContent.mainHeading.right}
            </div>
            
            {/* Top Line */}
            <div className="absolute top-[34px] left-[130px] font-teko font-normal text-white text-xl tracking-[2px] leading-normal">
              {textContent.topLine}
            </div>
            
            {/* Left Box and Heading */}
            <div className="absolute w-[171px] h-[77px] top-[89px] left-[7px] bg-[#1e2d1e]">
              <div className="absolute w-[132px] top-[-1px] left-[20px] font-teko font-bold text-white text-6xl tracking-[2px] leading-normal whitespace-nowrap">
                {textContent.mainHeading.left}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {


  return (
    <div data-name="banner" className="w-full min-h-[300px] phone:min-h-[350px] sm:min-h-[400px] lg:min-h-[470px] bg-cover bg-center flex items-center justify-center py-8 phone:py-10 lg:py-10 shadow-lg relative overflow-hidden">
      <div 
        data-name="banner-bg"
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("${getAssetPath('/img/banners/banner_performance.png')}")`
        }}
      />
      <div data-name="banner-frame" className="relative z-10 w-full">
        <Frame />
      </div>
    </div>
  );
};

export default Banner;
