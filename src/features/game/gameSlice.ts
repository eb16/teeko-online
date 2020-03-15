import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getRandomInt } from "../../utils/helpers";

enum Selection {
  NONE,
  PLAYER1,
  PLAYER2
}

interface Location {
  x: number;
  y: number;
}

interface Movement {
  to: Location;
}

interface BoardState {
  board: Selection[][];
  playersTurn?: Selection;
  activeCell?: Location;
}

const initialState: BoardState = {
  board: [
    [
      Selection.PLAYER1,
      Selection.PLAYER2,
      Selection.PLAYER1,
      Selection.PLAYER2,
      Selection.NONE
    ],
    Array(5).fill(Selection.NONE),
    Array(5).fill(Selection.NONE),
    Array(5).fill(Selection.NONE),
    [
      Selection.PLAYER2,
      Selection.PLAYER1,
      Selection.PLAYER2,
      Selection.PLAYER1,
      Selection.NONE
    ]
  ],
  activeCell: undefined
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    movePiece: (state, action: PayloadAction<Movement>) => {
      const { to } = action.payload;
      const { activeCell } = state;
      if (activeCell && state.board[to.x][to.y] === Selection.NONE) {
        state.board[to.x][to.y] = state.board[activeCell.x][activeCell.y];
        state.board[activeCell.x][activeCell.y] = Selection.NONE;
        state.activeCell = undefined;
      } else if (state.board[to.x][to.y] !== Selection.NONE) {
        state.activeCell = { x: to.x, y: to.y };
      }
    }
  }
});

export const { movePiece } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBoard = (state: RootState) => state.game.board;
export const selectActiveCell = (state: RootState) => state.game.activeCell;

export default slice.reducer;
