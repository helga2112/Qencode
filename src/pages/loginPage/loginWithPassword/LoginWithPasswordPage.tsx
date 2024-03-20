import { useEffect, useRef, useState } from 'react';
import githubIcon from './../../../assets/githubIcon.svg'
import googleIcon from './../../../assets/googleIcon.svg'
import './../LoginPage.scss'
import FilledButton from '../../../components/buttons/filledButton/FilledButton';
import IconButton from '../../../components/buttons/iconButton/IconButton';
import InputPassword from '../../../components/inputPassword/ImputPassword';
import { useNavigate } from 'react-router-dom';
import LoginPageWrapper from '../../../components/loginWrapper/LoginWrapper';
import { useLoginAppPostMutation } from '../../../features/async-api/async-api-slice';
import { useAppDispatch } from '../../../app/hooks';
import BackdropWrapper from '../../../components/backdropWrapper/BackdropWrapper';
import { savelogin } from '../../../features/login/login-slice';


function LoginWithPasswordPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loginRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isFormValid, setFormValid] = useState(false)

  const [sendData, { data, isLoading, isSuccess, isError }] = useLoginAppPostMutation()
  //const { data = {}, isFetching } = useLoginAppQuery({ email: 'user@example.com', password: 'pass123123123' })

  const forgotPassword = () => {
    navigate('/forget-password')
  }

  const addLogin = () => {

    console.log('addLogin', data)
    const login = loginRef.current?.value!
    sendData({ email: login, password: '12312313123' })

  }

  useEffect(() => {
    if (isSuccess) {
      const login = loginRef.current?.value!
      dispatch(savelogin(login))
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <>
      <BackdropWrapper isVisible={isLoading} />
      <LoginPageWrapper>
        <div className="LoginFormContainer">
          <div className='HelpText'>  Login to your account</div>
          <div className='LoginButtons'>
            <IconButton title='Google' imgSource={googleIcon} />
            <IconButton title='Github' imgSource={githubIcon} />
          </div>
          <div className="Divider">OR</div>
          <InputPassword
            ref={passwordRef}
            setValid={setFormValid} />
          <div className='ForgotEmail' onClick={forgotPassword}>Forgot your password?</div>
          <FilledButton title='Login to Qencode' disabled={isFormValid} onClick={addLogin} />
          <span className="BottomText">Is your company new to Qencode?
            <a href='http://google.com'>Sign up</a>
          </span>
        </div>
      </LoginPageWrapper>
    </>
  );
}

export default LoginWithPasswordPage;
