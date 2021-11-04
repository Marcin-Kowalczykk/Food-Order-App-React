import { useReducer } from 'react';

const defaultState = {
  value: '',
  isTouched: false,
};

const inputReducerFcn = (state, action) => {
  if (action.type == 'INPUT_CHANGE') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type == 'INPUT_BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type == 'INPUT-CLEAR') {
    return defaultState;
  }
  return defaultState;
};

const useValidationReducer = (validate) => {
  const [inputState, dispatchInputState] = useReducer(inputReducerFcn, defaultState);

  const inputIsValid = validate(inputState.value);
  const inputHasError = !inputIsValid && inputState.isTouched;

  const onChangeInputHandler = (event) => {
    dispatchInputState({ type: 'INPUT_CHANGE', value: event.target.value });
  };

  const onBlurInputHandler = () => {
    dispatchInputState({ type: 'INPUT_BLUR' });
  };

  const clearInput = () => {
    dispatchInputState({ type: 'INPUT_CLEAR' });
  };

  return {
    inputValue: inputState.value,
    isTouched: inputState.isTouched,
    isValid: inputIsValid,
    hasError: inputHasError,
    onChangeInputHandler,
    onBlurInputHandler,
    clearInput,
  };
};

export default useValidationReducer;
