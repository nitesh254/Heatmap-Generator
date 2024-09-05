import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import { ToastContainer } from 'react-toastify';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
      <ToastContainer/>
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
