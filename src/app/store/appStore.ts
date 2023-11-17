"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sortSelectSlice from "@/app/store/slices/sortSelectSlice";
import catsSlice from "@/app/store/slices/catsSlice";

const rootReducer = combineReducers({
  sortSelectSlice,
  catsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
