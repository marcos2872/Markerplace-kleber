import styled from '@emotion/styled';

export const Div = styled.div`
  background-color: rgba(232, 232, 232, 0.4);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Form = styled.form`
  background-color: rgba(232, 232, 232, 0.4);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  width: 40vh;
  gap: 5px;
  padding: 1rem;
  border-radius: 5px;
  justify-items: center;
`;

export const Input = styled.textarea`
  background-color: rgba(232, 232, 232, 0.5);
  border: solid 1px rgba(161, 161, 161, 0.4);
  width: 20vh;
  border-radius: 5px;
`;

export const Section = styled.section`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  width: 40vh;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;
export const SelectCategory = styled.select`
  background-color: rgba(232, 232, 232, 0.5);
  border: solid 1px rgba(161, 161, 161, 0.4);
  border-radius: 5px;
`;

export const Options = styled.option`
  background-color: rgba(232, 232, 232, 0.5);
  border: solid 1px rgba(161, 161, 161, 0.4);
  border-radius: 5px;
`;

export const InputImage = styled.input`
  background-color: rgba(232, 232, 232, 0.5);
  border: solid 2px rgba(232, 232, 232);
  border-radius: 5px;
  width: 30vh;
`;

export const Button = styled.button`
  background-color: rgba(161, 161, 161);
  width: 7rem;
  border-radius: 5px;
`;

export const Label = styled.label`
  background-color: rgba(232, 232, 232, 0.5);
  border-radius: 4px;
  padding: 4px;
  text-align: center;
  gap: 3px;
`;

export const Prev = styled.div`
  background-color: rgba(232, 232, 232, 0.4);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vh;
  border-radius: 5px;
  padding: 0.5rem;
`;

export const Corrucel = styled.div`
  background-color: transparent;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 75vw;
  border-radius: 5px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img`
  background-color: transparent;
  width: 35vh;
  padding: 3px;
  border-radius: 5px;
  flex: none;
`;

export const Ol = styled.ol`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  overflow-wrap: break-word;
  width: 35vh;
  gap: 4px;
`;

export const P = styled.p`
  background-color: transparent;
  padding: 4px;
  border-radius: 5px;
  overflow-wrap: break-word;
  width: 35vh;
`;
