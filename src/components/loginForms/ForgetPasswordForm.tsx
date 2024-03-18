import './LoginForm.scss'
import InputWithValidation from '../inputWithValidation/InputWithValidation';
import FilledButton from '../buttons/filledButton/FilledButton';
import SimpleButton from '../buttons/simpleButton/SimpleButton';


function ForgetPasswordForm() {

  return (
    <div className="LoginFormContainer">
      <div className='HelpText'>Forgot password?</div>
      <InputWithValidation />
      <FilledButton title='Login to Qencode' />
      <SimpleButton title='Cancel' />

    </div>
  );
}

export default ForgetPasswordForm;
