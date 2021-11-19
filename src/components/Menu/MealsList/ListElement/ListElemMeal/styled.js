import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white-background-color);
  border-bottom: 2px solid tomato;
  margin: 1em;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 1em;
  }
`;

export const Description = styled.div`
  font-size: 10px;
  font-style: italic;
`;
