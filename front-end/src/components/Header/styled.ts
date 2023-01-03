import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgba(84, 84, 84, 0.3);
`;

export const Button = styled.input`
  background-color: transparent;
  width: 3vh;
`;

export const ButtonsMenu = styled.input`
  background-color: transparent;
  width: 3vh;
`;

export const ButtonAnchor = styled.input`
  background-color: transparent;
  width: 3.5vh;
  position: absolute;
  top: 9px;
  left: 5px;
`;

export const Input = styled.input`
  background-color: white;
  border-radius: 3px;
`;

export const MenuOptions = styled.div`
  background-color: rgba(84, 84, 84, 0.5);
  display: flex;
  flex-direction: column;
  height: 30vh;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const User = styled.div`
  background-color: transparent;
  display: flex;
  gap: 10px;
`;

export const Label = styled.label`
  background-color: rgba(132, 132, 132);
  display: flex;
  padding: 0.5rem;
  border-radius: 5px;
  width: auto;
  height: 2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
