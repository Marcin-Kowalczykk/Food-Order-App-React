import React from 'react';

import useValidation from '../../../hooks/use-validation';

import {
  Wrapper,
  Label,
  Section,
  Input,
  ErrorMsg,
  Header,
  CreateAccText,
  StyledLink,
  SubmitButton,
} from '.';

const SignUpForm = () => {
  const validateEmail = (inputValue) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputValue) && !inputValue.includes(' ');
  };

  const validatePassword = (inputValue) => {
    const passwordRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    return passwordRegExp.test(inputValue) && !inputValue.includes(' ');
  };

  const {
    inputValue: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    onChangeInputHandler: onChangeEmailInputHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    clearInput: clearEmailInput,
  } = useValidation(validateEmail);

  const {
    inputValue: passInputValue,
    isValid: passInputIsValid,
    hasError: passInputHasError,
    onChangeInputHandler: onChangePassInputHandler,
    onBlurInputHandler: onBlurPassInputHandler,
    clearInput: clearPassInput,
  } = useValidation(validatePassword);

  let formIsValid = false;

  if (emailInputIsValid && passInputIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      console.log(emailInputValue);
      console.log(passInputValue);
    }

    clearEmailInput();
    clearPassInput('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Wrapper>
        <Section>
          <Header>Welcome new user ! Sign up here.</Header>
        </Section>
        <Section>
          <Label htmlFor="email">e-mail</Label>
          <Input
            type="email"
            id="email"
            error={emailInputHasError}
            onChange={onChangeEmailInputHandler}
            onBlur={onBlurEmailInputHandler}
            value={emailInputValue}
          />
          {emailInputHasError && <ErrorMsg>email is wrong !</ErrorMsg>}
        </Section>
        <Section>
          <Label htmlFor="pass">password</Label>
          <Input
            type="password"
            id="pass"
            error={passInputHasError}
            onChange={onChangePassInputHandler}
            onBlur={onBlurPassInputHandler}
            value={passInputValue}
          />
          {passInputHasError && (
            <ErrorMsg>
              Need one uppercase, one number, length must be longer than 7
            </ErrorMsg>
          )}
        </Section>
        <Section>
          <SubmitButton disabled={!formIsValid} type="submit" variant={'brown'}>
            Sign Up
          </SubmitButton>
          <CreateAccText>
            <StyledLink to="/Food-Order-App-React/auth-sign-in">
              Have account? Go to Login!
            </StyledLink>
          </CreateAccText>
        </Section>
      </Wrapper>
    </form>
  );
};

export default SignUpForm;
