import React from 'react';
import Logo from './../../assets/Logo.svg'


const LoginPageWrapper = ({children}: {children: React.ReactElement}) => {
  return (
    <div >
      <img src={Logo} alt='' />
      {children}
    </div>
  );
}

export default LoginPageWrapper;
