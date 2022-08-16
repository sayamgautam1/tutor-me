import { useQuery } from "@apollo/client";
import { Layout, Row, Left, Right } from "./style";
import Header from "../../components/header/Header";
import Hamburger from "../../components/hamburger/Hamburger";
import SearchBar from "../../components/searchbar/SearchBar";
import AddSkill from "../../components/addSkill/AddSkill";
import { QUERY_SKILLS } from "../../utils/queries";
import AllSkills from "../../components/allSkills/AllSkills";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_SKILLS);

  if (loading) {
    return <>Loading...</>;
  }

  const skillsData = data?.skills || {};
  let SKILLS = [];
  skillsData.forEach((skill) => {
    SKILLS.push(skill.name);
  });

  return (
    <>
      <Header />
      <Hamburger />
      <Layout>
        <Row>
          <Left>
            <AddSkill />
            {/* <AllSkills skills={skillsData} /> */}
          </Left>
          <Right>
            <SearchBar SKILLS={skillsData} />
          </Right>
        </Row>
      </Layout>
    </>
  );
};

export default Dashboard;
