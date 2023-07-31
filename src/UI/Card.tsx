import React, { ReactNode } from 'react';
import classes from './Card.module.css';

type CardProps = {
  children: ReactNode
};

const Card: React.FC<CardProps> = props => <div className={classes.card}>{props.children}</div>;

export default Card;