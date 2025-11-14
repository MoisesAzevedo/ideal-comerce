'use client';
import { useState, useCallback } from 'react';

export function useModal(initial = false) {
  const [open, setOpen] = useState<boolean>(initial);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return { open, openModal, closeModal } as const;
}

export default useModal;
