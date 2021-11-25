// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const items = [
    {
        id:   '0',
        name: 'Item 1',
    },
    {
        id:   '1',
        name: 'Item 2',
    },
    {
        id:   '2',
        name: 'Item 3',
    },
];

const Items: FC<PropTypes> = () => {
    return (
        <S.Container padding = { 20 }>
            Page: Items
            <div>
                {
                    items.map((item) => (
                        <div key = { item.id }>
                            <S.NavButton to = { item.id }>{item.name}</S.NavButton>
                        </div>
                    ))
                }
            </div>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Items />
    </ErrorBoundary>
);
