import React, { useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import EyeIcon from '@assets/eyeIcon.svg';
import styles from './styles.module.scss';

interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  revalidate?: () => void;
  error?: string;
  styleName?: string;
}

const InputPassword = <TFieldValues extends FieldValues>({
  placeholder,
  name,
  error,
  register,
  revalidate,
  styleName,
}: Props<TFieldValues>) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styleName}>
      <div className={styles.passwordContainer}>
        <input
          {...register(name)}
          className={styles.passwordInput}
          placeholder={placeholder}
          onBlur={revalidate}
          type={isVisible ? 'text' : 'password'}
        />
        <img
          className={
            isVisible ? `${styles.eyeIconActive}` : `${styles.eyeIcon}`
          }
          src={EyeIcon}
          alt=""
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default InputPassword;
