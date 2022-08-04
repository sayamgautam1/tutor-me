import styled, { keyframes } from "styled-components";
import Header from "../../components/header/Header";
import { breakpoints } from "../../components/Media";
import TimelineRow from "./TimelineRow";
import teacher from "./teacher.jpeg";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Hamburger from "../../components/hamburger/Hamburger";

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
  border-radius: 5%;
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
const HeaderText = styled.div`
  flex: 100%;
  padding: 20px;
  @media (min-width: 900px) {
    padding: 0;
    width: 50%;
    min-width: 200px;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 20%;
    background-position: center center;
  }
`;

const RightImage = styled.div`
  background-position: center center;
  width: 100%;
  height: 50vh;
  max-height: 800px;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${teacher});
  margin: 20px;
  @media (min-width: 900px) {
    width: 100%;
    height: 50vh;
    margin: 20px;
    max-height: 800px;
    min-height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    background-image: url(${teacher});
    border-radius: 5%;
    box-shadow: 5px 10px #ffdfde;
  }
`;
const RowSpacer = styled.div`
  width: 100%;
  padding: 40px 0;
`;
const Landing = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hamburger />
        <Content>
          <Left>
            <HeaderText>
              <Heading>Find your perfect Tutor</Heading>
              <Paragraph>Learning has never been this easy</Paragraph>
            </HeaderText>
          </Left>
          <Right>
            <RightImage />
          </Right>
        </Content>
        <RowSpacer />
        <TimelineRow />
        <RowSpacer />
      </Layout>
    </>
  );
};

export default Landing;
