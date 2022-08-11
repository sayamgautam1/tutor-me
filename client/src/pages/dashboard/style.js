import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../components/Media";

const widthHeightFn = (size, width = 1440) => `${(size / width) * 100}vw`;
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Layout = styled.div`
  height: 100vh;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${widthHeightFn(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  width: ${widthHeightFn(320, 320)};
  min-height: ${widthHeightFn(200, 320)};
  flex-direction: column;
  padding: ${widthHeightFn(20)};
  margin: ${widthHeightFn(20)};
  background-color: #afe6f1;
  height: 100%;
  border-radius: 25px;
  @media (min-width: 768px) {
    width: ${widthHeightFn(320, 768)};
    min-height: ${widthHeightFn(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${widthHeightFn(500)};
    min-height: ${widthHeightFn(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: 5px;
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
