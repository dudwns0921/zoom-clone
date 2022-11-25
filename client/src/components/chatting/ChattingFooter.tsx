import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { push } from '../../store/features/chatting/chattingSlice';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--screen-gap);

  form {
    display: grid;
    height: 100%;
    grid-template-columns: 8fr 2fr;
    column-gap: 10px;
    input,
    button {
      font-size: 1.2rem;
    }
    input {
      border: none;
      outline: none;
    }
    button {
      background-color: var(--app-main-color);
      color: white;
      border-radius: 5px;
      cursor: pointer;
      border: none;
    }
  }
`;

function ChattingFooter({ socket }: any): ReactElement {
  const socketInfo = useSelector((state: RootState) => state.socket.socketInfo);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  function sendMsg(): void {
    const message = {
      socketId: socketInfo.id,
      message: msg,
      id: uuidv4(),
    };
    socket.emit('send-message', message);
    dispatch(push(message));
    setMsg('');
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendMsg();
  };
  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      sendMsg();
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          value={msg}
          onChange={e => {
            setMsg(e.target.value);
          }}
          type="text"
          onKeyDown={handleKeydown}
        />
        <button>Send</button>
      </form>
    </Wrapper>
  );
}

export default ChattingFooter;
