import React from "react";
import { Link } from "react-router-dom";

import { LearnSkillSection, StyledSection } from "./LearnSkill-style";

const LearnSkill = ({ skills }) => {
  return (
    <StyledSection>
      {console.log(skills)}
      <LearnSkillSection>
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
            </div>
            <Link className=".section__see-all" to={`/skills/${skill._id}`}>
              Learn More
            </Link>
          </li>
        ))}
      </LearnSkillSection>
    </StyledSection>
  );
};

export default LearnSkill;
