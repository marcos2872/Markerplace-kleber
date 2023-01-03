import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  width: 23rem;
  height: 10rem;
  margin: 4px;
  padding: 0.1rem;
  gap: 0.5rem;
  border-radius: 4px;
  background-color: rgba(232, 232, 232, 0.4);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  background-color: transparent;
  font-size: small;
`;

export const Image = styled.img`
  box-sizing: 2px;
  width: 13rem;
  border-radius: 4px;
`;

export const Price = styled.p`
  background-color: transparent;
  font-size: large;
`;

export const Description = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
