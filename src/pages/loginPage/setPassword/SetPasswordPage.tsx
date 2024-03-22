import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import FilledButton from '@components/buttons/filledButton/FilledButton';
import InputPassword from '@components/inputPassword/ImputPassword';
import LoginPageWrapper from '@components/loginWrapper/LoginWrapper';
import BackdropWrapper from '@components/backdropWrapper/BackdropWrapper';
import { schemaSetPassword } from '../validationSchema/schema';
import { useSetPasswordMutation } from '@features/asyncApi/asyncApiSlice';
import { savePassword } from '@features/login/loginSlice';
import { ErrorResetPasswordResponce } from '@model/api/responceErrorModel';
import Toast from '@components/toast/Toast';
import styles from './styles.module.scss';

type ValidationType = z.infer<typeof schemaSetPassword>;

const SetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.login.token);
  const login = useAppSelector((state) => state.login.login);

  const [setPasswordRequest, { data, error, isLoading, isSuccess, isError }] =
    useSetPasswordMutation();

  const {
    formState: { isValid, errors, isDirty },
    register,
    reset,
    trigger,
    getValues,
  } = useForm<ValidationType>({
    resolver: zodResolver(schemaSetPassword),
    defaultValues: { password: '', passwordRepeat: '' },
    mode: 'all',
  });

  // 'secret' is hardcoded in two reasons:
  // 1 - don't know where to get real one
  // 2 - don't want to reset the real password that can be used by others
  // Result: this method will always get false in response
  const resetPassword = () => {
    const { password, passwordRepeat } = getValues();
    setPasswordRequest({
      email: login,
      token: token,
      secret: 'token',
      password: password,
      password_confirm: passwordRepeat,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const { password } = getValues();
      dispatch(savePassword(password));
      navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      reset();
      Toast.show(getResponceError());
    }
  }, [isError]);

  const revalidate = () => {
    trigger('passwordRepeat');
  };

  const getPasswordError = () => {
    return isDirty ? errors.password?.message : undefined;
  };

  const getPasswordRepeatError = () => {
    return isDirty ? errors.passwordRepeat?.message : undefined;
  };

  const getResponceError = () => {
    return (
      (error as ErrorResetPasswordResponce)?.data.detail[0].error.toString() ||
      ''
    );
  };

  return (
    <>
      <BackdropWrapper isVisible={isLoading} />
      <LoginPageWrapper>
        <div className={styles.container}>
          <div className={styles.helpText}>Create new Password?</div>
          <div className={styles.inputHelpText}>Password</div>
          <InputPassword
            name="password"
            styleName={styles.input}
            register={register}
            revalidate={revalidate}
            placeholder="Password"
            error={getPasswordError()}
          />
          <div className={styles.inputHelpText} style={{ marginTop: '20px' }}>
            Confirm Password
          </div>
          <InputPassword
            styleName={styles.input}
            name="passwordRepeat"
            register={register}
            placeholder="Password"
            error={getPasswordRepeatError()}
          />
          <FilledButton
            style={{ marginTop: '30px' }}
            onClick={resetPassword}
            disabled={!isValid}
          >
            Reset Password
          </FilledButton>
        </div>
      </LoginPageWrapper>
    </>
  );
};

export default SetPasswordPage;
