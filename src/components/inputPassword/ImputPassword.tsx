import EyeIcon from './../../assets/eyeIcon.svg'
import React, { useState } from 'react';
import './InputPassword.scss'

const InputPassword = () => {
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
            <input
                type={isVisible ? 'type' : 'password'}
                className='Password'
                value={inputValue}
                onChange={onChange}
                onBlur={validateInput}
                placeholder="Password"
            />
            <img className={isVisible ? 'EyeIconActive' : 'EyeIcon'}
                src={EyeIcon}
                alt=''
                onClick={() => setIsVisible(!isVisible)} />
        </div>
    );
}

export default InputPassword;
