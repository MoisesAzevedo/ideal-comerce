import React from "react";
import IconTextItem from "./IconTextItem";
import { getAssetPath } from "@/utils/paths";

const items = [
  {
    icon: getAssetPath("/icons/escudo.svg"),
    alt: "Escudo svg",
    text: "Compra Segura",
    iconClassName: "w-3 phone:w-4 h-3 phone:h-4",
    textClassName:
      "ml-1 phone:ml-2 font-teko font-light text-black text-xs phone:text-sm tracking-wide phone:tracking-[1.5px] leading-tight whitespace-nowrap h-3 phone:h-4"
  },
  {
    icon: getAssetPath("/icons/dolar.svg"),
    alt: "Dolar",
    text: "Melhores Preços",
    iconClassName: "w-3 phone:w-4 h-3 phone:h-4",
    textClassName:
      "ml-1 phone:ml-2 font-teko font-light text-black text-xs phone:text-sm tracking-wide phone:tracking-[1.5px] leading-tight whitespace-nowrap h-3 phone:h-4"
  },
  {
    icon: getAssetPath("/icons/like.svg"),
    alt: "Like",
    text: "Satisfação Garantida",
    iconClassName: "w-3 phone:w-4 h-3 phone:h-4",
    textClassName:
      "ml-1 phone:ml-2 font-teko font-light text-black text-xs phone:text-sm tracking-wide phone:tracking-[1.5px] leading-tight h-3 phone:h-4 hidden sm:block"
  },
  {
    icon: getAssetPath("/icons/truck.svg"),
    alt: "Truck",
    text: "Frete Rápido",
    iconClassName: "w-3 phone:w-4 h-3 phone:h-4",
    textClassName:
      "ml-1 phone:ml-2 font-teko font-light text-black text-xs phone:text-sm tracking-wide phone:tracking-[1.5px] leading-tight h-3 phone:h-4"
  },
  {
    icon: getAssetPath("/icons/second_medal.svg"),
    alt: "Second medal",
    text: "Qualidade Militar",
    iconClassName: "w-3 phone:w-4 h-3 phone:h-4",
    textClassName:
      "ml-1 phone:ml-2 font-teko font-light text-black text-xs phone:text-sm tracking-wide phone:tracking-[1.5px] leading-tight h-3 phone:h-4 hidden md:block"
  }
];

export const Frame: React.FC = () => {
  return (
    <div data-name="top-frame" className="w-full flex justify-center bg-white py-0.5 phone:py-1 border-b border-gray-200 items-end min-h-0">
      <div data-name="top-frame-inner" className="flex gap-2 phone:gap-3 sm:gap-4 md:gap-6 items-end px-2 phone:px-4">
        {items.map((item, idx) => (
          <div data-name={`top-item-${idx}`} key={idx} className="flex items-end h-full">
            <IconTextItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
