import React from 'react';

import styled from 'styled-components';

const DescWrapper = styled.section`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 40rem;
  color: tomato;
  background-color: #000000cf;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 0.5rem;
    top: 8rem;
    width: 85%;
  }
`;

const P = styled.p`
  font-size: 0.8rem;
  color: white;
`;

const Description = () => {
  return (
    <DescWrapper>
      <h3>Welcome to the best restaurant of the world</h3>
      <P>Choose your dreaming food and add it to your cart !</P>
      <P>Our best chefs will make delicious dishes for you !</P>
      <P>Sit back and we will take care of your order as soon as possible !</P>
    </DescWrapper>
  );
};

export default Description;
