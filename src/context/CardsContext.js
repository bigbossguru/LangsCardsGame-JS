import React, { useState, useContext } from "react";

export const CardsContext = React.createContext();
export const CardsUpdateContext = React.createContext();

export const useCardsInfo = () => {
  return useContext(CardsContext);
};

export const useCardsUpdateInfo = () => {
  return useContext(CardsUpdateContext);
};

const CardsProvider = ({ children }) => {
  const [cardsInfo, setCardsInfo] = useState([]);

  const update = (data) => {
    setCardsInfo((cardsInfo) => [...cardsInfo, data]);
  };

  return (
    <CardsContext.Provider value={cardsInfo}>
      <CardsUpdateContext.Provider value={update}>
        {children}
      </CardsUpdateContext.Provider>
    </CardsContext.Provider>
  );
};

export default CardsProvider;
