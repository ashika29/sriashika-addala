import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes as Switch, Route } from 'react-router-dom';
import Paths from './paths';

function Routes() {
  return (
    <Switch>
      {Paths.map(({ path, component: Component, exact }) => (
        <Route exact={exact} path={path} component={Component} key={`${path}`} />
      ))}
    </Switch>
  );
}

Routes.propTypes = {};

export default Routes;
