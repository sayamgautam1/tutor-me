import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  padding: 10px;
  @media (min-width: 900px) {
    padding: 10px;
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
        <Left>left image</Left>
        <Right>Right image</Right>
      </Content>
    </Layout>
  );
};

export default Landing;
