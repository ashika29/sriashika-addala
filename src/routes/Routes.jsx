/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes as Switch, Route } from 'react-router-dom';
import Paths from './paths';
import Fallback from '../components/Fallback';

function Routes() {
  const currentPath = window.location.pathname;
  const whitelistedPaths = Paths.map(({ path }) => path);

  return (
    <Switch>
      {Paths.map(({ path, component: Component, exact }) => (
        <Route exact={exact} path={path} element={<Component />} key={`${path}`} />
      ))}
      {!whitelistedPaths.includes(currentPath) && (
        <Route exact path={currentPath} element={<Fallback />} />
      )}
    </Switch>
  );
}

Routes.propTypes = {};

export default Routes;
