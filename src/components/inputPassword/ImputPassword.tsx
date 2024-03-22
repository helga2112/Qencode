import EyeIcon from '@/assets/eyeIcon.svg'
import React, { useState } from 'react';
import './InputPassword.scss'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';


interface Props<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>
    placeholder: string
    register: UseFormRegister<TFieldValues>
    error?: string
  }

const InputPassword = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
    const {placeholder, name, error, register} = props

    const [isVisible, setIsVisible] = useState(false);



    return (
        <>
            <div className='passwordContainer'>
                <input
                    {...register(name)}
                    className='Password'
                    type={isVisible ? 'text' : 'password'}
                    name='password'
                    placeholder={placeholder}
                />
                <img className={isVisible ? 'EyeIconActive' : 'EyeIcon'}
                    src={EyeIcon}
                    alt=''
                    onClick={() => setIsVisible(!isVisible)} />
            </div>
            <div className='Error'>{error}</div>
        </>
    );
}

export default InputPassword;
