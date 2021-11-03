import React from "react";
import SearchSvg from "./ListLogo/SearchSvg";
import NewsSvg from "./ListLogo/NewsSvg";
import VideoSvg from "./ListLogo/VideoSvg";
import ImageSvg from "./ListLogo/ImageSvg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding: 0 50px;
  position: relative;
  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 0;
  }
`;

const WrappList = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  width: 70px;
`;

const Text = styled.p`
  font-size: 12px;
  color: gray;
  cursor: pointer;
  margin-left: 4px;
  &:hover {
    color: #4c8bf5;
  }
`;
const BorderBottom = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
`;
const List = () => {
  return (
    <div>
      <Container>
        <WrappList>
          <SearchSvg />
          <Links to="/search">
            <Text>All</Text>
          </Links>
        </WrappList>
        <WrappList>
          <ImageSvg />
          <Links to="/images">
            <Text>Image</Text>
          </Links>
        </WrappList>
        <WrappList>
          <VideoSvg />
          <Links to="/videos">
            <Text>Videos</Text>
          </Links>
        </WrappList>
        <WrappList>
          <NewsSvg />
          <Links to="/news">
            <Text>News</Text>
          </Links>
        </WrappList>
      </Container>
      <BorderBottom />
    </div>
  );
};

export default List;
