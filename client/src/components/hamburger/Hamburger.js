import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "./hamburger.svg";
import hamburgerHover from "./hamburgerHover.svg";
import close from "./close.svg";
import { useState } from "react";
import { breakpoints } from "../Media";
import Button from "../button/Button";
import { FaSearch, FaBriefcase, FaQuestionCircle } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Auth from "../../utils/auth";
import SearchBar from "../../components/searchbar/SearchBar";
import { QUERY_SKILLS } from "../../utils/queries";

const HamburgerContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  height: ${(props) => (props.on ? `` : `100%`)};
  width: 100%;
  z-index: 9999;
  @media (min-width: ${breakpoints.mobileMax}) {
    right: 20px;
    top: 20px;
    width: unset;
  } ;
`;
const HamburgerImg = styled.div`
  z-index: 99999;
  display: block;
  position: absolute;
  top: 30px;
  right: 60px;
  width: ${(props) => (props.on ? `40px` : `20px`)};
  height: 30px;
  display: block;
  background-image: ${(props) =>
    props.on ? `url(${hamburger})` : `url(${close})`};
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 1;
  transform: translate(40px);
  transition-duration: 0.2s;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  @media (min-width: ${breakpoints.mobileMax}) {
    top: 40px;
    right: 80px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    background-image: ${(props) =>
      props.on ? `url(${hamburgerHover})` : `url(${close})`};
  }
`;

const NavContainer = styled.div`
  height: 100%;
  z-index: 999;
  width: 100%;
  padding-left: 30px;
  background-color: black;
  position: ${(props) => (props.on ? "fixed" : "absolute")};
  display: block;
  right: 0;
  top: 0;
  opacity: 0;
  animation: ${(props) =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 500px;
    right: 0;
    top: 0;
    padding-left: 80px;
  }
  @keyframes SlideFromLeft {
    0% {
      transform: translate(1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes SlideOutRight {
    0% {
      transform: translate(0);
      opacity: 1;
    }
    100% {
      transform: translate(1000px);
      opacity: 0;
    }
  }
`;
const LoggedInLinks = styled.div`
  margin-top: 100px;
  width: auto;
  & > a {
    display: block;
    color: #b4e0e8;
    text-decoration: none;
    font-weight: 800;
    font-size: 45px;
    margin: 31px 0 0 81px;
    line-height: 91.45%;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: ${(props) => (props.on ? "none" : "SlideInText .7s forwards")};
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    @keyframes SlideInText {
      0% {
        transform: translate(100px);
        opacity: 0;
      }
      100% {
        transform: translate(0);
        opacity: 1;
      }
    }
    &::after {
      width: 0px;
      left: -10px;
      content: "";
      display: inline-block;
      height: 20px;
      position: absolute;
      bottom: 0px;
      z-index: -2;
      background-color: #ff6362;
      transition: width 0.4s;
    }
    &:hover::after {
      width: 160px;
    }
    &:nth-child(2):hover::after {
      width: 170px;
    }
    &:nth-child(3):hover::after {
      width: 155px;
    }
    &:nth-child(4):hover::after {
      width: 205px;
    }
  }
`;

const Links = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;
const SearchBox = styled.div`
  font-size: 2em;
  line-height: 2em;
  height: 35%;
  letter-spacing: 0.03em;
  font-family: "Lato", sans-serif;
  .blue {
    color: #ff6362;
  }
  .button {
    background-color: #ff6362;
    color: white;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 25px;
    padding: 7px;
    width: 100%;
    border-radius: 25px;
    line-height: 156.19%;
    margin-bottom: 50px;
  }
`;
const Hamburger = () => {
  const [toggle, setToggle] = useState(true);

  const [visibleComponent, setVisibleComponent] = useState("");

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <HamburgerContainer on={toggle}>
      <HamburgerImg on={toggle} onClick={() => setToggle(!toggle)} />

      <NavContainer on={toggle}>
        {visibleComponent === "login" ? (
          <div>
            <SearchBox>
              <Login stateChanger={setVisibleComponent} />
            </SearchBox>
          </div>
        ) : visibleComponent === "signup" ? (
          <div>
            <SearchBox>
              <Signup stateChanger={setVisibleComponent} />
            </SearchBox>
          </div>
        ) : Auth.loggedIn() ? (
          <>
            <LoggedInLinks>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </LoggedInLinks>
            <LoggedInLinks>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            </LoggedInLinks>
            <LoggedInLinks>
              <SearchBox>
                <button
                  className="button"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => logout(e)}
                >
                  Logout
                </button>
              </SearchBox>
            </LoggedInLinks>
          </>
        ) : (
          <Links on={toggle}>
            <SearchBox>
              <button
                className="button"
                style={{ cursor: "pointer" }}
                onClick={() => setVisibleComponent("login")}
              >
                Log In
              </button>
            </SearchBox>

            <Button
              className="button"
              style={{ cursor: "pointer" }}
              onClick={() => setVisibleComponent("signup")}
            >
              Sign up
            </Button>

            <SearchBox on={toggle}>
              <FaSearch /> <br />
              Search a <span className="blue">Tutor</span>
              <br />
              <FaBriefcase /> <br />
              Become a <span className="blue">Tutor</span> <br />
              <FaQuestionCircle /> <br />
              Contact
            </SearchBox>
          </Links>
        )}
      </NavContainer>
    </HamburgerContainer>
  );
};

export default Hamburger;
