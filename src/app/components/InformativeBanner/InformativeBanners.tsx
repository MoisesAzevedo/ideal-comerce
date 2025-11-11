import React from "react";
import { Truck, BadgePercent, ShieldCheck, MessageSquare } from "lucide-react";

const banners = [
  {
    icon: <Truck size={36} strokeWidth={1.5} />, // Entrega Rápida
    title: "Entrega Rápida",
    description: "Para todo o Estado de Minas Gerais"
  },
  {
    icon: <BadgePercent size={36} strokeWidth={1.5} />, // 5% Off
    title: "5% Off",
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
  <section data-name="informative-banners" className="font-sans bg-transparent py-2 phone:py-4 min-h-[60px] mt-6 phone:mt-8">
    <div data-name="informative-container" className="max-w-6xl mx-auto px-2 phone:px-4">
      <div data-name="informative-grid" className="grid grid-cols-1 phone:grid-cols-2 lg:grid-cols-4 gap-2 phone:gap-3 justify-center">
        {banners.map((banner, idx) => (
          <div 
            data-name={`informative-item-${idx}`} 
            className="flex items-center bg-[#f3f3f3] rounded shadow-sm p-2 phone:p-3 sm:p-4 min-w-0 gap-2 phone:gap-3" 
            key={idx}
          >
            <div data-name={`informative-icon-${idx}`} className="flex items-center justify-center bg-transparent rounded-sm w-8 phone:w-10 h-8 phone:h-10 flex-shrink-0">
              <div className="w-6 phone:w-8 h-6 phone:h-8">
                {React.cloneElement(banner.icon, { 
                  size: 24,
                  strokeWidth: 1.5,
                  className: "w-full h-full"
                })}
              </div>
            </div>
            <div data-name={`informative-texts-${idx}`} className="min-w-0 flex-1">
              <h3 className="text-sm phone:text-base font-bold mb-0 phone:mb-1 leading-tight">{banner.title}</h3>
              <p className="text-xs phone:text-sm text-[#555] m-0 leading-tight">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InformativeBanners;
