import styled from "styled-components";
import googleImg from "../image/Adam.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MicIcon from "@mui/icons-material/Mic";
import React, { useState } from "react";
import { useStateContext } from "./../context/Context";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 120px;
  display: absolute;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 375px) {
    width: 90px;
  }
`;
const WrappInput = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  &:hover {
    background-color: #fff;
    box-shadow: 0 2px 8px 1px rgb(64 60 67 / 24%);
    border-color: rgba(223, 225, 229, 0);
  }
  @media (max-width: 460px) {
    width: 80%;s
    height: 40px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;
const Input = styled.input`
  height: 38px;
  width: 90%;
  padding: 6px 24px;
  color: grey;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 100px 0 0 100px;
  @media (max-width: 460px) {
    height: 28px;
  }
`;
const Close = styled(CloseOutlinedIcon)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  transition: 0.5s;
  color: gray;
  &:hover {
    color: red;
  }
  @media (max-width: 460px) {
    height: 16px;
    width: 16px;
  }
`;

const Right = styled.div`
  width: 15%;
  display: flex;
  flex: start;
  padding-right: 10px;
  justify-content: space-evenly;
`;
const Mic = styled(MicIcon)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  transition: 0.5s;
  &:hover {
    color: #4c8bf5;
  }
  @media (max-width: 460px) {
    height: 16px;
    width: 16px;
    margin-right: 0;
  }
`;
const Search = styled(SearchIcon)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  transition: 0.5s;
  &:hover {
    color: #4c8bf5;
  }
  @media (max-width: 460px) {
    height: 16px;
    width: 16px;
  }
`;

const Navbar = () => {
  const [text, setText] = useState("");
  const { setSearchInput } = useStateContext(text);
  const handleClose = () => {
    setText("");
  };
  const handleSearch = () => {
    setSearchInput(text);
  };

  return (
    <Container>
      <Logo src={googleImg} alt="google pic" />
      <WrappInput>
        <Left>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text ? <Close onClick={handleClose} /> : ""}
        </Left>
        <Right>
          <Mic />
          <Search onClick={handleSearch} />
        </Right>
      </WrappInput>
    </Container>
  );
};

export default Navbar;
