import styled from 'styled-components';

export const DescWrapper = styled.section`
  position: absolute;
  top: 12vh;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 40rem;
  color: tomato;
  background-color: #000000cf;
  border-radius: 10px;
  padding: 3em;
  text-align: center;

  @media (max-width: 600px) {
    padding: 2em;
    width: 70%;
  }
`;

export const P = styled.p`
  font-size: 10px;
  margin: 0.5em;
  color: white;
`;
