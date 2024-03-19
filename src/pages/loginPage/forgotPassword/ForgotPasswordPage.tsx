import './../LoginPage.scss'
import FilledButton from '../../../components/buttons/filledButton/FilledButton';
import SimpleButton from '../../../components/buttons/simpleButton/SimpleButton';
import { useNavigate } from 'react-router-dom';
import LoginPageWrapper from '../../../components/loginWrapper/LoginWrapper';


function ForgotPasswordPage() {
  const navigate = useNavigate()

  const resetPassword = () => {
    navigate('/reset-password')
  }

  return (
    <LoginPageWrapper>
      <div className="LoginFormContainer">
        <div className='HelpText'>Forgot password?</div>
        {/* <InputWithValidation /> */}
        <FilledButton title='Login to Qencode' onClick={resetPassword} />
        <SimpleButton title='Cancel' />
      </div>
    </LoginPageWrapper>
  );
}

export default ForgotPasswordPage;
