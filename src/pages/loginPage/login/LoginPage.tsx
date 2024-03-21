import githubIcon from '@/assets/githubIcon.svg'
import googleIcon from '@/assets/googleIcon.svg'
import './../LoginPage.scss'
import IconButton from '@/components/buttons/iconButton/IconButton';
import FilledButton from '@/components/buttons/filledButton/FilledButton';
import LoginPageWrapper from '@/components/loginWrapper/LoginWrapper';
import  Devider  from '@/components/devider/Devider';
import { useNavigate } from 'react-router-dom';
import InputWithValidation from '@/components/inputWithValidation/InputWithValidation';
import { useAppDispatch } from '@/app/hooks'
import { savelogin } from '@/features/login/login-slice';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from './validationSchema';
import { z } from 'zod';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  type Schema = z.infer<typeof loginSchema>

  const {
    formState: { isValid },
    control,
    getValues,
  } = useForm<Schema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { login: '' },
    mode: 'onBlur'
  })


  const saveLogin = () => {
    const data = getValues()
    dispatch(savelogin(data['login']))
    navigate('/login')
  }


  return (
    <LoginPageWrapper>
      <div className="LoginFormContainer">
        <div className='HelpText'>Login to your account</div>
        <div className='LoginButtons'>
          <IconButton title='Google' imgSource={googleIcon} />
          <IconButton title='Github' imgSource={githubIcon} />
        </div>
        <Devider />
        <InputWithValidation
          name='login'
          control={control}
          placeholder="Work email"
        />
        <FilledButton title='Login to Qencode' onClick={saveLogin} disabled={!isValid} />
        <span className="BottomText">Is your company new to Qencode?
          <a href='http://google.com'>Sign up</a>
        </span>
      </div>
    </LoginPageWrapper>
  );
}

export default LoginPage;
