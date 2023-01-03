import styled from '@emotion/styled';
import tw from 'tailwind-styled-components';

export const Body = styled.div`
  background-color: rgba(232, 232, 232, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
  width: 40vh;
  padding: 3px;
  border-radius: 5px;
  flex: none;
`;

export const Title = styled.h3`
  background-color: transparent;
`;

export const Price = styled.p``;
export const P = tw.p`
bg-slate-400
flex
flex-wrap
w-32
`;
