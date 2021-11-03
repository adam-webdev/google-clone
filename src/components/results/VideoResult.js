import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Video = styled(ReactPlayer)`
  width: 300px;
  position: relative;
  height: 300px;
  margin-bottom: 20px;
  @media (max-width: 540px) {
    width: 200px;
  }
`;

const VideoResult = ({ result }) => {
  return <Video width="92%" url={result.additional_links?.[0].href} controls />;
};

export default VideoResult;
