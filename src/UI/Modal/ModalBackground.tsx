import classes from './ModalBackground.module.css';

type ModalBackgroundProps = {
  onClick: () => void, 
  children: React.ReactNode
};

const ModalBackground: React.FC<ModalBackgroundProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={classes.background}>
      {children}
    </div>
  );
};

export default ModalBackground;