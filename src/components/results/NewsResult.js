import React from "react";
import styled from "styled-components";

const WrappNews = styled.div`
  width: 50%;
  padding: 4px 14px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.08);
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Source = styled.p`
  font-size: 10px;
  color: gray;
`;

const Links = styled.a`
  font-size: 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #4c8bf5;
  }
`;

const Title = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    color: #4c8bf5;
  }
`;

const PublishTime = styled.p`
  color: gray;
  font-size: 12px;
`;

const NewsResult = ({ result }) => {
  return (
    <WrappNews>
      <Source> {result.source.href}</Source>
      <Links href={result.link}>
        <Title>{result.title}</Title>
      </Links>
      {/* <Summary>{result.summary}</Summary> */}
      <PublishTime>{result.published}</PublishTime>
    </WrappNews>
  );
};

export default NewsResult;
