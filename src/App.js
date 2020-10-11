import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SignUp from './component /formulaire';
import Login from "./component /login"
import FirstPage from './component /landingpage';
import HomePage from './component /HomePage';
import ForgetPassword from './component /forgetPassword';
function App() {
  return (
    <div >
      <Router>

      <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route exact path="/register" component={SignUp} />
         <Route exact path="/login" component={Login} />
          <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route exact path="/welcome" component={FirstPage} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
