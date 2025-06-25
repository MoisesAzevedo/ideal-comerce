import React from "react";
import IconTextItem from "./IconTextItem";

const items = [
  {
    icon: "/icons/vantagens/escudo.svg.svg",
    alt: "Escudo svg",
    text: "Compra Segura",
    iconClassName: "w-5 h-5",
    textClassName:
      "ml-2 font-teko font-light text-black text-base tracking-[2.00px] leading-[normal] whitespace-nowrap"
  },
  {
    icon: "/icons/vantagens/dolar.svg",
    alt: "Dolar",
    text: "Melhores Preços",
    iconClassName: "w-4 h-4",
    textClassName:
      "ml-2 font-teko font-light text-black text-base tracking-[2.00px] leading-[normal] whitespace-nowrap"
  },
  {
    icon: "/icons/vantagens/like.svg",
    alt: "Like",
    text: "Satisfação Garantida",
    iconClassName: "w-5 h-5",
    textClassName:
      "ml-2 font-teko font-light text-black text-base tracking-[2.00px] leading-[normal]"
  },
  {
    icon: "/icons/vantagens/truck.svg",
    alt: "Truck",
    text: "Frete Rápido",
    iconClassName: "w-5 h-5",
    textClassName:
      "ml-2 font-teko font-light text-black text-base tracking-[2.00px] leading-[normal]"
  },
  {
    icon: "/icons/vantagens/second_medal.svg",
    alt: "Second medal",
    text: "Qualidade Militar",
    iconClassName: "w-5 h-5",
    textClassName:
      "ml-2 font-teko font-light text-black text-base tracking-[2.00px] leading-[normal]"
  }
];

export const Frame: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white py-1 border-b border-gray-200 items-end">
      <div className="flex gap-8 items-end">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-end h-full">
            <IconTextItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
