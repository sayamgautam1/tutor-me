import React from "react";
import { Link } from "react-router-dom";

import { TeachSkillSection, StyledSection } from "./TeachSkill-style";

const TeachSkill = ({ skills }) => {
  return (
    <StyledSection>
      <TeachSkillSection>
        {skills.map((skill) => (
          <li className="grid__item" key={skill._id}>
            <div className="grid__item__inner">
              <div className="grid__item__img">
                <img
                  src={`https://avatars.dicebear.com/api/gridy/${skill.name}.svg`}
                  alt={skill.name}
                />
              </div>

              <h3 className="grid__item__name overflow-ellipsis">
                {skill.name}
              </h3>
              <p className="grid__item__label">{`${skill.classLength} mins`}</p>
              <Link className=".section__see-all" to={`/skills/${skill._id}`}>
                Learn More
              </Link>
            </div>
          </li>
        ))}
      </TeachSkillSection>
    </StyledSection>
  );
};

export default TeachSkill;
