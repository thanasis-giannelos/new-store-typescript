import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  onClick: () => void,
  children: React.ReactNode
};

const Button: React.FC<ButtonProps> = ({onClick, children}) => {

  return (
    <button 
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;