import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import './InputWithValidation.scss'

interface InputWithValidationProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string
  inputType?: string
  validator: (str: string) => boolean
  setValid: (isValid: boolean) => void

}

const InputWithValidation = forwardRef<HTMLInputElement, InputWithValidationProps>(
  ({ error, setValid, validator, inputType = 'text' }: InputWithValidationProps, ref) => {

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const validateInput = () => {
      setInputValue(inputValue.trim());

      const isValid = validator(inputValue)
      setValid(isValid)
      setErrorMessage(isValid ? error : '');
    };

    return (
      <div >
        <input
          ref={ref}
          type={inputType}
          className='LoginInput'
          value={inputValue}
          onChange={onChange}
          onBlur={validateInput}
          placeholder="Work email"
        />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
    );
  })

export default InputWithValidation;
