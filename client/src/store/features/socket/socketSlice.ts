import { createSlice } from '@reduxjs/toolkit';

export interface SocketState {
  socketObj: Object;
}

const initialState: SocketState = {
  socketObj: {},
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.socketObj = action.payload;
      console.log(state.socketObj);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialize } = socketSlice.actions;

export default socketSlice.reducer;
