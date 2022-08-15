import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ME } from "../../utils/queries";
import Header from "../../components/header/Header";
import Hamburger from "../../components/hamburger/Hamburger";
import UserHeader from "../../components/userHeader/UserHeader";
import { Layout, RowSpacer } from "./style";
import LearnSkill from "../../components/userLearnSkills/LearnSkill";
const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <>Loading...</>;
  }

  const profileData = data?.me || {};

  return (
    <>
      <Header />
      <Hamburger />
      <Layout>
        <UserHeader data={profileData} />
        <RowSpacer />
        <h1> Learning skill</h1>
        <LearnSkill skills={profileData.learnSkill} />
        <h1> Teaching skill</h1>
        <LearnSkill skills={profileData.learnSkill} />
      </Layout>
    </>
  );
};

export default Profile;
