'use client';
import React from 'react';
import Modal from '@/app/Carrinho/Components/ModalConfirmation/Modal';
import type { ModalProps } from '@/app/Carrinho/Components/ModalConfirmation/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Props = ModalProps & {
  productName?: string;
};

export default function FavoriteConfirmationModal({
  open,
  onClose,
  productName,
}: Props) {
  const router = useRouter();

  const handleViewFavorites = () => {
    onClose();
    router.push('/Favoritos');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center justify-center text-center py-1">
        <Image src={'/icons/Check.svg'} alt="Check" width={90} height={90} />
        <h3 className="text-lg phone:text-xl font-semibold">
          Favorito adicionado
        </h3>
        {productName && (
          <p className="text-sm text-[#333]">
            {productName} foi adicionado aos seus favoritos.
          </p>
        )}

        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 phone:flex-none phone:px-4 phone:py-2 px-3 py-2 bg-gray-100 rounded text-sm phone:text-base"
          >
            Continuar navegando
          </button>

          <button
            type="button"
            onClick={handleViewFavorites}
            className="flex-1 phone:flex-none phone:px-4 phone:py-2 px-3 py-2 bg-[#495949] text-white rounded text-sm phone:text-base"
          >
            Ver favoritos
          </button>
        </div>
      </div>
    </Modal>
  );
}
