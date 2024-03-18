import './LoginForm.scss'
import FilledButton from '../buttons/filledButton/FilledButton';
import InputPassword from '../inputPassword/ImputPassword';


function ResetPasswordForm() {

  return (
    <div className="LoginFormContainer">
    <div className='HelpText'>Create new Password?</div>
    <div className='InputHelpText'>Password</div>
    <InputPassword/>
    <div className='InputHelpText'>Confirm Password</div>
    <InputPassword/>
    <FilledButton title='Reset Password'/>
  </div>
  );
}

export default ResetPasswordForm;
