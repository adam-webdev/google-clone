import React from "react";
import styled from "styled-components";
import Skeleton from "./Skeleton";

const WrappImg = styled.div`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  @media (max-width: 1000px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 540px) {
    padding: 10px;
    grid-template-columns: auto;
  }
`;
const SkeletonImages = () => {
  return (
    <WrappImg>
      <Skeleton amount={24} width="25%" height="200px" />
    </WrappImg>
  );
};

export default SkeletonImages;
