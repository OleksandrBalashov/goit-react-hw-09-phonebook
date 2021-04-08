import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../../../../redux/auth';
import routes from '../../../../../routes';

const PublicRoutes = () => {
  const isAuthorized = useSelector(isAuthenticated);

  return routes.map(
    ({
      name,
      exact,
      path,
      component: Component,
      restricted,
      redirectTo,
      priv,
    }) =>
      !priv && (
        <Route
          exact={exact}
          path={path}
          key={name}
          render={props =>
            !!isAuthorized && restricted ? (
              <Redirect to={redirectTo} />
            ) : (
              <Component {...props} />
            )
          }
        />
      ),
  );
};

// const PublicRoutes = () => {
//   const isAuthorized = useSelector(isAuthenticated);

//   return routes.map(
//     ({ name, exact, path, children, restricted, redirectTo, priv }) =>
//       !priv && (
//         <Route exact={exact} path={path} key={name}>
//           {!!isAuthorized && restricted ? (
//             <Redirect to={redirectTo} />
//           ) : (
//             children
//           )}
//         </Route>
//       ),
//   );
// };

export default PublicRoutes;
