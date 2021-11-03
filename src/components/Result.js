import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "./../context/Context";
import SearchResult from "./results/SearchResult";
import ImageResult from "./results/ImageResult";
import styled from "styled-components";
import NewsResult from "./results/NewsResult";
import VideoResult from "./results/VideoResult";
import Skeleton from "./../partials/Skeleton";
import SkeletonSearch from "./../partials/SkeletonSearch";

const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flex ? props.flex : "column")};
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const WrappImg = styled.div`
  padding: 10px 50px;
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

const Result = () => {
  const { results, getResults, searchInput, loading } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchInput !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchInput} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchInput}&num=50`);
      }
    }
  }, [searchInput, location.pathname]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  switch (location.pathname) {
    case "/search":
      return (
        <>
          {loading ? (
            <SkeletonSearch />
          ) : (
            results?.results?.map((result, index) => (
              <SearchResult result={result} key={index} />
            ))
          )}
          ;
        </>
      );
    case "/images":
      return (
        <WrappImg>
          {loading ? (
            <Skeleton amount={24} width="250px" height="200px" />
          ) : (
            results?.image_results?.map((result, index) => (
              <ImageResult key={index} result={result} />
            ))
          )}
        </WrappImg>
      );
    case "/news":
      return (
        <Container>
          {loading ? (
            <Skeleton amount={8} width="50%" height="170px" />
          ) : (
            results?.entries?.map((result, index) => (
              <NewsResult key={index} result={result} />
            ))
          )}
        </Container>
      );
    case "/videos":
      return (
        <Container>
          {loading ? (
            <Skeleton amount={8} width="90%" height="300px" />
          ) : (
            results?.results?.map((result, index) => (
              <VideoResult key={index} result={result} />
            ))
          )}
        </Container>
      );
    default:
      return "ERROR...";
  }
};

export default Result;
