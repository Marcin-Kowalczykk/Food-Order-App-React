import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid tomato;
  margin: 0 3em 1em 0;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 0 1em 1em -2em;
  }
`;

export const Description = styled.div`
  font-size: 10px;
  font-style: italic;
`;
