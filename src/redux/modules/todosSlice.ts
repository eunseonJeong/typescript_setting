import { createSlice } from "@reduxjs/toolkit";

export type List = {
  id: number;
  title?: string;
  desc?: string;
};

const initialState: List[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  },
  extraReducers: {},
});
export const {} = todosSlice.actions;
export default todosSlice.reducer;
