import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: -18px;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Title = styled.p`
  font-size: 12px;
  color: gray;
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Description = styled.p`
  font-size: 14px;
  color: gray;
  width: 70%;
  margin-top: -1px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const A = styled.a`
  text-decoration: none;
  font-size: 16px;
  margin-top: -8px;
  color: #1a0dab;
  &:hover {
    text-decoration: underline;
  }
`;
const SearchResult = ({ result }) => {
  return (
    <Container>
      <Title>{result.title}</Title>
      <A href={result.link} noreferer>
        {result.link.length > 30 ? result.link.substr(0, 30) : result.link}
      </A>
      <Description>{result.description}</Description>
    </Container>
  );
};

export default SearchResult;
