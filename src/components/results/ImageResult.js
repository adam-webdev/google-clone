import React from "react";
import styled from "styled-components";

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  transition: 0.5s;
  border-radius: 8px;
`;
const Title = styled.p`
  margin-top: -1px;
  font-size: 14px;
  width: 250px;
  color: gray;
`;
const A = styled.a`
  width: 260px;
  text-decoration: none;
  &:hover {
    color: #4c8bf5;
    text-decoration: underline;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 540px) {
    width: 94%;
  }
`;

const ImageResult = ({ result }) => {
  return (
    <A href={result.link.href} target="_blank">
      <Img src={result.image.src} alt={result.image.alt} />
      <Title>
        {result.link.title.length > 50
          ? result.link.title.substr(0, 50)
          : result.link.title}
      </Title>
    </A>

    // </WrappImg>
  );
};

export default ImageResult;
