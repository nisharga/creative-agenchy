import React, { createContext, useState } from 'react';  
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import ServiceList from './Components/Services/ServiceList/ServiceList';
import Review from './Components/Services/Review/Review';
import Order from './Components/Services/Order/Order';
import AllService from './Components/AllServiceList/AllService/AllService';
import AddService from './Components/AllServiceList/AddService/AddService';
import MakeAdmin from './Components/AllServiceList/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const authContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <authContext.Provider value={[user, setUser]}>

    <Router>
      <div> 
        <Switch>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/allservice">
            <AllService></AllService>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </Router>

    </authContext.Provider>
  );
}

export default App;
