import React from "react";
import CardsUI from "../components/CardsUI";
import { useCardsInfo } from "../context/CardsContext";

const MyGame = () => {
  const cardsInfo = useCardsInfo();

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Vocabulary page
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Your personal vocabulary
              </h1>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-cols-4">
            <CardsUI
              key="345-4353"
              card={{
                id: "345-4353",
                sourceWord: "Test",
                targetWord: "Testik",
              }}
            />
            {cardsInfo.map((card) => (
              <CardsUI key={card.id} card={card} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MyGame;
