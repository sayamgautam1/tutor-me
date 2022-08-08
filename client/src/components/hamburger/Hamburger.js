import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import hamburger from './hamburger.svg'
import hamburgerHover from './hamburgerHover.svg'
import close from './close.svg'
import { useState } from 'react'
import { breakpoints } from '../Media'
import Button from '../button/Button'
import { FaSearch, FaBriefcase, FaQuestionCircle } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

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
`
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
`

const NavContainer = styled.div`
  height: 100%;
  z-index: 999;
  width: 100%;
  padding-left: 30px;
  background-color: white;
  position: ${(props) => (props.on ? 'fixed' : 'absolute')};
  display: block;
  right: 0;
  top: 0;
  opacity: 0;
  animation: ${(props) =>
    props.on ? 'SlideOutRight .7s forwards' : 'SlideFromLeft .5s forwards'};
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
`
const Links = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
`

const SearchBox = styled.div`
  font-size: 2em;
  line-height: 2em;
  height: 35%;
  letter-spacing: 0.03em;
  font-family: 'Lato', sans-serif;
  .blue {
    color: #ff6362;
  }
`
const Hamburger = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <HamburgerContainer on={toggle}>
      <HamburgerImg on={toggle} onClick={() => setToggle(!toggle)} />

      <NavContainer on={toggle}>
        <Links on={toggle}>
          <Button>Log In</Button>

          <Button className="white">Sign up</Button>
        </Links>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <SearchBox on={toggle}>
          <FaSearch /> <br />
          Search a <span className="blue">Tutor</span>
          <br />
          <FaBriefcase /> <br />
          Become a <span className="blue">Tutor</span> <br />
          <FaQuestionCircle /> <br />
          Contact
        </SearchBox>
      </NavContainer>
    </HamburgerContainer>
  )
}

export default Hamburger
