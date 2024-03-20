import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/components/routers/AppRputer';
import { store } from './app/store'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
