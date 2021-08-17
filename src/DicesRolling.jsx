import React from "react";
import PropTypes from "prop-types";
import { DiceFace, RolledDice } from "./styles";

const DiceRolling = ({ dice }) => (
  <DiceFace>{dice[Math.floor(Math.random() * 6)]}</DiceFace>
);

DiceRolling.propTypes = {
  dice: PropTypes.element,
};

export const DicesRolling = ({ dices }) => (
  <RolledDice>
    {dices.map((dice, i) => (
      <DiceRolling key={`dice-${i}`} dice={dice} />
    ))}
  </RolledDice>
);

DicesRolling.defaultProps = {
  dices: [],
};

DicesRolling.propTypes = {
  dices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
};
