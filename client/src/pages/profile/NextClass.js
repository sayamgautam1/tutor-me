import React from "react";
import {
  TeachSkillSection,
  StyledSection,
  Styles,
} from "../../components/userTeachSkill/TeachSkill-style";
// [{id: x, ..rest of the skills}] => {x: {id: x}}
import { makeReference, useMutation } from "@apollo/client";
import { REMOVE_CLASS } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import AlertBox from "../../components/alertBox/AlertBox";
const NextClass = ({ classes, skills }) => {
  const [removeClass, { error }] = useMutation(REMOVE_CLASS, {
    update(cache, { data: { removeClass } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeClass },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveClass = async (time) => {
    try {
      const { data } = await removeClass({
        variables: { classId: time._id },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <StyledSection>
      <TeachSkillSection>
        {classes.map((time) => {
          const matchedSkill = skills.find((s) =>
            s.availTimes.some((t) => time._id === t._id)
          );

          return matchedSkill ? (
            <li className="grid__item" key={time._id}>
              <div className="grid__item__inner">
                <AlertBox
                  onConfirm={() => handleRemoveClass(time)}
                  title="Are you sure you want to remove this allocated class"
                  content={matchedSkill.name}
                  trigger="Remove Class"
                  skill={matchedSkill}
                />
                <div className="grid__item__img">
                  <img
                    src={`https://avatars.dicebear.com/api/gridy/${matchedSkill.name}.svg`}
                    alt={matchedSkill.name}
                  />
                </div>
                <h1 className="grid__item__name overflow-ellipsis">
                  {matchedSkill.name}
                </h1>

                <h3 className="grid__item__name overflow-ellipsis">
                  start-time:
                  {` ${new Date(parseInt(time.startTime)).toLocaleDateString(
                    "en-GB"
                  )} ${new Date(parseInt(time.startTime)).toLocaleTimeString(
                    "en-GB"
                  )}`}
                </h3>
                <h3 className="grid__item__name overflow-ellipsis">
                  end-time:
                  {` ${new Date(parseInt(time.endTime)).toLocaleDateString(
                    "en-GB"
                  )} ${new Date(parseInt(time.endTime)).toLocaleTimeString(
                    "en-GB"
                  )}`}
                </h3>
              </div>
            </li>
          ) : (
            <h1>No Classes Booked</h1>
          );
        })}
      </TeachSkillSection>
    </StyledSection>
  );
};

export default NextClass;
