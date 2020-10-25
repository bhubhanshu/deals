import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';
import Loading from './components/LoadingComponent'

const Deals = React.lazy(() => import('./components/DealComponent'));
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={Loading}>
      <Deals />
    </Suspense>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('carousel')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
