import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../../../redux/auth';
import routes from '../../../../../routes';

const PrivateRoutes = () => {
  const isAuthorized = useSelector(isAuthenticated);

  return routes.map(
    ({ name, exact, path, component: Component, redirectTo, priv }) =>
      priv && (
        <Route
          exact={exact}
          path={path}
          key={name}
          render={props =>
            !!isAuthorized ? (
              <Component {...props} />
            ) : (
              <Redirect to={redirectTo} />
            )
          }
        />
      ),
  );
};

export default PrivateRoutes;
