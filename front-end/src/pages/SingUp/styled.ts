import styled from '@emotion/styled';

export const Body = styled.div`
  background-color: rgba(232, 232, 232, 0.4);
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  background-color: rgba(232, 232, 232, 0.4);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 35vh;
  height: 40vh;
  gap: 2rem;
`;

export const Input = styled.input`
  height: 4vh;
  border-radius: 4px;
  background-color: rgba(232, 232, 232, 0.5);
  border: solid 1px rgba(161, 161, 161, 0.4);
`;

export const Button = styled.button`
  height: 4vh;
  width: 20vh;
  background-color: rgb(232, 232, 232);
  border: solid 2px rgba(161, 161, 161, 0.3);
  border-radius: 4px;
`;
