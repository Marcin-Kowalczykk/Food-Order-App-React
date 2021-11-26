import React, { useState } from 'react';

import BoxButton from '../../Ui/BoxButton';

import {
  Wrapper,
  Label,
  Section,
  Input,
  Header,
  CreateAccText,
  StyledLink,
} from '.';

const SignInForm = () => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passInputValue, setPassInputValue] = useState('');

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(emailInputValue);
    console.log(passInputValue);

    setEmailInputValue('');
    setPassInputValue('');
  };

  return (
    <form>
      <Wrapper>
        <Section>
          <Header>Sign in !</Header>
        </Section>
        <Section>
          <Label htmlFor="email">e-mail</Label>
          <Input
            type="email"
            id="email"
            onChange={(event) => setEmailInputValue(event.target.value)}
            value={emailInputValue}
          />
        </Section>
        <Section>
          <Label htmlFor="pass">password</Label>
          <Input
            type="password"
            id="pass"
            onChange={(event) => setPassInputValue(event.target.value)}
            value={passInputValue}
          />
        </Section>
        <Section>
          <BoxButton type="submit" variant={'brown'} onClick={submitFormHandler}>
            login
          </BoxButton>
          <CreateAccText>
            <StyledLink to="/Food-Order-App-React/auth-sign-up">
              Create new account !
            </StyledLink>
          </CreateAccText>
        </Section>
      </Wrapper>
    </form>
  );
};

export default SignInForm;
