import React from "react";
import Skeleton from "./Skeleton";
import styled from "styled-components";

const WrappSkeleton = styled.div`
  padding: 10px 50px;
  position: relative;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const SkeletonSearch = () => {
  return (
    <>
      <WrappSkeleton>
        <Skeleton width="25%" height="20px" />
        <Skeleton width="60%" height="20px" />
        <Skeleton width="75%" height="20px" />
      </WrappSkeleton>
      <WrappSkeleton>
        <Skeleton width="25%" height="20px" />
        <Skeleton width="60%" height="20px" />
        <Skeleton width="75%" height="20px" />
      </WrappSkeleton>
      <WrappSkeleton>
        <Skeleton width="25%" height="20px" />
        <Skeleton width="60%" height="20px" />
        <Skeleton width="75%" height="20px" />
      </WrappSkeleton>
      <WrappSkeleton>
        <Skeleton width="25%" height="20px" />
        <Skeleton width="60%" height="20px" />
        <Skeleton width="75%" height="20px" />
      </WrappSkeleton>
      <WrappSkeleton>
        <Skeleton width="25%" height="20px" />
        <Skeleton width="60%" height="20px" />
        <Skeleton width="75%" height="20px" />
      </WrappSkeleton>
    </>
  );
};

export default SkeletonSearch;
