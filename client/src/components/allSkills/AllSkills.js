import React from 'react'
import { StyledSection, SkillSection } from './AllSkills-Style'
import { Link } from 'react-router-dom'

const AllSkills = ({ skills }) => {
  return (
    <StyledSection>
      <SkillSection>
        {console.log(skills)}
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
              {console.log(skill.teacher.username)}
              <p className="grid__item__label">{skill.teacher.username}</p>
              <Link className=".section__see-all" to={`/skills/${skill._id}`}>
                Learn More
              </Link>
            </div>
          </li>
        ))}
      </SkillSection>
    </StyledSection>
  )
}

export default AllSkills
