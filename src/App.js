import React from "react";

import { IoMdGlobe } from "react-icons/io";
import {
  IoBulbOutline,
  IoFlashlightOutline,
  IoMoonOutline,
  IoHandLeftOutline,
} from "react-icons/io5";
import { ImSleepy, ImSmile } from "react-icons/im";
import {
  GiBranchArrow,
  GiCommercialAirplane,
  GiShinyApple,
  GiFruitTree,
  GiGreatPyramid,
  GiWhiteTower,
  GiFairyWand,
  GiBee,
  GiRopeBridge,
  GiAbacus,
  GiSpellBook,
  GiTurtle,
  GiGoldScarab,
  GiSlime,
  GiMagnifyingGlass,
  GiPerspectiveDiceSixFacesThree,
  GiSheep,
  GiFootprint,
  GiPadlock,
  GiFlame,
  GiFlatfish,
  GiPentarrowsTornado,
  GiLockSpy,
  GiFireFlower,
  GiDramaMasks,
  GiParachute,
  GiRainbowStar,
  GiWaterFountain,
  GiCampingTent,
  GiCandlestickPhone,
  GiArrowhead,
  GiScales,
} from "react-icons/gi";
import { BsHouseDoor, BsChat, BsClock } from "react-icons/bs";
import { FaRegBuilding, FaQuestion, FaCandyCane } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { RiRainbowLine, RiAliensLine } from "react-icons/ri";
import { ImEye, ImSad } from "react-icons/im";
import { CgMagnet, CgKey } from "react-icons/cg";
import { SiLetterboxd } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";

import { Dice, DiceCollection, DiceFace } from "./styles";

import "./App.css";

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
  [
    <GiFairyWand key="0" />,
    <GiBee key="1" />,
    <GiRopeBridge key="2" />,
    <GiAbacus key="3" />,
    <IoMoonOutline key="4" />,
    <GiSpellBook key="5" />,
  ],
  [
    <IoHandLeftOutline key="0" />,
    <GiTurtle key="1" />,
    <GiGoldScarab key="2" />,
    <GiSlime key="3" />,
    <GiMagnifyingGlass key="4" />,
    <GiPerspectiveDiceSixFacesThree key="5" />,
  ],
  [
    <GiSheep key="0" />,
    <CgMagnet key="1" />,
    <GiFootprint key="2" />,
    <GiPadlock key="3" />,
    <SiLetterboxd key="4" />,
    <GiFlame key="5" />,
  ],
  [
    <GiFlatfish key="0" />,
    <GiPentarrowsTornado key="1" />,
    <GiLockSpy key="2" />,
    <GiFireFlower key="3" />,
    <GiDramaMasks key="4" />,
    <GiParachute key="5" />,
  ],
  [
    <GiRainbowStar key="0" />,
    <FaQuestion key="1" />,
    <GiWaterFountain key="2" />,
    <ImSad key="3" />,
    <GiCampingTent key="4" />,
    <CgKey key="5" />,
  ],
  [
    <GiCandlestickPhone key="0" />,
    <GiArrowhead key="1" />,
    <GiScales key="2" />,
    <AiOutlineThunderbolt key="3" />,
    <RiAliensLine key="4" />,
    <FaCandyCane key="5" />,
  ],
];

const diceFacesRenderer = (dice, i) => (
  <Dice key={`dice-${i}`}>
    {dice.map((face, j) => (
      <DiceFace key={`face-${j}`} number={`face-${j}`}>
        {face}
      </DiceFace>
    ))}
  </Dice>
);

function App() {
  return <DiceCollection>{diceList.map(diceFacesRenderer)}</DiceCollection>;
}

export default App;
