import React from "react";
import styled from "styled-components";
import Buttons from "../Common/Button";
import media from "../../libs/MediaQuery";

export const Li = styled.li`
  flex-basis: 20%;
  margin: 0 2% 5%;

  ${media.tablet`
    flex-basis: 40%;
    margin: 0 5% 5%;
  `}

  ${media.mobile`
    flex-basis: 100%;
    margin: 0 0 15%;
  `}
`;

export const ImgBox = styled.div`
  position: relative;
  margin: 0 0 20px;
  padding: 100% 0 0;

  img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px #dedede;
  }
`;

export const Title = styled.p`
  margin: 0 0 15px;
  font-size: 2rem;
  color: #222;
  word-break: keep-all;
`;

export const Author = styled.p`
  margin: 0 0 15px;
  font-size: 1.2rem;
  color: #585959;
`;

export const Message = styled.p`
  margin: 0 0 20px;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #222;
  word-break: keep-all;
`;

const BookItem = ({ book, removeBook }) => {
  return (
    <Li>
      <ImgBox>
        <img src={book.url} alt={book.title} />
      </ImgBox>
      <Title>{book.title}</Title>
      <Author>저자 {book.author}</Author>
      <Message>{book.message}</Message>
      <Buttons
        size="small"
        color="pink"
        onClick={() => removeBook(book.bookId)}
      >
        Remove
      </Buttons>
    </Li>
  );
};

export default BookItem;
