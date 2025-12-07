'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modalRoot');
  if (!modalRoot) return null;

  return createPortal(
    <div
      id="backdrop"
      className="fixed flex inset-0 w-screen h-screen overflow-hidden z-999
        left-0 top-0 items-center justify-center bg-black/60 p-[20px]
        md:p-[40px]"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-[20px] shadow-lg max-w-[800px] w-full
          h-full max-h-[85%] animate-modal-fade overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
