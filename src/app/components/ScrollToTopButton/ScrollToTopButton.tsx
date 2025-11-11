"use client";

import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      data-name="scroll-to-top"
      className={`fixed bottom-4 phone:bottom-6 right-4 phone:right-6 z-50 w-10 phone:w-12 h-10 phone:h-12 bg-[#495949] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#2b4d2b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#495949] focus:ring-opacity-50 ${
        visible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 phone:w-5 h-4 phone:h-5 mx-auto"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
