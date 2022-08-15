import React from 'react'
import { StyledSection, SkillSection } from './AllSkills-Style'
import { Link } from 'react-router-dom'

const AllSkills = ({ skills }) => {
  return (
    <StyledSection>
      <SkillSection>
        {console.log(skills)}
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
              <p className="grid__item__label">{skill.teacher.toUpperCase()}</p>
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
