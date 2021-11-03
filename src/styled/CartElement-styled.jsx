import styled from 'styled-components';

import BoxBoldText from '../components/Ui/BoxBoldText';
import BoxColumnWrapper from '../components/Ui/BoxColumnWrapper';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid tomato;
  margin: 1rem 2rem 1rem 0;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 0.3rem 1.2rem 0.3rem -1rem;
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
  border: 1px solid brown;
  border-radius: 5px;
  padding: 2.5px 5px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #c72d12;
`;
