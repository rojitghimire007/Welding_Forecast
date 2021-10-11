import React, { ComponentType } from 'react';
import ShowPipes from 'views/pipes/ShowPipes';
import ShowFittings from 'views/fittings/ShowFittings';

const Dashboard = React.lazy(() => import('views/dashboard/Dashboard'));
const StrungPipes = React.lazy(() => import('views/stringing/StrungPipes'));
const Login = React.lazy(() => import('views/Login'));
// const Organizations = React.lazy(() =>
//   import("./views/organizations/Organizations")
// );
// const AddOrganization = React.lazy(() =>
//   import("./views/organizations/AddOrganization")
// );
// const OrganizationDetails = React.lazy(() =>
//   import("./views/organizations/OrganizationDetails")
// );

const routes: {
  path: string;
  name: string;
  component: ComponentType<any>;
  exact: boolean;
}[] = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/pipes', exact: true, name: 'Show', component: ShowPipes },
  { path: '/pipes/strung', exact: true, name: 'Show', component: StrungPipes },
  { path: '/fittings', exact: true, name: 'Fittings', component: ShowFittings },
  //   {
  //     path: "/organizations/",
  //     exact: true,
  //     name: "Organizations",
  //     component: Organizations,
  //   },
];

export default routes;
