import { lazy } from 'react';
const Base = lazy(() => import('../views/ComingSoon'));

export const BASE = "/";
export const HOME = "/home";
export const ABOUT = "/about";
export const RESUME = "/resume";
export const CONTACT = "/contact";
export const PROJECTS = "/projects";

const ROUTES = [
    {
    path: BASE,
    component: Base,
    exact: false,
  }
];
export default ROUTES;