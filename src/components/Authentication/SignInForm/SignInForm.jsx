import React, { useState } from 'react';

import BoxButton from '../../Ui/BoxButton';
import LoadingSpinner from '../../Ui/LoadingSpinner';

import { SIGN_IN } from '../../../api/ApiLinks';
import { SIGN_UP_LINK } from '../../../Links';
import { MAIN_PAGE_LINK } from '../../../Links';

import useSigns from '../../../hooks/use-signs';

import {
  Wrapper,
  Label,
  Section,
  Input,
  Header,
  CreateAccText,
  StyledLink,
  ErrorMsg,
  FeedBack,
} from '.';

const SignInForm = () => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passInputValue, setPassInputValue] = useState('');

  const {
    isLoading: isLoading,
    errorMsg: errorMsg,
    feedBack: feedBack,
    signUserRequest: signUpUserRequest,
  } = useSigns(SIGN_IN, emailInputValue, passInputValue, MAIN_PAGE_LINK);

  const submitFormHandler = (event) => {
    event.preventDefault();

    signUpUserRequest();

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
          {errorMsg && !feedBack && <ErrorMsg>Error: {errorMsg} !</ErrorMsg>}
          {feedBack && !errorMsg && <FeedBack>{feedBack}</FeedBack>}
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <BoxButton type="submit" variant={'brown'} onClick={submitFormHandler}>
              Login
            </BoxButton>
          )}
          <CreateAccText>
            <StyledLink to={SIGN_UP_LINK}>Create new account !</StyledLink>
          </CreateAccText>
        </Section>
      </Wrapper>
    </form>
  );
};

export default SignInForm;
