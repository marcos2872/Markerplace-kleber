import styled from '@emotion/styled';

export const Body = styled.div`
  background-color: rgba(232, 232, 232, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const CardVehicle = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export const Carrucel = styled.div`
  background-color: transparent;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 75vh;
  border-radius: 5px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Images = styled.img`
  background-color: transparent;
  width: 50vh;
  padding: 3px;
  border-radius: 5px;
  flex: none;
`;

export const Title = styled.h3`
  background-color: transparent;
  font-size: large;
`;

export const Price = styled.h2`
  background-color: transparent;
  font-size: xx-large;
`;

export const Contact = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ShareFavorite = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background-color: rgb(232, 232, 232);
  border: solid 2px rgba(161, 161, 161, 0.3);
  border-radius: 4px;
  height: 4vh;
  width: 20vh;
`;

export const Label = styled.label`
  background-color: rgb(232, 232, 232);
  border: solid 2px rgba(161, 161, 161, 0.3);
  border-radius: 4px;
  height: 4vh;
  width: 15vh;
  padding: 3px;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonInput = styled.input`
  background-color: transparent;
  width: 3vh;
`;

export const LinkCopyed = styled.div`
  background-color: rgba(150, 150, 150);
  height: 4vh;
  width: 15vh;
  padding: 3px;
  border-radius: 4px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
