import { useState } from 'react';

const useValidation = (validate) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validate(inputValue);
  const inputHasError = !inputIsValid && inputIsTouched;

  const onChangeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurInputHandler = () => {
    setInputIsTouched(true);
  };

  const clearInput = () => {
    setInputValue('');
    setInputIsTouched(false);
  };

  return {
    inputValue: inputValue,
    isTouched: inputIsTouched,
    isValid: inputIsValid,
    hasError: inputHasError,
    onChangeInputHandler,
    onBlurInputHandler,
    clearInput,
  };
};

export default useValidation;
