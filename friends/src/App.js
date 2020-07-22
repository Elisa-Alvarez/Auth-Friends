import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./component/Login";
import Friends from "./component/Friends";
import PrivateRoute from "./component/PrivateRoute";


const App = () => {
  return (

         <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
        </ul>
    <Switch>
    <PrivateRoute exact path='/friends' component={Friends}/>
    <Route path='/login' component={Login} />
    <Route component={Login}/>
  </Switch>
  </div>
  )
}

export default App;