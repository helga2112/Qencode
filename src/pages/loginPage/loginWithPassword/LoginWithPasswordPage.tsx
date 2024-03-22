import { useEffect } from 'react';
import githubIcon from '@/assets/githubIcon.svg'
import googleIcon from '@/assets/googleIcon.svg'
import './../LoginPage.scss'
import FilledButton from '@/components/buttons/filledButton/FilledButton';
import IconButton from '@/components/buttons/iconButton/IconButton';
import InputPassword from '@/components/inputPassword/ImputPassword';
import { useNavigate } from 'react-router-dom';
import LoginPageWrapper from '@/components/loginWrapper/LoginWrapper';
import { useLoginAppPostMutation } from '@/features/async-api/async-api-slice';
import { useAppDispatch } from '@/app/hooks';
import BackdropWrapper from '@/components/backdropWrapper/BackdropWrapper';
import { savelogin } from '@/features/login/login-slice';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginWithPasswordSchema } from './validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputWithValidation from '@/components/inputWithValidation/InputWithValidation';
import Devider from '@/components/devider/Devider';


type ValidationType = z.infer<typeof loginWithPasswordSchema>

function LoginWithPasswordPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const methods = useForm()

  const {
    formState: { isValid, errors },
    register,
    getValues,
  } = useForm<ValidationType>({
    resolver: zodResolver(loginWithPasswordSchema),
    defaultValues: { login: '' },
    mode: 'onBlur'
  })


  const [sendData, { data, isLoading, isSuccess, isError }] = useLoginAppPostMutation()
  //const { data = {}, isFetching } = useLoginAppQuery({ email: 'user@example.com', password: 'pass123123123' })

  const forgotPassword = () => {
    navigate('/forget-password')
  }

  const login = () => {
    const data = getValues()
    sendData({ email: data.login, password: data.password })
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(savelogin('login')) //TODO: change here to variable
      navigate('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <>
      <BackdropWrapper isVisible={isLoading} />
      <FormProvider {...methods}>
        <LoginPageWrapper>
          <div className="LoginFormContainer">
            <div className='HelpText'>  Login to your account</div>
            <div className='LoginButtons'>
              <IconButton title='Google' imgSource={googleIcon} />
              <IconButton title='Github' imgSource={githubIcon} />
            </div>
            <Devider />
            <InputWithValidation
              name='login'
              placeholder="Work email"
              error={errors.login?.message}
              register={register}
            />
            <InputPassword
              name='password'
              register={register}
              placeholder='Password'
              error={errors.password?.message}
            />
            <div className='ForgotEmail' onClick={forgotPassword}>Forgot your password?</div>
            <FilledButton title='Login to Qencode' disabled={isValid} onClick={login} />
            <span className="BottomText">Is your company new to Qencode?
              <a href='http://google.com'>Sign up</a>
            </span>
          </div>
        </LoginPageWrapper>
      </FormProvider>
    </>
  );
}

export default LoginWithPasswordPage;
