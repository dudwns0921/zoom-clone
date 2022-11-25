import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bed7e9;
`;

function ChattingMain(): ReactElement {
  const dialog = useSelector((state: RootState) => state.chatting.dialog);
  return (
    <Wrapper>
      {dialog.map(item => (
        <div key={item.id}>{item.message}</div>
      ))}
    </Wrapper>
  );
}

export default ChattingMain;
