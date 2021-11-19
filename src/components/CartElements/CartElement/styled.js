import styled from 'styled-components';

import BoxBoldText from '../../Ui/BoxBoldText';
import BoxColumnWrapper from '../../Layout/BoxColumnWrapper';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.normal};
  border-bottom: 2px solid ${(props) => props.theme.color.main};
  margin: 1em;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.font.extraSmall};
    margin: 1em;
  }
`;

export const Section = styled(BoxColumnWrapper)`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled(BoxBoldText)`
  color: black;
`;

export const AmountSection = styled.div`
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 5px;
  padding: 0.5em;
  font-size: 0.7em;
  font-weight: bold;
  color: ${(props) => props.theme.color.boldColor};
`;
