import { createContext, useEffect, useState } from "react";

export interface ICard {
  id: number;
  projectTitle: string;
  projectNumber: number;
  region: string;
  status: string;
  spw: string;
  contractValue: number;
}

type CardContextType = {
  cards: ICard[] | null;
  saveCard: (card: ICard) => void;
};

interface prop {
  children: React.ReactNode;
}

export const cardContext = createContext<CardContextType | null>(null);

export default function CardContextProvider({ children }: prop) {
  const [cards, setCards] = useState<ICard[] | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("Projects");
    if (data != null) {
      setCards(JSON.parse(data));
    }
  }, []);

  function saveCard(card: ICard) {
    if (cards) {
      setCards([...cards, card]);
    } else setCards([card]);
  }

  return (
    <cardContext.Provider value={{ cards, saveCard }}>
      {children}
    </cardContext.Provider>
  );
}
