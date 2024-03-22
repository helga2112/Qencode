import FilledButton from '@components/buttons/filledButton/FilledButton';
import { useAppDispatch } from '@app/hooks';
import { useNavigate } from 'react-router-dom';
import { clearLoginData } from '@features/login/loginSlice';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearLoginData());
    navigate('/');
  };

  const resetPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div>
      <FilledButton onClick={logout}>Logout</FilledButton>
      <FilledButton onClick={resetPassword}>Reset Password</FilledButton>
    </div>
  );
};

export default HomePage;
