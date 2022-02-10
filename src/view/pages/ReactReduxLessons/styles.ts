// Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    width: 50%;
    padding: 0 10px;
    margin: 0 auto;
    /* border: 1px solid black; */
`;

export const Title = styled.section`
    padding: 50px 0;
    text-align: center;
    & h1 {
        font-size: 3rem;
    }
`;

export const LessonLink = styled(Link)`
    margin: 10px 0;
    /* border: 3px solid white; */
    border-radius: 50px;
    padding: 15px;
    display: block;
    text-decoration: none;
    text-align: center;
    background: rgb(109, 255, 248);

    & h1 {
        color: black;
        font-size: 1.5rem;
    }

    &:hover {
        background: rgb(18, 206, 196);
    }
`;
