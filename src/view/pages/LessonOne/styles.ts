// Core
import styled from 'styled-components';

export const News = styled.section`

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0;
  margin: 30px auto;
`;

export const Article = styled.section`
  width: 330px;
  height: 530px;
  margin-right: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  & header {
    position: relative;
    background: red;
    height: 280px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  & article {
    padding: 35px 34px 15px;

    h1 {
      margin-top: 0;
      margin-bottom: 15px;
      font-family: Helvetica;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-family: Helvetica;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
    }
  }

  & footer {
    display: flex;
    justify-content: space-between;
    border-top-color: lightgray;
    border-top-width: 1px;
    border-top-style: solid;
    padding: 16px 34px 0;
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    .controls {
      display: flex;
      width: 136px;
      justify-content: space-between;
    }
  }
`;

export const Poster = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      height: 100%;
    }
`;

export const Tags = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 35px;
    div {
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
`;

export const Tag = styled.span`
    background-color: orange;
    color: black;
    border: none;
    border-radius: 3px;
    padding: 6px 15px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
`;

export const CommentsCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
      content: '👋';
      display: inline;
      font-size: 11px;
      opacity: 0.6;
  }
`;

export const LikesCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
      content: '♥';
      display: inline;
      font-size: 11px;
      opacity: 0.6;
    }
`;
