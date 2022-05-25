import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Card, CardHeader } from "../../atoms/card";
import { Ninja } from "../../common/types/UserType";
import { DragUtil } from "../../hooks/drag";
import style from './ninjaCard.module.scss';

interface Item {
  id: Ninja["id"];
  originalIndex: number;
}

type Props = Ninja & DragUtil<Ninja>;

export const NinjaCard: FC<Props> = ({
  name,
  profilePic,
  missionCompleted,
  findCard,
  moveCard,
  id,
}) => {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "ninja",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "ninja",
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  return (
    <div ref={(node) => drag(drop(node))}>
      <Card
        isDragging={isDragging}
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
    </div>
  );
};