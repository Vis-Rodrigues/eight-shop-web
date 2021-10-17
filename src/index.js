import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Importa o store
import store from './store/store';

//Importa o Provider do React Redux
import { Provider } from 'react-redux';

//Importa o BroserRouter do react-router-dom
import { BrowserRouter } from "react-router-dom";

// import App from './App';
import HomeController from './Pages/Home/HomeController'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Adicionar o Provider com o store importado*/}
      <Provider store={store}>
        <HomeController />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
