import styled from 'styled-components';
import BoxButton from '../../Ui/BoxButton';

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

export const CloseButton = styled(BoxButton)`
  margin-right: 5px;
  width: 5rem;
  border-radius: 20px;
`;

export const ErrorMsg = styled.p`
  color: ${(props) => props.theme.color.errorColor};
  text-align: center;
  font-size: 12px;
`;

export const FeedBack = styled.p`
  margin-top: 1em;
  color: ${(props) => props.theme.color.main};
  text-align: center;
`;

export const LoadingArea = styled.div`
  text-align: center;
`;
