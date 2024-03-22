import { Provider } from 'react-redux';
import Routers from '@components/routers/Ruters';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Routers />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
