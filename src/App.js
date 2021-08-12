import React from "react";

import { IoMdGlobe } from "react-icons/io";
import { IoBulbOutline, IoFlashlightOutline } from "react-icons/io5";
import { ImSleepy, ImSmile } from "react-icons/im";
import {
  GiBranchArrow,
  GiCommercialAirplane,
  GiShinyApple,
  GiFruitTree,
  GiGreatPyramid,
  GiWhiteTower,
} from "react-icons/gi";
import { BsHouseDoor, BsChat, BsClock } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { RiRainbowLine } from "react-icons/ri";
import { ImEye } from "react-icons/im";

import "./App.css";
import { Dice, DiceCollection, DiceFace } from "./styles";

const diceList = [
  [
    <IoBulbOutline key="0" />,
    <ImSleepy key="1" />,
    <GiBranchArrow key="2" />,
    <BsHouseDoor key="3" />,
    <BsChat key="4" />,
    <BsClock key="5" />,
  ],
  [
    <ImSmile key="0" />,
    <FaRegBuilding key="1" />,
    <IoMdGlobe key="2" />,
    <GiCommercialAirplane key="3" />,
    <IoFlashlightOutline key="4" />,
    <GiShinyApple key="5" />,
  ],
  [
    <GiFruitTree key="0" />,
    <GiGreatPyramid key="1" />,
    <TiBusinessCard key="2" />,
    <RiRainbowLine key="3" />,
    <ImEye key="4" />,
    <GiWhiteTower key="5" />,
  ],
];

function App() {
  return (
    <DiceCollection>
      {diceList.map((dice, i) => (
        <Dice key={`dice-${i}`}>
          {dice.map((face, j) => (
            <DiceFace key={`face-${j}`} number={`face-${j}`}>
              {face}
            </DiceFace>
          ))}
        </Dice>
      ))}
    </DiceCollection>
  );
}

export default App;
