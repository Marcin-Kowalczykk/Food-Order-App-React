import styled from 'styled-components';

export const UlWrapper = styled.div`
  display: block;
  margin: 7em 8em 1em 8em;
  padding: 0.1em;
  background: white;
  border-radius: 1em;

  @media (max-width: 600px) {
    margin: 7em 2em 1em 2em;
  }
`;

export const FeedBack = styled.p`
  text-align: center;
  color: red;
`;
