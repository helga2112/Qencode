import EyeIcon from './../../assets/eyeIcon.svg'
import React, { useState } from 'react';
import './InputPassword.scss'
import InputWithValidation from '../inputWithValidation/InputWithValidation';
import { isEmptyString } from '../../utils/usEmptyString';

interface InputPasswordProps {
    ref: React.RefObject<HTMLInputElement>
    setValid: (isValid: boolean) => void
}

const InputPassword = ({ setValid }: InputPasswordProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const validateInput = () => {
        setInputValue(inputValue.trim());
    };

    return (
        <div className='passwordContainer'>
         {/*    <InputWithValidation
                inputType={isVisible ? 'type' : 'password'}
                className='Password'
                value={inputValue}
                onChange={onChange}
                onBlur={validateInput}
                placeholder="Password"
                error={''}
                validator={isEmptyString}
                setValid={setValid} /> */}
            <img className={isVisible ? 'EyeIconActive' : 'EyeIcon'}
                src={EyeIcon}
                alt=''
                onClick={() => setIsVisible(!isVisible)} />
        </div>
    );
}

export default InputPassword;
