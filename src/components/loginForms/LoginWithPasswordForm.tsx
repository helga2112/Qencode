import  githubIcon  from './../../assets/githubIcon.svg'
import  googleIcon  from './../../assets/googleIcon.svg'
import './LoginForm.scss'
import InputWithValidation from '../inputWithValidation/InputWithValidation';
import FilledButton from '../buttons/filledButton/FilledButton';
import IconButton from '../buttons/iconButton/IconButton';
import InputPassword from '../inputPassword/ImputPassword';


function LoginWithPasswordForm() {

  return (
    <div className="LoginFormContainer">
    <div className='HelpText'>Login to your account</div>
    <div className='LoginButtons'>
      <IconButton title='Google' imgSource={googleIcon} />
      <IconButton title='Github' imgSource={githubIcon} />
    </div>
    <div className="Divider">OR</div>
    <InputWithValidation/>
    <InputPassword/>
    <div className='ForgotEmail'>Forgot your password?</div>
    <FilledButton title='Login to Qencode'/>
    <span className="BottomText">Is your company new to Qencode?
      <a href='http://google.com'>Sign up</a>
    </span>
  </div>
  );
}

export default LoginWithPasswordForm;
