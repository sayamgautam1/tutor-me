import React from 'react'
import { Link } from 'react-router-dom'
import { TeachSkillSection, StyledSection, Styles } from './TeachSkill-style'
import { useMutation } from '@apollo/client'
import { REMOVE_SKILL } from '../../utils/mutations'
import { QUERY_ME } from '../../utils/queries'

const TeachSkill = ({ skills, isLoggedInUser = false }) => {
  const [removeTeachSkill, { error }] = useMutation(REMOVE_SKILL, {
    update(cache, { data: { removeTeachSkill } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeTeachSkill },
        })
      } catch (e) {
        console.error(e)
      }
    },
  })

  const handleRemoveSkill = async (skill) => {
    try {
      const { data } = await removeTeachSkill({
        variables: { skill },
      })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <StyledSection>
      <TeachSkillSection>
        {skills.map((skill) => (
          <li className="grid__item" key={skill._id}>
            <div className="grid__item__inner">
              {/* <RemoveTeacher teachSkill={skill.teachSkill} /> */}
              <Styles>
                <div>
                  <button
                    className="btn btn-sm btn-danger ml-auto"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    Remove Skill
                  </button>
                </div>
              </Styles>
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
  )
}

export default TeachSkill
