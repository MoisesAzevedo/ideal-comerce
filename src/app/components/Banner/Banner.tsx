import React from "react";
import styles from "./Banner.module.scss";

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
    <div className={styles.frame}>
      <div className={styles.frameBox}>
        <div className={styles.frameContent}>
          <div className={styles.bottomLine}>{textContent.bottomLine}</div>
          <div className={styles.rightHeading}>
            {textContent.mainHeading.right}
          </div>
          <div className={styles.topLine}>{textContent.topLine}</div>
          <div className={styles.leftBox}>
            <div className={styles.leftHeading}>
              {textContent.mainHeading.left}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBg} />
      <Frame />
    </div>
  );
};

export default Banner;
