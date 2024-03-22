import React from 'react';
import Logo from '@assets/Logo.svg';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const LoginPageWrapper = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className={styles.logo}>
      <img src={Logo} alt="" onClick={goToHomePage} />
      {children}
    </div>
  );
};

export default LoginPageWrapper;
