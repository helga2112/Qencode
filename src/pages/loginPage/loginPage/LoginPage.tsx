import githubIcon from '@assets/githubIcon.svg';
import googleIcon from '@assets/googleIcon.svg';
import IconButton from '@components/buttons/iconButton/IconButton';
import FilledButton from '@components/buttons/filledButton/FilledButton';
import LoginPageWrapper from '@components/loginWrapper/LoginWrapper';
import Devider from '@components/devider/Devider';
import { useNavigate } from 'react-router-dom';
import InputWithValidation from '@components/inputWithValidation/InputWithValidation';
import { useAppDispatch } from '@app/hooks';
import { savelogin } from '@features/login/loginSlice';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { schemaLogin } from '../validationSchema/schema';
import styles from './styles.module.scss';

const SIGNUP_URL = 'https://portal.qencode.com/login';

type ValidationType = z.infer<typeof schemaLogin>;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    formState: { isValid, errors },
    register,
    getValues,
  } = useForm<ValidationType>({
    resolver: zodResolver(schemaLogin),
    defaultValues: { login: '' },
    mode: 'onBlur',
  });

  const saveLogin = () => {
    const data = getValues();
    dispatch(savelogin(data.login));
    navigate('/login');
  };

  return (
    <LoginPageWrapper>
      <div className={styles.container}>
        <div className={styles.helpText}>Login to your account</div>
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
        <FilledButton
          onClick={saveLogin}
          disabled={!isValid}
          styleName={styles.buttonLogin}
        >
          Login to Qencode
        </FilledButton>
        <div className={styles.bottomText}>
          Is your company new to Qencode?
          <a href={SIGNUP_URL}>Sign up</a>
        </div>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
