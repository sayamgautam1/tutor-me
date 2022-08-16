import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../components/Media";

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

  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
  border-radius: 5%;
`;

export const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  @media (min-width: 900px) {
  }
`;

export const Left = styled.div`
  flex: 100%;
  padding: 10px;
  @media (min-width: 900px) {
    flex: 40%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 150px;
  }
`;

export const Right = styled.div`
  flex: 100%;
  padding: 20px;
  @media (min-width: 900px) {
    flex: 60%;
    height: auto;
    display: flex;
    position: relative;
  }
`;
