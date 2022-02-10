// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

// Pages
import LessonOne from '../LessonOne';

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

interface Map {
    [key: string]: any
}

// List of all lessons
const lessonsList: Map = {
    lesson1: <LessonOne/>,
};

const LessonsPage: FC<PropTypes> = () => {
    const { lesson } = useParams<'lesson'>();
    if (typeof lesson !== 'undefined') {
        if (lesson in lessonsList) {
            return lessonsList[ lesson ];
        }
    }

    return (
        <S.FourOfFour>
            <h1>404 🤡</h1>
            <h2>No page {lesson} found!</h2>
        </S.FourOfFour>
    );
};

export default () => (
    <ErrorBoundary>
        <LessonsPage />
    </ErrorBoundary>
);
