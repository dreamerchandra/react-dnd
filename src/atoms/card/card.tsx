import { FC, ReactNode } from 'react'
import style from './card.module.scss'


interface CardHeaderProps {
  title: ReactNode,
  SubHeader?: ReactNode,
}

export const CardHeader: FC<CardHeaderProps> = ({ title, SubHeader }) => {
  return (
    <div className={style.header}>
      <h2>{title}</h2>
      {SubHeader}
    </div>
  );
}


interface CardProps {
  Header: ReturnType<typeof CardHeader>;
  Body: ReactNode;
  className?: string;
  isDragging?: boolean;
}

export const Card: FC<CardProps> = ({ Header, Body, className, isDragging }) => {
  return (
    <div
      className={`${style.card} ${className} ${isDragging && style.dragging}`}
    >
      {Header}
      {Body}
    </div>
  );
};
