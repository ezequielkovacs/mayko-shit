import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Lobby';


const BaseRouter = () => (
  <div>

    <Route exact path="/" component={Dashboard} />{" "}

  </div>
);

export default BaseRouter;
