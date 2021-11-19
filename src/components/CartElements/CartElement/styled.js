import styled from 'styled-components';

import BoxBoldText from '../../Ui/BoxBoldText';
import BoxColumnWrapper from '../../Layout/BoxColumnWrapper';

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

export const Section = styled(BoxColumnWrapper)`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled(BoxBoldText)`
  color: var(--black-font-color);
`;

export const AmountSection = styled.div`
  border: 1px solid brown;
  border-radius: 5px;
  padding: 0.5em;
  font-size: 0.7em;
  font-weight: bold;
  color: var(--bold-elements-color);
`;
