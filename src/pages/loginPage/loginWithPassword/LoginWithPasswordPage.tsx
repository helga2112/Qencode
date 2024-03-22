import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import githubIcon from '@assets/githubIcon.svg';
import googleIcon from '@assets/googleIcon.svg';
import FilledButton from '@components/buttons/filledButton/FilledButton';
import IconButton from '@components/buttons/iconButton/IconButton';
import InputPassword from '@components/inputPassword/ImputPassword';
import BackdropWrapper from '@components/backdropWrapper/BackdropWrapper';
import LoginPageWrapper from '@components/loginWrapper/LoginWrapper';
import InputWithValidation from '@components/inputWithValidation/InputWithValidation';
import Devider from '@components/devider/Devider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginAppPostMutation } from '@features/asyncApi/asyncApiSlice';
import { saveToken, savelogin } from '@features/login/loginSlice';
import { schemaLoginPassword } from '../validationSchema/schema';
import styles from './styles.module.scss';

type ValidationType = z.infer<typeof schemaLoginPassword>;

const LoginWithPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userLogin = useAppSelector((state) => state.login.login);

  const {
    formState: { isValid, errors },
    register,
    trigger,
    getValues,
  } = useForm<ValidationType>({
    resolver: zodResolver(schemaLoginPassword),
    defaultValues: { login: userLogin, password: '' },
    mode: 'all',
  });

  const [sendData, { data, error, isLoading, isSuccess, isError }] =
    useLoginAppPostMutation();

  const forgotPassword = () => {
    navigate('/forgot-password');
  };

  const login = () => {
    const data = getValues();
    sendData({ email: data.login, password: data.password });
  };

  useEffect(() => {
    if (isSuccess) {
      const { access_token, refresh_token } = data!;
      dispatch(savelogin(getValues().login));
      dispatch(saveToken(access_token));
      dispatch(saveToken(refresh_token));
      navigate('/home');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(savelogin(''));
      navigate('/forgot-password');
    }
  }, [isError]);

  return (
    <>
      <BackdropWrapper isVisible={isLoading} />
      <LoginPageWrapper>
        <div className={styles.container}>
          <div className={styles.helpText}> Login to your account</div>
          <div className={styles.loginButtons}>
            <IconButton title="Google" imgSource={googleIcon} />
            <IconButton title="Github" imgSource={githubIcon} />
          </div>
          <Devider />
          <InputWithValidation
            name="login"
            placeholder="Work email"
            error={errors.login?.message}
            register={register}
          />
          <InputPassword
            name="password"
            placeholder="Password"
            styleName={styles.inputPassword}
            register={register}
            revalidate={() => trigger()}
            error={errors.password?.message}
          />
          <div className={styles.forgotEmail} onClick={forgotPassword}>
            Forgot your password?
          </div>
          <FilledButton
            disabled={!isValid}
            onClick={login}
            styleName={styles.buttonLogin}
          >
            Login to Qencode
          </FilledButton>
          <div className={styles.bottomText}>
            Is your company new to Qencode?
            <a href="http://google.com">Sign up</a>
          </div>
        </div>
      </LoginPageWrapper>
    </>
  );
};

export default LoginWithPasswordPage;
