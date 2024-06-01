'use client';

import { useState } from 'react';

export default function useModal(isOpen: boolean) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return { isModalOpen, openModal, closeModal, toggleModal };
}
