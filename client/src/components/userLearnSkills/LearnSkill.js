import React from "react";

import { LearnSkillSection, StyledSection } from "./LearnSkill-style";

const LearnSkill = ({ skills }) => {
  return (
    <StyledSection>
      {console.log(skills)}
      <LearnSkillSection>
        {skills.map((skill) => (
          <li className="grid__item" key={skill.index}>
            <div className="grid__item__inner">
              {/* {skill.images[0] && (
                <div className="grid__item__img">
                  <img src={skill.images[0].url} alt={skill.name} />
                </div>
              )} */}
              <h3 className="grid__item__name overflow-ellipsis">
                {skill.name}
              </h3>
              <p className="grid__item__label">{`skill.teacher.toUpperCase()`}</p>
            </div>
            {"todo add link to specific skill "}
          </li>
        ))}
      </LearnSkillSection>
    </StyledSection>
  );
};

export default LearnSkill;
