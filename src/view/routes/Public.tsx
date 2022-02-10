// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// Pages
import { Main, Register, Items, Item, ReactReduxLessons, LessonsPage } from '../pages';

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:    'lessons',
            element: <ReactReduxLessons />,
        },
        { path: '/lessons/:lesson', element: <LessonsPage /> },
        {
            path:     '',
            element:  <Main />,
            children: [
                { path: 'register', element: <Register /> },
                {
                    path:     'items',
                    element:  <Items />,
                    children: [{ path: ':id', element: <Item /> }],
                },
                { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
    ]);

    return routes;
};
