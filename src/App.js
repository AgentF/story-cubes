import React, { useState } from "react";
import { originalCollection } from "./oiginalCollection";
import { DicesOverview } from "./DicesOverview.jsx";
import { DicesRolling } from "./DicesRolling";
import { PlayButton } from "./styles";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const App = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? (
        <DicesOverview dices={originalCollection} />
      ) : (
        <DicesRolling dices={originalCollection} />
      )}
      <PlayButton onClick={() => setState(!state)}>
        {state ? <BsFillPlayFill /> : <AiOutlineArrowLeft />}
      </PlayButton>
    </>
  );
};
