import React, { ReactNode } from 'react';
import classes from './ModalBody.module.css';

type ModalBodyProps = { 
  onClick: (e: React.MouseEvent<HTMLElement>) => void, 
  children: ReactNode
};

const ModalBody: React.FC<ModalBodyProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={classes.body}>
      {children}
    </div>
  );
};

export default ModalBody;