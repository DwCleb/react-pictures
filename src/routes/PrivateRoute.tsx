import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface RoutePrivateProps extends RouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

export function PrivateRoute({
  isPrivate,
  component: Component,
  ...rest
}: RoutePrivateProps): JSX.Element {
  const isAuthenticated = sessionStorage.getItem('authenticated') || null;

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/home' }} />
        );
      }}
    />
  );
}
