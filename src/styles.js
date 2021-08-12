import styled from "styled-components";

export const DiceCollection = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const Dice = styled.ul`
  --diceSize: 15rem;
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-areas: ". face-0 ." "face-1 face-2 ." ". face-3 face-4" ". face-5 .";
  grid-template-columns: repeat(3, calc(var(--diceSize) / 3));
  grid-template-rows: repeat(4, calc(var(--diceSize) / 3));
  gap: 0.25rem;
  justify-self: center;
  align-self: center;
`;

export const DiceFace = styled.li`
  width: 100%;
  height: 100%;
  border: solid 1px #333;
  border-radius: 0.25rem;
  font-size: calc(var(--diceSize) / 5);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({ number }) => number};
`;
