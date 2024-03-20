import './../LoginPage.scss'
import FilledButton from '@/components/buttons/filledButton/FilledButton';
import InputPassword from '@/components/inputPassword/ImputPassword';
import { useNavigate } from 'react-router-dom';
import LoginPageWrapper from '@/components/loginWrapper/LoginWrapper';


function ResetPasswordPage() {

  const navigate = useNavigate()

  const resetPassword = () => {
    navigate('/')
  }


  return (
    <LoginPageWrapper>
      <div className="LoginFormContainer">
        <div className='HelpText'>Create new Password?</div>
        <div className='InputHelpText'>Password</div>
       {/*  <InputPassword /> */}
        <div className='InputHelpText'>Confirm Password</div>
       {/*  <InputPassword /> */}
        <FilledButton title='Reset Password' onClick={resetPassword} />
      </div>
    </LoginPageWrapper>
  );
}

export default ResetPasswordPage;
