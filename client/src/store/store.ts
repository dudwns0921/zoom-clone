import { configureStore } from '@reduxjs/toolkit';
import chattingSlice from './features/chatting/chattingSlice';
import counterReducer from './features/counter/counterSlice';
import socketSlice from './features/socket/socketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chatting: chattingSlice,
    socket: socketSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
