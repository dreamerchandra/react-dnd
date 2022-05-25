import faker from "@faker-js/faker";
import { FC } from "react";
import { Ninja, NinjaRank } from "../../common/types/UserType";
import { NinjaCard } from "../../molecules/NinjaCard";
import { RankList } from "../../molecules/RankList";
import style from "./canvas.module.scss";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrop } from "react-dnd";
import { useToCreateDragUtil } from "../../hooks/drag";
import { Card } from "../../atoms/card";

const NoOfItems = 15;
const ranks = Object.values(NinjaRank);

const random = (max: number): number=> Math.floor(Math.random() * 1000) % max


const getList = (): Ninja[] => {
  let users: Ninja[] = []
  for (let i = 0; i < NoOfItems; i++) {
    const randomRank = ranks[random(ranks.length)];
    users.push({
      id: Math.random()+'',
      name: faker.name.firstName(),
      profilePic: faker.image.people(),
      rank: randomRank,
      missionCompleted: random(100)
    });
  }
  return users;
}

export const Canvas: FC = () => {
  const { cards: ninjas, findCard, moveCard } = useToCreateDragUtil(getList());
    const [, drop] = useDrop(() => ({ accept: 'ninja' }));

  return (
    <div ref={drop}>
      <section className={style.rankList}>
        {ranks.map((rank) => (
          <RankList rank={rank}>
            {ninjas
              .filter((ninja) => ninja.rank === rank)
              .map((ninja) => (
                <NinjaCard {...ninja} findCard={findCard} moveCard={moveCard} />
              ))}
          </RankList>
        ))}
      </section>
    </div>
  );
}