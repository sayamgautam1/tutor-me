import React from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import Header from "../../components/header/Header";
import { Layout, StyledHeader } from "./SingleSkill-style";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_SKILL } from "../../utils/queries";

const SingleSkill = () => {
  const { skillId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_SKILL, {
    // pass URL parameter
    variables: { skillId: skillId },
  });

  const skill = data?.skill || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Hamburger />
      <Layout>
        <StyledHeader type="skill">
          <div className="header__inner">
            <img
              className="header__img"
              src={`https://avatars.dicebear.com/api/jdenticon/${skill.name}.svg`}
              alt="Avatar"
            />
            <div>
              <div className="header__overline">{`${skill.teacher.username} presents`}</div>
              <h1 className="header__name">{skill.name}</h1>
              <p className="header__meta">
                <span>{`course duration ${skill.classLength} classes`}</span>
              </p>
            </div>
          </div>
        </StyledHeader>
      </Layout>
    </>
  );
};

export default SingleSkill;
