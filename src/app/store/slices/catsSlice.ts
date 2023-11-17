import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICat } from "@/app/shared/config/types";

const initialState: ICat[] = [];

const catsSlice = createSlice({
  name: "catsSlice",
  initialState,
  reducers: {
    addCats(state, action: PayloadAction<ICat[]>) {
      state.push(...action.payload);
    },
    removeCats() {
      return [];
    },
  },
});

export const { addCats, removeCats } = catsSlice.actions;
export default catsSlice.reducer;
