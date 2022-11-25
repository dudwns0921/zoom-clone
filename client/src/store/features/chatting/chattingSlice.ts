import { createSlice } from '@reduxjs/toolkit';

export interface message {
  socketId: string;
  id: string;
  message: string;
}

export interface ChattingState {
  dialog: message[];
}

const initialState: ChattingState = {
  dialog: [],
};

export const chattingSlice = createSlice({
  name: 'chatting',
  initialState,
  reducers: {
    initialize: (state, action) => {
      // 일단은 localstorage에 저장해두고 가져오기
    },
    push: (state, action) => {
      let duplicated = false;
      state.dialog.forEach(item => {
        if (action.payload.id === item.id) duplicated = true;
      });
      if (!duplicated) {
        state.dialog.push(action.payload);
      }
    },
    reset: state => {
      state.dialog = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialize, push, reset } = chattingSlice.actions;

export default chattingSlice.reducer;
