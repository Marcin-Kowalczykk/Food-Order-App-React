import styled from 'styled-components';

import BoxButton from '../../Ui/BoxButton';

export const CartBtn = styled(BoxButton)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 5em;
  margin: 1em;
`;

export const Quantity = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.main};
  width: 1.5em;
  padding: 0.1em;
`;
