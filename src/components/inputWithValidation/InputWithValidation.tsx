import React, { useState } from 'react';
import { isEmailValid } from '../../utils/isEmailValid';
import './InputWithValidation.scss'

const  InputWithValidation =() => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const validateInput = () => {
    setInputValue(inputValue.trim());
    if (inputValue.length > 0 && !isEmailValid(inputValue)) {
      setErrorMessage('Please enter a value.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        className='LoginInput'
        value={inputValue}
        onChange={onChange}
        onBlur={validateInput} 
        placeholder="Work email"
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
}

export default InputWithValidation;
