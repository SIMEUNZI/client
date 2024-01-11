import React from 'react';
import ReactDOM from 'react-dom/client';
import './fruitables-1.0.0/css/bootstrap.min.css';
import './fruitables-1.0.0/css/style.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RecoilRoot> 
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</RecoilRoot>
);


reportWebVitals();
