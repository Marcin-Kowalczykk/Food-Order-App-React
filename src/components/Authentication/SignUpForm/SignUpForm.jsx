import React from 'react';

import useValidation from '../../../hooks/use-validation';
import useSigns from '../../../hooks/use-signs';

import { SIGN_UP } from '../../../api/ApiLinks';
import { SIGN_IN_LINK } from '../../../Links';
import { MAIN_PAGE_LINK } from '../../../Links';

import LoadingSpinner from '../../Ui/LoadingSpinner';

import {
  Wrapper,
  Label,
  Section,
  Input,
  ErrorMsg,
  FeedBack,
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

  const {
    isLoading: isLoading,
    errorMsg: errorMsg,
    feedBack: feedBack,
    signUserRequest: signUpUserRequest,
  } = useSigns(SIGN_UP, emailInputValue, passInputValue, MAIN_PAGE_LINK);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      signUpUserRequest();
    }

    clearEmailInput();
    clearPassInput();
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
          {isLoading && <LoadingSpinner />}
          {feedBack && <FeedBack>{feedBack}</FeedBack>}
          {errorMsg && emailInputValue.length === 0 && (
            <ErrorMsg>Error: {errorMsg} try again !</ErrorMsg>
          )}
          {!isLoading && (
            <SubmitButton disabled={!formIsValid} type="submit" variant={'brown'}>
              Sign Up
            </SubmitButton>
          )}
          <CreateAccText>
            <StyledLink to={SIGN_IN_LINK}>Have account? Go to Login!</StyledLink>
          </CreateAccText>
        </Section>
      </Wrapper>
    </form>
  );
};

export default SignUpForm;
