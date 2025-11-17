"use client";
import React, { useEffect, useRef, useState } from "react";
import type { ConfirmationModalProps } from "./types";
import { useRouter } from "next/navigation";


export default function ConfirmationModal({
  open,
  onClose,
  productName,
  onViewCart,
  productPrice,
  subtotal,
}: ConfirmationModalProps) {
  const router = useRouter();

  const handleViewCart = () => {
    onClose();
    if (onViewCart) return onViewCart();
    router.push('/Carrinho');
  };

  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const unmountTimer = useRef<number | null>(null);
  const ANIM_DURATION = 300; // ms
  const AUTO_CLOSE = 4000; // ms

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      // next tick to allow mount -> animate
      requestAnimationFrame(() => setVisible(true));

      // auto close
      closeTimer.current = window.setTimeout(() => {
        setVisible(false);
        unmountTimer.current = window.setTimeout(() => {
          setIsMounted(false);
          onClose();
        }, ANIM_DURATION);
      }, AUTO_CLOSE);
    }

    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      if (unmountTimer.current) window.clearTimeout(unmountTimer.current);
    };
  }, [open, onClose]);

  const startClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setVisible(false);
    if (unmountTimer.current) window.clearTimeout(unmountTimer.current);
    unmountTimer.current = window.setTimeout(() => {
      setIsMounted(false);
      onClose();
    }, ANIM_DURATION);
  };

  if (!isMounted) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div
        role="status"
        className={`w-[500px] max-w-[90vw] h-[500px] max-h-[80vh] rounded-2xl p-6 phone:p-8 flex items-center justify-center shadow-2xl overflow-hidden bg-white transform transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
        <h3 className="text-lg phone:text-xl font-semibold">
          {productName} foi adicionado à sua mochila.
        </h3>
        {productName && (
          <p className="text-sm text-[#333]">
            O produto <strong>{productName} </strong> está na mochila.
          </p>
        )}

      

        <div className="flex flex-col phone:flex-row items-center gap-3 mt-4 w-full">
          <button
            type="button"
            onClick={() => startClose()}
            className="w-full phone:flex-1 phone:px-5 phone:py-3 px-4 py-2 bg-gray-100 rounded-md text-sm phone:text-base shadow-sm hover:shadow-md hover:bg-gray-200 transition-colors duration-150 cursor-pointer"
          >
            Continuar comprando
          </button>

          <button
            type="button"
            onClick={() => {
              handleViewCart();
              startClose();
            }}
            className="w-full phone:flex-1 phone:px-5 phone:py-3 px-4 py-2 bg-[#495949] text-white rounded-md text-sm phone:text-base shadow-sm hover:shadow-md hover:bg-[#3f4b49] transition-colors duration-150 cursor-pointer"
          >
            Ver mochila
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
