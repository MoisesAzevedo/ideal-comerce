import React from "react";
import IconTextItem from "./IconTextItem";
import { getAssetPath } from "@/utils/paths";

const items = [
  {
    icon: getAssetPath("/icons/escudo.svg"),
    alt: "Escudo svg",
    text: "Compra Segura",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-sm tracking-[1.5px] leading-tight whitespace-nowrap h-4"
  },
  {
    icon: getAssetPath("/icons/dolar.svg"),
    alt: "Dolar",
    text: "Melhores Preços",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-sm tracking-[1.5px] leading-tight whitespace-nowrap h-4"
  },
  {
    icon: getAssetPath("/icons/like.svg"),
    alt: "Like",
    text: "Satisfação Garantida",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-sm tracking-[1.5px] leading-tight h-4"
  },
  {
    icon: getAssetPath("/icons/truck.svg"),
    alt: "Truck",
    text: "Frete Rápido",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-sm tracking-[1.5px] leading-tight h-4"
  },
  {
    icon: getAssetPath("/icons/second_medal.svg"),
    alt: "Second medal",
    text: "Qualidade Militar",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-sm tracking-[1.5px] leading-tight h-4"
  }
];

export const Frame: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white py-0.5 border-b border-gray-200 items-end min-h-0">
      <div className="flex gap-6 items-end">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-end h-full">
            <IconTextItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
