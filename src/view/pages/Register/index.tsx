// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Register: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Register
            <br/>
            <Link to = '/items'>Items</Link>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
