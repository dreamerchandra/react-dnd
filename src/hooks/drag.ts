import { useCallback, useState } from "react";
import update from "immutability-helper";

export interface DragUtil<T> {
  moveCard: (id: string, to: number) => void;
  findCard: (id: string) => { index: number, card: T };
}
interface DragUtilWithCard<T> extends DragUtil<T> {
  cards: Array<T>;
}

export const useToCreateDragUtil = <T extends { id: string }>(
  items: T[]
): DragUtilWithCard<T> => {
  const [cards, setCards] = useState<Array<T>>(items);
  const findCard = useCallback<DragUtil<T>["findCard"]>(
    (id: string) => {
      const card = cards.filter((c) => c?.id === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback<DragUtil<T>["moveCard"]>(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  return { findCard, moveCard, cards };
};