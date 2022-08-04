import styled, { keyframes } from "styled-components";
import Header from "../../components/header/Header";
import { breakpoints } from "../../components/Media";

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const Layout = styled.div`
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

const Content = styled.div`
  max-width: 2000px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff0f1;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
`;
const Left = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Landing = () => {
  return (
    <Layout>
      <Content>
        <Header />
        <Left>left image</Left>
        <Right>Right image</Right>
      </Content>
    </Layout>
  );
};

export default Landing;
