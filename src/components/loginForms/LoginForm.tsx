import  githubIcon  from './../../assets/githubIcon.svg'
import  googleIcon  from './../../assets/googleIcon.svg'
import InputWithValidation from '../inputWithValidation/InputWithValidation';
import './LoginForm.scss'
import IconButton from '../buttons/iconButton/IconButton';
import FilledButton from '../buttons/filledButton/FilledButton';


function LoginForm() {

  return (
    <div className="LoginFormContainer">
      <div className='HelpText'>Login to your account</div>
      <div className='LoginButtons'>
        <IconButton title='Google' imgSource={googleIcon} />
        <IconButton title='Github' imgSource={githubIcon} />
      </div>
      <div className="Divider">OR</div>
      <InputWithValidation/>
      <FilledButton title='Login to Qencode'/>
      <span className="BottomText">Is your company new to Qencode?
        <a href='http://google.com'>Sign up</a>
      </span>
    </div>
  );
}

export default LoginForm;
