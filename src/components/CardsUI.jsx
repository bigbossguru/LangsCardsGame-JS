import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardsUI = (props) => {
  const [isFlip, setIsFlip] = useState(true);

  return (
    <ReactCardFlip isFlipped={isFlip} flipDirection="vertical">
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center justify-center text-center"
        key={props.card.id}
      >
        <h5
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          key={props.card.id}
        >
          {props.card.targetWord}
        </h5>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setIsFlip(!isFlip)}
        >
          Flip
        </button>
      </div>
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center justify-center text-center"
        key={props.card.id}
      >
        <h5
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          key={props.card.id}
        >
          {props.card.sourceWord}
        </h5>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setIsFlip(!isFlip)}
        >
          Flip
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default CardsUI;
