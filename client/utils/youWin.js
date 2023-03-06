const youWin = (yourChoice, OpponentChoice) => {
  if (yourChoice === OpponentChoice) return -1;
  else if (yourChoice === 0 && OpponentChoice === 2) return true;
  else if (yourChoice === 1 && OpponentChoice === 0) return true;
  else if (yourChoice === 2 && OpponentChoice === 1) return true;
  else return false;
};

export default youWin;
