import faker from "@faker-js/faker";
import { FC } from "react";
import { Ninja, NinjaRank } from "../../common/types/UserType";
import { NinjaCard } from "../../molecules/NinjaCard";
import { RankList } from "../../molecules/RankList";
import style from "./canvas.module.scss";

const NoOfItems = 5;
const ranks = Object.values(NinjaRank);

const random = (max: number): number=> Math.floor(Math.random() * 1000) % max


const getList = (): Ninja[] => {
  let users: Ninja[] = []
  for (let i = 0; i < NoOfItems; i++) {
    const randomRank = ranks[random(3)];
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
  const ninjas = getList();
  return (
    <section className={style.rankList}>
      {ranks.map((rank) => (
        <RankList rank={rank}>
          {ninjas
            .filter((ninja) => ninja.rank === rank)
            .map((ninja) => (
              <NinjaCard {...ninja} />
            ))}
        </RankList>
      ))}
    </section>
  );
}