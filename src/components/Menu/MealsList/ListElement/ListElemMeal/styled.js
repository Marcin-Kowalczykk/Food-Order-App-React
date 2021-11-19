import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.normal};
  border-bottom: 2px solid tomato;
  margin: 1em;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.font.extraSmall};
    margin: 1em;
  }
`;

export const Description = styled.div`
  font-size: ${(props) => props.theme.font.extraSmall10};
  font-style: italic;
`;
