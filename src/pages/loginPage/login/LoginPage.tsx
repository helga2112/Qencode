import githubIcon from '@/assets/githubIcon.svg'
import googleIcon from '@/assets/googleIcon.svg'
import './../LoginPage.scss'
import IconButton from '@/components/buttons/iconButton/IconButton';
import FilledButton from '@/components/buttons/filledButton/FilledButton';
import LoginPageWrapper from '@/components/loginWrapper/LoginWrapper';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { isEmailValid } from '@/utils/isEmailValid';
import InputWithValidation from '@/components/inputWithValidation/InputWithValidation';
import { useAppDispatch } from '@/app/hooks'
import { savelogin } from '@/features/login/login-slice';
import { useLoginAppQuery } from '@/features/async-api/async-api-slice';
import { constants } from 'buffer';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { data = {}, isFetching } = useLoginAppQuery({ email: 'user@example.com', password: 'pass123123123' })
  
  const [isFormValid, setFormValid] = useState(false)
  const loginRef = useRef<HTMLInputElement>(null)
  
  const addLogin = () => {
    const login = loginRef.current?.value!
    dispatch(savelogin(login))
    navigate('/login')
  }

  console.log('>>>>>',data)

  return (
    <LoginPageWrapper>
      <div className="LoginFormContainer">
        <div>{JSON.stringify(data)}</div>
        <div className='HelpText'>Login to your account</div>
        <div className='LoginButtons'>
          <IconButton title='Google' imgSource={googleIcon} />
          <IconButton title='Github' imgSource={githubIcon} />
        </div>
        <div className="Divider">OR</div>
        <InputWithValidation
          ref={loginRef}
          error='Please enter a value.'
          validator={isEmailValid}
          setValid={setFormValid} />
        <FilledButton title='Login to Qencode' onClick={addLogin} disabled={!isFormValid} />
        <span className="BottomText">Is your company new to Qencode?
          <a href='http://google.com'>Sign up</a>
        </span>
      </div>
    </LoginPageWrapper>
  );
}

export default LoginPage;
