import styled from 'styled-components';
import BoxButtonWhite from '../../Ui/BoxButtonWhite';

export const AmountSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2em;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 1em;
  }
`;

export const ButtonsArea = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;

export const CloseButton = styled(BoxButtonWhite)`
  margin-right: 5px;
  width: 5rem;
  border-radius: 20px;
`;

export const ErrorMsg = styled.p`
  color: var(--error-color);
  text-align: center;
  font-size: 12px;
`;

export const FeedBack = styled.p`
  color: var(--tomato-elements-color);
  text-align: center;
`;
