import { FC } from "react";
import { Card, CardHeader } from "../../atoms/card";
import { Ninja } from "../../common/types/UserType";
import style from './ninjaCard.module.scss';

export const NinjaCard:FC<Ninja> = ({name, profilePic,missionCompleted }) => {
  return (
    <Card
      className={style.ninjaCard}
      Header={<CardHeader title={name} />}
      Body={
        <div className={style.body}>
          <h6 className={style.meta}>
            Missions Completed:
            <span>{`${missionCompleted}`}</span>
          </h6>
          <img src={profilePic} />
        </div>
      }
    />
  );
}