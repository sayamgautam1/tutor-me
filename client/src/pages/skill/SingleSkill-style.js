import styled, { keyframes } from "styled-components";

import { breakpoints } from "../../components/Media";

export const Left = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    text-align: start;
    flex: 40%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
    padding: 10px;
  }
`;

export const Right = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-contents: center;
    
  }
`;
const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export const Layout = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
  a {
    text-decoration: none;
    color: black;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 20px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 20px;
    margin: 0px auto;
  }
`;

export const Content = styled.div`
  max-width: 2000px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff0f1;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
  border-radius: 5%;
`;

export const RowSpacer = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  position: relative;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  background-color: #181818;
  height: 20vh;
  max-height: 500px;
  min-height: 150px;

  @media (min-width: 768px) {
    min-height: 340px;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 10vh;
    background-color: #181818;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), #121212);
    position: absolute;
    top: 100%;
    z-index: -1;
  }

  .header__inner {
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 24px 16px;

    @media (min-width: 768px) {
      padding: 32px 64px;
    }
  }

  img.header__img {
    width: 20%;
    max-width: 250px;
    min-width: 120px;
    margin-right: 24px;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    background-color: var(--dark-grey);
    border-radius: ${(props) => (props.type === "user" ? "50%" : "0")};

    @media (min-width: 768px) {
      margin-right: 32px;
    }
  }

  .header__overline {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  h1.header__name {
    font-size: clamp(2.5rem, 10vw, 6rem);
    font-weight: 900;
    line-height: 1;
    margin: 0 0 8px 0;

    @media (min-width: 768px) {
      margin: 0 0 8px -5px;
    }
  }

  .header__meta {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #b3b3b3;
    margin: 0;

    span {
      display: flex;
      align-items: center;

      &:not(:last-of-type)::after {
        content: "•";
        display: block;
        margin: 0 8px;
        color: #b3b3b3;
        font-size: 8px;
      }
    }
  }
`;

export const TimeSlotsStyle = styled.div`
  .container {
    padding-top: 30px;
    width: 100%;
    margin: auto;
    cursor: pointer;
  }
  .time-list {
    margin-top: 30px;
  }
  .time {
    list-style: none;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
