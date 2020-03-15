import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
