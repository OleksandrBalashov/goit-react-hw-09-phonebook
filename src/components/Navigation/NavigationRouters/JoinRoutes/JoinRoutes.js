import PrivateRoutes from './Pub&PrivRoutes/PrivateRoutes';
import PublicRoutes from './Pub&PrivRoutes/PublicRoutes';
// import routes from '../../../../routes';

const JoinRoutes = () => (
  <>
    <PrivateRoutes />
    <PublicRoutes />

    {/* {routes.map(
      ({ component, priv, name }) =>
        priv && <PrivateRoutes key={name}>{component}</PrivateRoutes>,
    )}
    {routes.map(
      ({ component, priv, name }) =>
        !priv && <PublicRoutes key={name}>{component}</PublicRoutes>,
    )} */}
  </>
);

export default JoinRoutes;
