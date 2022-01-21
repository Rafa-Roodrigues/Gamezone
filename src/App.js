import { Router } from './routes';
import { GlobalStyle } from './styles/global';


import { Provider } from 'react-redux';
import store from './app/store';

import 'react-toastify/dist/ReactToastify.css';


export function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router/>
    </Provider>
  )
}