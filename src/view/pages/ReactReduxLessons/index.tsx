// Core
import React, { FC } from 'react';
// import styled from 'styled-components';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import './colors.css';
// Types
type PropTypes = {
    /* type props here */
}

const links = [
    { url: 'lesson1', title: 'Lesson 1' },
    { url: 'lesson2', title: 'Lesson 2' },
    { url: 'lesson3', title: 'Lesson 3' },
    { url: 'lesson4', title: 'Lesson 4' },
    { url: 'lesson5', title: 'Lesson 5' },
];

const ReactReduxLessons: FC<PropTypes> = () => {
    return (
        <section>
            <S.Title className = 'withFont'>
                <h1>React Redux Lessons</h1>
            </S.Title>
            <S.Container >
                {
                    links.map((page) => (
                        <S.LessonLink
                            className = 'withFont'
                            key = { page.url }
                            to = { `/lessons/${page.url}` }>
                            <h1>{page.title}</h1>
                        </S.LessonLink>
                    ))
                }
            </S.Container>
        </section>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactReduxLessons />
    </ErrorBoundary>
);
