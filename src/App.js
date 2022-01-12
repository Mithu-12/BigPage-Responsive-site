import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
