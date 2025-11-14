'use client';
import React, { useEffect } from 'react';
import type { ModalProps } from './types';

export function Modal({
  open,
  onClose,
  children,
}: React.PropsWithChildren<ModalProps>) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 phone:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        role="document"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md phone:max-w-lg bg-white rounded-lg shadow-lg p-4 phone:p-6"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
