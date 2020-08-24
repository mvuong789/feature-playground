import React from 'react';
import ReactDOM from 'react-dom';

// import '../node_modules/normalize.css/normalize.css';
import 'normalize.css';
import './styles/global.styl'

import App from './features/app/App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
