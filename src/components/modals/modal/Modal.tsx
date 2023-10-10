import React, { useRef } from 'react';
import useOnClickOutside from '../../../utils/hooks/useOnClickOutside';
import { IModal } from '../../../types/IModal';
import { ModalBox, ModalOwerlay } from './Modal.styled';

const Modal = ({ children, isVisible, toggle }: IModal) => {
  const divRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(divRef, () => toggle(false));
  return (
    <>
      {isVisible && (
        <ModalOwerlay>
          <ModalBox ref={divRef}>{children}</ModalBox>
        </ModalOwerlay>
      )}
    </>
  );
};

export default Modal;
