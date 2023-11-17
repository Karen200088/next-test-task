import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filtersType {
  size: string;
  mimeType: string;
  order: string;
}

const initialState: filtersType = {
  size: "",
  mimeType: "",
  order: "",
};

const sortSelectSlice = createSlice({
  name: "sortSelectSlice",
  initialState,
  reducers: {
    filterBySize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    filterByMimeType(state, action: PayloadAction<string>) {
      state.mimeType = action.payload;
    },
    filterByOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
  },
});

export const { filterBySize, filterByMimeType, filterByOrder } = sortSelectSlice.actions;
export default sortSelectSlice.reducer;
