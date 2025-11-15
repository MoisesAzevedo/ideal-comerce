'use client';
import React from 'react';
import Modal from './Modal';
import type { ConfirmationModalProps } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../../Modal.module.scss'

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

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Image src={'/icons/Check.svg'} alt="Check" width={90} height={90} className={styles.check} />
        <h3 className="text-lg phone:text-xl font-semibold">
          {productName} foi adicionado à sua mochila.
        </h3>
        {productName && (
          <p className="text-sm text-[#333]">
            O produto <strong>{productName} </strong> está na mochila.
          </p>
        )}

      

        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 phone:flex-none phone:px-4 phone:py-2 px-3 py-2 bg-gray-100 rounded text-sm phone:text-base"
          >
            Continuar comprando
          </button>

            <button
            type="button"
            onClick={handleViewCart}
            className="flex-1 phone:flex-none phone:px-4 phone:py-2 px-3 py-2 bg-[#495949] text-white rounded text-sm phone:text-base"
          >
            Ver mochila
          </button>
        </div>
      </div>
    </Modal>
  );
}
