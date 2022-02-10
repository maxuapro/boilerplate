// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Data
import { tempData } from './tempData';
import moment from 'moment';

// Types
type PropTypes = {
    /* type props here */
}

interface Art {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: string[];
}
const Article: FC<Art> = ({
    title,
    description,
    published,
    likes,
    comments,
    image,
    tags,
}) => {
    return (
        <S.Article>
            <header>
                <S.Poster>
                    <img
                        alt = { title }
                        src = { image }
                    />
                </S.Poster>
                <S.Tags>
                    {
                        tags.map((tag) => (
                            <div key = { tag }>
                                <S.Tag>Literature</S.Tag>
                            </div>
                        ))
                    }
                </S.Tags>
            </header>
            <article>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <footer>
                <span>
                    {moment(published).format('l')}
                </span>
                <div className = 'controls'>
                    <S.CommentsCounter>{comments}</S.CommentsCounter>
                    <S.LikesCounter>{likes}</S.LikesCounter>
                </div>
            </footer>
        </S.Article>
    );
};

const LessonOne: FC<PropTypes> = () => {
    return (
        <S.News>
            {
                tempData.map((card) => (
                    <Article
                        comments = { card.comments }
                        description = { card.description }
                        image = { card.image }
                        key = { card.title }
                        likes = { card.likes }
                        published = { card.published }
                        tags = { card.tags }
                        title = { card.title }
                    />
                ))
            }
        </S.News>
    );
};

export default () => (
    <ErrorBoundary>
        <LessonOne />
    </ErrorBoundary>
);
