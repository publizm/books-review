import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-34px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-34px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-34px);
  }
`;

export const Feed = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  padding: 7px 20px;
  border-radius: 0 0 5px 5px;
  background: #f20f4b;
  font-size: 1.6rem;
  line-height: 20px;
  color: #fff;
  transform: translateX(-50%);
  animation-duration: 1.8s;
  animation-timing-function: ease;
  animation-name: ${slideDown};
  animation-fill-mode: both;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideUp};
    `}
`;

const Feedback = ({ visible }) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const feedMessage = useSelector(state => state.auth.feedMessage);

  const comment = () => {
    if (feedMessage === "USER_NOT_EXIST") {
      return "존재하지 않는 아이디입니다.";
    } else if (feedMessage === "PASSWORD_NOT_MATCH") {
      return "비밀번호를 확인해주세요.";
    }
  };

  useEffect(() => {
    let hide;

    if (localVisible) {
      hide = setTimeout(() => {
        clearTimeout(hide);
      }, 1800);
    }

    setLocalVisible(visible);

    return () => {
      clearTimeout(hide);
    };
  }, [visible, localVisible]);

  if (!localVisible) return null;

  return <Feed>{comment()}</Feed>;
};

export default Feedback;
