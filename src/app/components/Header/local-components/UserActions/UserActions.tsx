"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./UserActions.module.scss";
import { getAssetPath } from "@/utils/paths";
import { Tooltip } from "react-tooltip";

export default function UserActions() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip(tooltipId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className={styles.userActions}>
      {/* Conta */}
      <button
        className={styles.actionButton}
        onMouseEnter={() => handleMouseEnter("conta")}
        onMouseLeave={handleMouseLeave}
        data-tooltip-id="conta-tooltip"
        data-tooltip-content="Conta"
      >
        <Image
          src={getAssetPath("/icons/military-user.svg")}
          alt="Conta"
          width={20}
          height={20}
          className={styles.actionIcon}
        />
      </button>
      {/* Favoritos */}
      <button
        className={styles.actionButton}
        onMouseEnter={() => handleMouseEnter("favoritos")}
        onMouseLeave={handleMouseLeave}
        data-tooltip-id="favoritos-tooltip"
        data-tooltip-content="Favoritos"
      >
        <Image
          src={getAssetPath("/icons/medal.svg")}
          alt="Favoritos"
          width={20}
          height={20}
          className={styles.actionIcon}
        />
      </button>
      {/* Carrinho */}
      <button
        className={styles.actionButton}
        onMouseEnter={() => handleMouseEnter("carrinho")}
        onMouseLeave={handleMouseLeave}
        data-tooltip-id="carrinho-tooltip"
        data-tooltip-content="Carrinho"
      >
        <Image
          src={getAssetPath("/icons/bag.svg")}
          alt="Carrinho"
          width={20}
          height={20}
          className={styles.actionIcon}
        />
      </button>{" "}
      {/* Tooltips */}
      <Tooltip
        id="conta-tooltip"
        place="bottom"
        isOpen={activeTooltip === "conta"}
        style={{
          backgroundColor: "rgba(0, 0, 0)",
          color: "white",
          fontSize: "12px",
          padding: "6px 10px",
          borderRadius: "4px"
        }}
      />
      <Tooltip
        id="favoritos-tooltip"
        place="bottom"
        isOpen={activeTooltip === "favoritos"}
        style={{
          backgroundColor: "rgba(0, 0, 0)",
          color: "white",
          fontSize: "12px",
          padding: "6px 10px",
          borderRadius: "4px"
        }}
      />
      <Tooltip
        id="carrinho-tooltip"
        place="bottom"
        isOpen={activeTooltip === "carrinho"}
        style={{
          backgroundColor: "rgba(0, 0, 0)",
          color: "white",
          fontSize: "12px",
          padding: "6px 10px",
          borderRadius: "4px"
        }}
      />
    </div>
  );
}
