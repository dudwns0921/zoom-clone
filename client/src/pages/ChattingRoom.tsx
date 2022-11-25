import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ChattingFooter from '../components/chatting/ChattingFooter';
import ChattingMain from '../components/chatting/ChattingMain';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: white;
  grid-template-rows: 9fr 1fr;
`;

function ChattingRoom(): ReactElement {
  return (
    <Wrapper>
      <ChattingMain />
      <ChattingFooter />
    </Wrapper>
  );
}

export default ChattingRoom;
