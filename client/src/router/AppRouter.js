import React, {useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthContext} from './../context'
import {privateRoutes, publicRoutes} from './routes'

const AppRouter = () => {
  const {isAuth, isAdmin, currentUserId} = useContext(AuthContext);

    

  return (
    isAuth
      ?
      (
      isAdmin
             ?

      <Switch>
          {privateRoutes.map(route =>
              <Route
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                  key={route.path}
              />
          )}
          <Redirect to='/executors'/>
      </Switch>

      :
            <Switch>
            {privateRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/'/>
        </Switch>
      )

      :
      <Switch>
          {publicRoutes.map(route =>
              <Route
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                  key={route.path}
              />
          )}
          <Redirect to='/sign_in'/>
      </Switch>
  )
}


export default AppRouter;
