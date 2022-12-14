import React from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import Header from "../../components/header/Header";
import {
  Layout,
  StyledHeader,
  Left,
  Right,
  RowSpacer,
} from "./SingleSkill-style";
import Container from "../../components/container/Container";
import Paragraph from "../../components/Paragraph";
import TimeSlots from "./TimeSlots";
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
      {console.log(skill.availTimes)}
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
              <div className="header__overline">{`${skill.teacher[0].username} presents`}</div>
              <h1 className="header__name">{skill.name}</h1>
              <p className="header__meta">
                <span>{`course duration ${skill.classLength} classes`}</span>
              </p>
            </div>
          </div>
        </StyledHeader>
        <RowSpacer />
        <Container>
          <Left>
            <Paragraph>
              What is an example of a paragraph? A good example of a paragraph
              contains a topic sentence, details and a conclusion. 'There are
              many different kinds of animals that live in China. Tigers and
              leopards are animals that live in China's forests in the north
            </Paragraph>
          </Left>
          <Right>
            <h1>Current classes</h1>
            <TimeSlots classTime={skill.availTimes} />
          </Right>
        </Container>
      </Layout>
    </>
  );
};

export default SingleSkill;
