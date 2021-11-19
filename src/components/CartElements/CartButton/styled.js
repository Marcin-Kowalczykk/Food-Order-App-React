import styled from 'styled-components';

import BoxButtonBrown from '../../Ui/BoxButtonBrown';

export const CartBtn = styled(BoxButtonBrown)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  margin: 1rem;
`;

export const Quantity = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.main};
  width: 1.5rem;
  padding: 0.1rem;
`;
