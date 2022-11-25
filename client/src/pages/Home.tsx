import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  input {
    margin-top: 10px;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const MakeRoomBtn = styled.div<{ shakeAni: Boolean }>`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  background-color: var(--app-main-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }

  ${props => {
    if (props.shakeAni === true) {
      return css`
        animation: shake 500ms;
      `;
    }
  }}

  div {
    background-color: white;
    width: 100px;
    height: 100px;
    border-radius: 10%;
    color: var(--app-main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
  p {
    position: absolute;
    bottom: 20px;
  }
`;

const Warning = styled.p`
  margin-top: 10px;
  color: red;
`;

function Home(): ReactElement {
  const navigate = useNavigate();

  const [shakeAni, setShakeAni] = useState(false);
  const [showWarning, setWarning] = useState(false);
  const [roomName, setRoomName] = useState('');

  function makeRoom(): void {
    if (roomName.length === 0) {
      setShakeAni(true);
      setWarning(true);

      setTimeout(() => {
        setShakeAni(false);
      }, 500);
    } else {
      navigate('chat');
    }
  }

  return (
    <Wrapper>
      <MakeRoomBtn onClick={makeRoom} shakeAni={shakeAni}>
        <div>+</div>
        <p>Make a room</p>
      </MakeRoomBtn>
      {showWarning ? <Warning>No Room Name!</Warning> : ''}
      <input
        onChange={e => {
          setRoomName(e.target.value);
          setWarning(false);
        }}
        placeholder="Type your room name"
        type="text"
      />
    </Wrapper>
  );
}

export default Home;
