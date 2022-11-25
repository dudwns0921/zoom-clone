import React, { useState, useEffect, ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { push } from './store/features/chatting/chattingSlice';
import { initialize } from './store/features/socket/socketSlice';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
  --main-bg-color: white;
  --screen-max-width: 800px;
  --screen-gap: 10px;
  --app-main-color: #0e72ec;
  }
  body {
    line-height: normal;
    background-color: lightgray;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    height: 100vh;
    max-width: var(--screen-max-width);
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 9fr;
  }
`;

const MainHeader = styled.header`
  color: white;
  padding: var(--screen-gap);
  background-color: var(--app-main-color);
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function App(): ReactElement {
  const socket = io('http://localhost:3000', { transports: ['websocket'] });
  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`⚡: ${socket.id} user just connected!`);
      dispatch(initialize(socket));
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('respond-message', message => {
      dispatch(push(message));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('respond-message');
    };
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainHeader>
        <p>Connected: {String(isConnected)}</p>
      </MainHeader>
      <MainWrapper>
        <RouterProvider router={router} />
      </MainWrapper>
      {/* <ChattingMain />
      <ChattingFooter socket={socket} /> */}
    </React.Fragment>
  );
}

export default App;
