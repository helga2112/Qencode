import React from 'react';
import Logo from './../../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import './LoginWrapper.scss'

// TODO: one element ?
const LoginPageWrapper = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate('/')
  }

  return (
    <div className='Logo'>
      <img src={Logo} alt='' onClick={goToHomePage} />
      {children}
    </div>
  );
}

export default LoginPageWrapper;
