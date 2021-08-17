import React from "react";
import PropTypes from "prop-types";
import { Dice, DiceCollection, DiceFace } from "./styles";

const diceFace = (face, i) => (
  <DiceFace key={`face-${i}`} number={`face-${i}`}>
    {face}
  </DiceFace>
);

const diceFaceList = (dice, i) => (
  <Dice key={`dice-${i}`}>{dice.map(diceFace)}</Dice>
);

export const DicesOverview = ({ dices }) => (
  <DiceCollection>{dices.map(diceFaceList)}</DiceCollection>
);

DicesOverview.defaultProps = {
  dices: [],
};

DicesOverview.propTypes = {
  dices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
};
