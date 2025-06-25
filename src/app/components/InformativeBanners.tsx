import React from "react";
import { Truck, BadgePercent, ShieldCheck, MessageSquare } from "lucide-react";
import styles from "./InformativeBanners.module.scss";

const banners = [
  {
    icon: <Truck size={36} strokeWidth={1.5} />, // Entrega Rápida
    title: "Entrega Rápida",
    description: "Para todo o Estado de Minas Gerais"
  },
  {
    icon: <BadgePercent size={36} strokeWidth={1.5} />, // 5% Off
    title: "5% Off ",
    description: "Pagando no PIX"
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />, // Compra Segura
    title: "Sua compra segura",
    description: "Com o Mercado Pago"
  },
  {
    icon: <MessageSquare size={36} strokeWidth={1.5} />, // Contato exclusivo
    title: "Contato exclusivo",
    description: "Via WhatsApp"
  }
];

const InformativeBanners = () => (
  <section className={styles.sectionBanners}>
    <div className={styles.container}>
      <div className={styles.rowBanners}>
        {banners.map((banner, idx) => (
          <div className={styles.banner} key={idx}>
            <div className={styles.icon}>{banner.icon}</div>
            <div className={styles.texts}>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InformativeBanners;
