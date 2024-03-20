import githubIcon from './../../../assets/githubIcon.svg'
import googleIcon from './../../../assets/googleIcon.svg'
import './../LoginPage.scss'
import FilledButton from '../../../components/buttons/filledButton/FilledButton';
import IconButton from '../../../components/buttons/iconButton/IconButton';
import InputPassword from '../../../components/inputPassword/ImputPassword';
import { useNavigate } from 'react-router-dom';
import LoginPageWrapper from '../../../components/loginWrapper/LoginWrapper';
import { useRef, useState } from 'react';
import InputWithValidation from '../../../components/inputWithValidation/InputWithValidation';
import { isEmptyString } from '../../../utils/usEmptyString';


function LoginWithPasswordPage() {
  const navigate = useNavigate()
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isFormValid, setFormValid] = useState(false)

  const forgotPassword = () => {
    navigate('/forget-password')
  }

  return (
    <LoginPageWrapper>
      <div className="LoginFormContainer">
        <div className='HelpText'>  Login to your account</div>
        <div className='LoginButtons'>
          <IconButton title='Google' imgSource={googleIcon} />
          <IconButton title='Github' imgSource={githubIcon} />
        </div>
        <div className="Divider">OR</div>
        {/* <InputWithValidation
          ref={passwordRef}
          error='Please enter password'
          validator={isEmptyString}
          setValid={setFormValid} /> */}
        <InputPassword
          ref={passwordRef}
          setValid={setFormValid} />
        <div className='ForgotEmail' onClick={forgotPassword}>Forgot your password?</div>
        <FilledButton title='Login to Qencode' disabled={isFormValid} />
        <span className="BottomText">Is your company new to Qencode?
          <a href='http://google.com'>Sign up</a>
        </span>
      </div>
    </LoginPageWrapper>
  );
}

export default LoginWithPasswordPage;
