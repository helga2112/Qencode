import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './components/routers/AppRputer';
import { Provider } from 'react-redux';
import { store } from './app/store'

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
