import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FilledButton from '@components/buttons/filledButton/FilledButton';
import SimpleButton from '@components/buttons/simpleButton/SimpleButton';
import LoginPageWrapper from '@components/loginWrapper/LoginWrapper';
import InputWithValidation from '@components/inputWithValidation/InputWithValidation';
import BackdropWrapper from '@components/backdropWrapper/BackdropWrapper';
import Toast from '@components/toast/Toast';
import { schemaForgotPassword } from '../validationSchema/schema';
import { useSetNewPasswordMutation } from '@features/asyncApi/asyncApiSlice';
import { ErrorResponce } from '@model/api/responceErrorModel';
import styles from './styles.module.scss';

type ValidationType = z.infer<typeof schemaForgotPassword>;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [setNewPasswordRequest, { isLoading, isSuccess, isError, error }] =
    useSetNewPasswordMutation();

  const {
    formState: { isValid, errors },
    register,
    getValues,
  } = useForm<ValidationType>({
    resolver: zodResolver(schemaForgotPassword),
    defaultValues: { login: '' },
    mode: 'onBlur',
  });

  const goToLogin = () => {
    navigate('/');
  };

  const setNewPassword = () => {
    const data = getValues();
    setNewPasswordRequest({ email: data.login });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show(getResponceError());
    }
  }, [isError]);

  const getResponceError = () => {
    return isError ? (error as ErrorResponce)?.data.detail.toString() : '';
  };
  return (
    <>
      <BackdropWrapper isVisible={isLoading} />
      <LoginPageWrapper>
        <div className={styles.container}>
          <div className={styles.helpText}>Forgot password?</div>
          <InputWithValidation
            name="login"
            register={register}
            placeholder="Enter your email"
            error={errors.login?.message}
          />
          <FilledButton disabled={!isValid} onClick={setNewPassword}>
            Login to Qencode
          </FilledButton>
          <SimpleButton title="Cancel" onClick={goToLogin} />
        </div>
      </LoginPageWrapper>
    </>
  );
};

export default ForgotPasswordPage;
