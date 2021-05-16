import { lazy } from 'react';

const Home = lazy(() =>
  import('../views/Home')
);

export const HOME = "/";
export const ABOUT = "/about";
export const RESUME = "/resume";
export const CONTACT = "/contact";
export const PROJECTS = "/projects";

const ROUTES = [
    {
    path: HOME,
    component: Home,
    exact: false,
  }
];
export default ROUTES;