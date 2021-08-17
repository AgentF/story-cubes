import React from "react";
import { Dice, DiceCollection, DiceFace } from "./styles";
import { originalCollection } from "./oiginalCollection";

const diceFace = (face, i) => (
  <DiceFace key={`face-${i}`} number={`face-${i}`}>
    {face}
  </DiceFace>
);

const diceFaceList = (dice, i) => (
  <Dice key={`dice-${i}`}>{dice.map(diceFace)}</Dice>
);

const DiceCollectionWrapper = () => (
  <DiceCollection>{originalCollection.map(diceFaceList)}</DiceCollection>
);

export const App = () => (
  <>
    <DiceCollectionWrapper />
  </>
);
