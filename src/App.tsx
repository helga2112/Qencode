import  githubIcon  from './assets/githubIcon.svg'
import  googleIcon  from './assets/googleIcon.svg'
import  Logo  from './assets/Logo.svg'

import './App.scss';
import InputWithValidation from './components/InpitWithValidation/InputWithValidation';

function App() {

  return (
    <div className="App">
       <img src={Logo} alt='' />
      <div className='HelpText'>Login to your account</div>
      <div className='LoginButtons'>
        <button className='LoginButton'>
          <img src={googleIcon} alt='' />
          Google
        </button>
        <button className='LoginButton'>
          <img src={githubIcon} alt='' />
          Github
        </button>
      </div>
      <div className="Divider">OR</div>
      <InputWithValidation/>
      <button className='MainLoginButton'>Login to Qencode</button>
      <span className="BottomText">Is your company new to Qencode?
        <a href='http://google.com'>Sign up</a>
      </span>
    </div>
  );
}

export default App;
