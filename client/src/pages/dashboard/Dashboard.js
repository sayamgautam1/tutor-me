import { useQuery } from "@apollo/client";
import { Layout, Row, Left, Right } from "./style";
import Header from "../../components/header/Header";
import Hamburger from "../../components/hamburger/Hamburger";
import SearchBar from "../../components/searchbar/SearchBar";
import { QUERY_SKILLS } from "../../utils/queries";
import AllSkills from "../../components/allSkills/AllSkills";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_SKILLS);

  if (loading) {
    return <>Loading...</>;
  }

  const skillsData = data?.skills || {};
  console.log(skillsData);

  return (
    <Layout>
      <Header />
      <Hamburger />

      <Row>
        <Left>
          <SearchBar />
        </Left>
        <Right>
          <AllSkills skills={skillsData} />
        </Right>
      </Row>
    </Layout>
  );
};

export default Dashboard;
