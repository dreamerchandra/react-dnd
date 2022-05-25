import { FC, ReactNode } from "react";
import { Card, CardHeader } from "../../atoms/card"
import { NinjaRank } from "../../common/types/UserType";
import style from "./rankList.module.scss";

interface Props {
  rank: NinjaRank,
  children: ReactNode,
}

export const RankList: FC<Props> = ({rank, children}) => {
  return (
    <Card
      className={style.rankList}
      Header={<CardHeader title={rank} />}
      Body={children}
    />
  );
}