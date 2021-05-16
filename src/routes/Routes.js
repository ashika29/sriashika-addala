import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paths from './paths';

function Routes() {
    return (
          <Switch>
            {Paths.map(
              ({ path, component: Component, exact }, key) => {
                return (
                  <Route
                    exact={exact}
                          path={path}
                          component={Component}
                          key={key}
                        />
                )
              }
            )}
          </Switch>
    )
}

Routes.propTypes = {

}

export default Routes
