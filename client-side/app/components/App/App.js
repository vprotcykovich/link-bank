/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route} from 'react-router-dom';

import Tables from 'components/Tables/Tables';
import NotFoundPage from 'components/NotFoundPage/Loadable';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import AddLink from 'components/AddNewLink/AddLink';


import './style.scss';

const App = () => (
  <div className="app-wrapper">

    <Switch>
      <Route exact path="/create-url" component={AddLink}/>
      <Route exact path="/" component={Tables}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route path="" component={NotFoundPage}/>
    </Switch>
  </div>
);

export default App;
