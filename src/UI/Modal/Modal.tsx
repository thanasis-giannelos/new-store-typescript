import React from 'react';
import Button from '../Button/Button';
import ModalBackground from './ModalBackground';
import ModalBody from './ModalBody';

type ModalProps = {
  shouldShow: boolean,
  onRequestClose: () => void,
  children: React.ReactNode
};

const Modal: React.FC<ModalProps> = ({ shouldShow, onRequestClose, children }) => {

  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
            <Button onClick={onRequestClose}>X</Button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;