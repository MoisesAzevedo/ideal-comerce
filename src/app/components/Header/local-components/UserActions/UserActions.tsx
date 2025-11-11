"use client";

import Image from "next/image";
import { useState } from "react";
import { getAssetPath } from "@/utils/paths";
import { Tooltip } from "react-tooltip";
import SelectArrow from "../../local-components/Navigation/SelectArrow";

export default function UserActions() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const cartCount = 0; // Substitua pelo valor real do carrinho se necessário

  return (
    <div data-name="user-actions" className="flex gap-0.5 phone:gap-1 sm:gap-2 items-center">
      {/* Conta - Oculto em mobile, visível de lg para cima */}
      <button data-name="action-account" className="hidden lg:flex items-center gap-1 bg-transparent border-none cursor-pointer transition-colors p-1 sm:p-2 rounded hover:bg-[#495949]">
        <Image
          src={getAssetPath("/icons/military-user.svg")}
          alt="Conta"
          width={20}
          height={20}
          className="brightness-0 invert w-4 phone:w-5 h-4 phone:h-5 sm:w-6 sm:h-6 transition-all hover:brightness-[10]"
        />
        <span className="text-white font-teko text-base phone:text-lg sm:text-xl tracking-wider transition-colors">Entrar</span>
        <span data-name="action-account-arrow" className="flex items-center text-white transition-colors">
          <SelectArrow color="#f8f8f8" />
        </span>
      </button>

      {/* Favoritos - Somente ícone em mobile, com texto de md para cima */}
      <button data-name="action-favorites" className="flex items-center gap-1 bg-transparent border-none cursor-pointer transition-colors p-0.5 phone:p-1 sm:p-2 rounded hover:bg-[#495949]">
        <Image
          src={getAssetPath("/icons/medal.svg")}
          alt="Favoritos"
          width={20}
          height={20}
          className="brightness-0 invert w-4 phone:w-5 h-4 phone:h-5 sm:w-6 sm:h-6 transition-all hover:brightness-[10]"
        />
        <span className="hidden md:inline text-white font-teko text-base phone:text-lg sm:text-xl tracking-wider transition-colors">Favoritos</span>
      </button>

      {/* Carrinho */}
      <button
        data-name="action-cart"
        className="flex items-center gap-1 bg-transparent border-none cursor-pointer transition-colors p-0.5 phone:p-1 sm:p-2 rounded hover:bg-[#495949] relative"
        onMouseEnter={() => setActiveTooltip("carrinho")}
        onMouseLeave={() => setActiveTooltip(null)}
        data-tooltip-id="carrinho-tooltip"
        data-tooltip-content="Carrinho"
      >
        <Image
          src={getAssetPath("/icons/bag.svg")}
          alt="Carrinho"
          width={20}
          height={20}
          className="brightness-0 invert w-4 phone:w-5 h-4 phone:h-5 sm:w-6 sm:h-6 transition-all hover:brightness-[10]"
        />
        {cartCount > 0 && (
          <span data-name="cart-badge" className="absolute -top-0.5 phone:-top-1 -right-0.5 phone:-right-1 bg-[#d6ff00] text-black text-xs phone:text-sm font-bold rounded-full w-3 phone:w-4 h-3 phone:h-4 flex items-center justify-center shadow-sm z-10">
            {cartCount}
          </span>
        )}
      </button>

      {/* Tooltip apenas para o carrinho */}
      <Tooltip
        id="carrinho-tooltip"
        place="bottom"
        isOpen={activeTooltip === "carrinho"}
        style={{
          backgroundColor: "rgba(0, 0, 0)",
          color: "white",
          fontSize: "12px",
          padding: "6px 10px",
          borderRadius: "4px",
          zIndex: 2000
        }}
      />
    </div>
  );
}
