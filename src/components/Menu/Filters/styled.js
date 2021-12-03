import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;

export const EachItem = styled.div`
  background: ${(props) => props.theme.color.normal};
  color: ${(props) => props.theme.color.boldColor};
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`;
