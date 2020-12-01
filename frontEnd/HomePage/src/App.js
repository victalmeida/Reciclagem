import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-notifications/lib/notifications.css';



import { HashRouter ,  BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes/Routes.jsx';





function App() {
  return (
    <Router>
        
            <div className="App">
            <Routes/>
            </div>
      
    </Router>
  );
}

export default App;
