import React from "react";
import { StyledSection, SkillSection } from "./AllSkills-Style";

const AllSkills = ({ skills }) => {
  return (
    <StyledSection>
      <SkillSection>
        {/* {skills.map((skill) => ( */}
        <li className="grid__item">
          {/* <li className="grid__item" key={skill.index}> */}
          <div className="grid__item__inner">
            {/* {skill.images[0] && (
                <div className="grid__item__img">
                  <img src={skill.images[0].url} alt={skill.name} />
                </div>
              )} */}
            <h3 className="grid__item__name overflow-ellipsis">
              {"skill.name"}
            </h3>
            <p className="grid__item__label">teacher</p>
          </div>
        </li>
        {/* ))} */}
      </SkillSection>
    </StyledSection>
  );
};

export default AllSkills;
