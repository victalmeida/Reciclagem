import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-notifications/lib/notifications.css';



import { HashRouter } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import {Provider} from 'react-redux';
import store from './store'




function App() {
  return (
    <HashRouter>
            <Provider store={store}>
              <div className="App">
              <Routes/>
              </div>
            </Provider>
    </HashRouter>
  );
}

export default App;
