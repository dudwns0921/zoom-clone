import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ChattingRoom from '../pages/ChattingRoom';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/chat',
    element: <ChattingRoom />,
  },
]);
