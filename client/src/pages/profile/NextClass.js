import React from "react";
import {
  TeachSkillSection,
  StyledSection,
  Styles,
} from "../../components/userTeachSkill/TeachSkill-style";
// [{id: x, ..rest of the skills}] => {x: {id: x}}
const NextClass = ({ classes, skills }) => {
  return (
    <StyledSection>
      <TeachSkillSection>
        {classes.map((time) => {
          const matchedSkill = skills.find((s) =>
            s.availTimes.some((t) => time._id === t._id)
          );

          return (
            <li className="grid__item" key={time._id}>
              <div className="grid__item__inner">
                <h1 className="grid__item__name overflow-ellipsis">
                  {matchedSkill.name}
                </h1>
                ;
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
          );
        })}
      </TeachSkillSection>
    </StyledSection>
  );
};

export default NextClass;
