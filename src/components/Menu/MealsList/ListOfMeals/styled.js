import styled from 'styled-components';

export const UlWrapper = styled.div`
  display: block;
  margin: 3em 8em 5em 8em;
  padding: 0.1em;
  background: ${(props) => props.theme.color.normal};
  border-radius: 1em;

  @media (max-width: 600px) {
    margin: 1em;
  }
`;

export const FeedBack = styled.p`
  text-align: center;
  color: ${(props) => props.theme.color.errorColor};
`;
