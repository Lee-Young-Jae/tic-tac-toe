const GAME_RULES = {
  MIN_BOARD_SIZE: 3,
  MAX_BOARD_SIZE: 5,
  MIN_WIN_CONDITION: 3,
  MAX_WIN_CONDITION: 5,
  UNDO_COUNT: 3,
};

const PLAYER = {
  MARK: ["O", "X", "■", "▲"],
  COLOR: {
    BLUE: "#76b3ff",
    RED: "#ff7676",
  },
};

export { GAME_RULES, PLAYER };
