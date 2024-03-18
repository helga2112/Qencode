import ForgetPasswordForm from '../../components/loginForms/ForgetPasswordForm';
import LoginForm from '../../components/loginForms/LoginForm';
import LoginWithPasswordForm from '../../components/loginForms/LoginWithPasswordForm';
import ResetPasswordForm from '../../components/loginForms/ResetPasswordForm';
import Logo from './../../assets/Logo.svg'


const LoginPage = () => {

  return (
    <div >
      <img src={Logo} alt='' />
      <ResetPasswordForm />
     {/*  <ForgetPasswordForm /> */}
     {/*  <LoginWithPasswordForm /> */}
   {/*    <LoginForm /> */}
    </div>
  );
}

export default LoginPage;
