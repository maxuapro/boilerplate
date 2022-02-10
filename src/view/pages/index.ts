// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Items = lazy(() => import(/* webpackChunkName: "Items" */ './Items'));
export const Item = lazy(() => import(/* webpackChunkName: "Item" */ './Item'));
export const ReactReduxLessons = lazy(() => import(/* webpackChunkName: "ReactReduxLessons" */ './ReactReduxLessons'));
export const LessonsPage = lazy(() => import(/* webpackChunkName: "LessonsPage" */ './LessonsPage'));
