import React from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import Header from "../../components/header/Header";
import {
  Layout,
  StyledHeader,
  Left,
  Right,
  RowSpacer,
  TimeSlotsStyle,
} from "./SingleSkill-style";
import Container from "../../components/container/Container";
import Paragraph from "../../components/Paragraph";
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
  const addTimeSlot = (id) => {
    console.log(id);
  };
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
              <div className="header__overline">{`${skill.teacher.username} presents`}</div>
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
            <TimeSlotsStyle>
              <div className="container">
                <div className="time-list">
                  {skill.availTimes && skill.availTimes.length > 0 ? (
                    skill.availTimes.map((time) => (
                      <li
                        key={time}
                        className="time"
                        onClick={() => addTimeSlot(time._id)}
                      >
                        <span className="skill-id">
                          start-time:
                          {` ${new Date(
                            parseInt(time.startTime)
                          ).toLocaleDateString("en-GB")} ${new Date(
                            parseInt(time.startTime)
                          ).toLocaleTimeString("en-GB")}`}
                        </span>

                        <span className="skill-id">
                          end-time:
                          {` ${new Date(
                            parseInt(time.endTime)
                          ).toLocaleDateString("en-GB")} ${new Date(
                            parseInt(time.endTime)
                          ).toLocaleTimeString("en-GB")}`}
                        </span>
                      </li>
                    ))
                  ) : (
                    <h1>No timeslots available!</h1>
                  )}
                </div>
              </div>
            </TimeSlotsStyle>
          </Right>
        </Container>
      </Layout>
    </>
  );
};

export default SingleSkill;
